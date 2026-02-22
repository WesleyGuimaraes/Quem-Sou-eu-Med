/* ===================================== */
/* MOTOR CLÍNICO 3.0 – BASEADO EM REGRAS */
/* ===================================== */

function gerarResultadoExame(tipoExame, doenca) {

    switch (tipoExame) {
        case "troponina": return gerarTroponina(doenca);
        case "ecg": return gerarECG(doenca);
        case "hemograma": return gerarHemograma(doenca);
        case "gasometria": return gerarGasometria(doenca);
        case "pcr": return gerarPCR(doenca);
        case "rx": return gerarRaioX(doenca);
        case "eas": return gerarEAS(doenca);
        case "tc": return gerarImagem(doenca);
        default:
            return laudoInconclusivo(tipoExame);
    }
}

/* ================= UTILITÁRIOS ================= */

function valor(min, max, casas = 2) {
    return (Math.random() * (max - min) + min).toFixed(casas);
}

function inteiro(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function laudoBase(exame, metodo, resultados, conclusao, classificacao) {
    return {
        exame,
        metodo,
        resultados,
        conclusao,
        classificacao
    };
}

function laudoInconclusivo(tipoExame) {
    return laudoBase(
        tipoExame.toUpperCase(),
        "Método padrão",
        [],
        "Exame não possui correlação clínica significativa neste contexto.",
        "INCONCLUSIVO"
    );
}

/* ================= TROPONINA ================= */

function gerarTroponina(doenca) {

    let alterado = doenca.alteracoesEsperadas?.isquemico;

    let valorTroponina = alterado ? valor(1, 6) : valor(0.00, 0.04);

    let conclusao = alterado
        ? "Elevação compatível com injúria miocárdica. Correlacionar com quadro clínico."
        : "Dentro dos limites da normalidade.";

    return laudoBase(
        "TROPONINA I",
        "Imunoensaio quimioluminescente",
        [{
            parametro: "Troponina I",
            valor: valorTroponina,
            unidade: "ng/mL",
            referencia: "< 0.04"
        }],
        conclusao,
        alterado ? "CRITICO" : "NORMAL"
    );
}

/* ================= GASOMETRIA ================= */

function gerarGasometria(doenca) {

    let acidose = doenca.alteracoesEsperadas?.acidose;
    let alcalose = doenca.alteracoesEsperadas?.alcalose;

    let pH = 7.40;
    let pCO2 = 40;
    let HCO3 = 24;

    if (acidose) {
        pH = valor(7.10, 7.30);
        HCO3 = inteiro(10, 18);
    }

    if (alcalose) {
        pH = valor(7.45, 7.60);
        HCO3 = inteiro(28, 36);
    }

    return laudoBase(
        "GASOMETRIA ARTERIAL",
        "Análise de sangue arterial",
        [
            { parametro: "pH", valor: pH, unidade: "", referencia: "7.35 – 7.45" },
            { parametro: "pCO₂", valor: pCO2, unidade: "mmHg", referencia: "35 – 45" },
            { parametro: "HCO₃⁻", valor: HCO3, unidade: "mEq/L", referencia: "22 – 26" }
        ],
        acidose
            ? "Acidose metabólica detectada."
            : alcalose
                ? "Alcalose metabólica detectada."
                : "Parâmetros dentro da normalidade.",
        acidose || alcalose ? "ALTERADO" : "NORMAL"
    );
}

/* ================= ECG ================= */

function gerarECG(doenca) {

    let alterado = doenca.alteracoesEsperadas?.isquemico;

    let descricao = alterado
        ? "Alterações sugestivas de isquemia miocárdica."
        : "Ritmo sinusal, sem alterações significativas.";

    return laudoBase(
        "ELETROCARDIOGRAMA",
        "Registro de 12 derivações",
        [{
            parametro: "Traçado",
            valor: descricao,
            unidade: "",
            referencia: "Ritmo sinusal"
        }],
        "Interpretar em conjunto com quadro clínico.",
        alterado ? "ALTERADO" : "NORMAL"
    );
}

/* ================= HEMOGRAMA ================= */

function gerarHemograma(doenca) {

    let leucocitos = 7000;
    let hb = 14;
    let plaquetas = 250000;

    if (doenca.alteracoesEsperadas?.inflamatorio) {
        leucocitos = inteiro(14000, 22000);
    }

    if (doenca.sistema === "Hematologia") {
        hb = inteiro(6, 10);
    }

    return laudoBase(
        "HEMOGRAMA COMPLETO",
        "Citometria automatizada",
        [
            { parametro: "Hemoglobina", valor: hb, unidade: "g/dL", referencia: "12 – 16" },
            { parametro: "Leucócitos", valor: leucocitos, unidade: "/mm³", referencia: "4.000 – 10.000" },
            { parametro: "Plaquetas", valor: plaquetas, unidade: "/mm³", referencia: "150.000 – 400.000" }
        ],
        doenca.alteracoesEsperadas?.inflamatorio
            ? "Leucocitose compatível com processo inflamatório/infeccioso."
            : "Parâmetros dentro da normalidade.",
        doenca.alteracoesEsperadas?.inflamatorio ? "ALTERADO" : "NORMAL"
    );
}

/* ================= PCR ================= */

function gerarPCR(doenca) {

    let elevado = doenca.alteracoesEsperadas?.inflamatorio;

    let valorPCR = elevado ? inteiro(50, 200) : inteiro(0, 5);

    return laudoBase(
        "PROTEÍNA C REATIVA",
        "Imunoturbidimetria",
        [{
            parametro: "PCR",
            valor: valorPCR,
            unidade: "mg/L",
            referencia: "< 5"
        }],
        elevado
            ? "Elevação compatível com processo inflamatório."
            : "Valor dentro da normalidade.",
        elevado ? "ALTERADO" : "NORMAL"
    );
}

/* ================= RX ================= */

function gerarRaioX(doenca) {

    let alterado = doenca.sistema === "Respiratório";

    let descricao = alterado
        ? "Alteração radiológica compatível com acometimento pulmonar."
        : "Sem alterações significativas.";

    return laudoBase(
        "RAIO-X",
        "Radiografia convencional",
        [{
            parametro: "Descrição",
            valor: descricao,
            unidade: "",
            referencia: "Sem alterações"
        }],
        "Correlacionar com clínica.",
        alterado ? "ALTERADO" : "NORMAL"
    );
}

/* ================= EAS ================= */

function gerarEAS(doenca) {

    let infeccioso = doenca.alteracoesEsperadas?.infeccioso;

    return laudoBase(
        "EAS",
        "Análise automatizada",
        [{
            parametro: "Leucócitos",
            valor: infeccioso ? "++" : "Ausente",
            unidade: "",
            referencia: "Ausente"
        }],
        infeccioso
            ? "Achados compatíveis com infecção urinária."
            : "Sem alterações relevantes.",
        infeccioso ? "ALTERADO" : "NORMAL"
    );
}

/* ================= TC / RM ================= */

function gerarImagem(doenca) {

    let alterado = doenca.gravidade >= 3;

    return laudoBase(
        "TOMOGRAFIA / RM",
        "Imagem seccional",
        [{
            parametro: "Achado",
            valor: alterado
                ? "Alteração estrutural relevante detectada."
                : "Sem alterações estruturais significativas.",
            unidade: "",
            referencia: "Sem alterações"
        }],
        "Interpretar conforme contexto clínico.",
        alterado ? "ALTERADO" : "NORMAL"
    );
}