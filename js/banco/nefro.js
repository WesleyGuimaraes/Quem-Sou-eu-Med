const nefro = [

/* ================= INSUFICIÊNCIA RENAL ================= */

{
nome: "Insuficiência Renal Aguda Pré-Renal",
sistema: "Nefrologia",
gravidade: 4,
dicas: [
"Hipotensão ou desidratação",
"Elevação de ureia e creatinina",
"Relação ureia/creatinina aumentada",
"Oligúria",
"Reversível com reposição volêmica"
],
alteracoesEsperadas: { }
},

{
nome: "Insuficiência Renal Aguda Intrínseca",
sistema: "Nefrologia",
gravidade: 4,
dicas: [
"Nefrotoxicidade",
"Necrose tubular aguda",
"Cilindros granulosos no EAS",
"Oligúria",
"Creatinina elevada"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Insuficiência Renal Aguda Pós-Renal",
sistema: "Nefrologia",
gravidade: 4,
dicas: [
"Obstrução urinária",
"Hiperplasia prostática",
"Anúria",
"Dor suprapúbica",
"Hidronefrose em imagem"
],
alteracoesEsperadas: { }
},

{
nome: "Doença Renal Crônica",
sistema: "Nefrologia",
gravidade: 4,
dicas: [
"TFG reduzida cronicamente",
"Anemia normocítica",
"Hiperfosfatemia",
"História de HAS ou DM",
"Evolução lenta"
],
alteracoesEsperadas: { }
},

/* ================= SÍNDROMES GLOMERULARES ================= */

{
nome: "Síndrome Nefrótica",
sistema: "Nefrologia",
gravidade: 3,
dicas: [
"Edema importante",
"Proteinúria maciça",
"Hipoalbuminemia",
"Hiperlipidemia",
"Urina espumosa"
],
alteracoesEsperadas: { }
},

{
nome: "Síndrome Nefrítica",
sistema: "Nefrologia",
gravidade: 4,
dicas: [
"Hematúria",
"Edema",
"Hipertensão",
"Oligúria",
"Proteinúria leve"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Glomerulonefrite Pós-Estreptocócica",
sistema: "Nefrologia",
gravidade: 3,
dicas: [
"Infecção prévia de garganta",
"Hematúria",
"Edema periorbitário",
"Hipertensão",
"Crianças"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Nefropatia Diabética",
sistema: "Nefrologia",
gravidade: 3,
dicas: [
"Diabetes de longa data",
"Microalbuminúria",
"Evolução lenta",
"Hipertensão associada",
"Proteinúria progressiva"
],
alteracoesEsperadas: { }
},

/* ================= DISTÚRBIOS HIDROELETROLÍTICOS ================= */

{
nome: "Hipercalemia",
sistema: "Nefrologia",
gravidade: 5,
dicas: [
"Fraqueza muscular",
"Alterações no ECG",
"Insuficiência renal",
"Uso de IECA",
"Risco de arritmia"
],
alteracoesEsperadas: { }
},

{
nome: "Hipocalemia",
sistema: "Nefrologia",
gravidade: 4,
dicas: [
"Fraqueza muscular",
"Uso de diurético",
"Arritmia",
"Alcalose metabólica",
"Câimbras"
],
alteracoesEsperadas: { alcalose: true }
},

{
nome: "Hiponatremia",
sistema: "Nefrologia",
gravidade: 4,
dicas: [
"Confusão mental",
"Náuseas",
"Convulsões",
"SIADH",
"Sódio baixo"
],
alteracoesEsperadas: { }
},

{
nome: "Hipernatremia",
sistema: "Nefrologia",
gravidade: 4,
dicas: [
"Desidratação",
"Alteração do nível de consciência",
"Poliúria",
"Sódio elevado",
"Idosos"
],
alteracoesEsperadas: { }
},

/* ================= DISTÚRBIOS ÁCIDO-BASE ================= */

{
nome: "Acidose Metabólica",
sistema: "Nefrologia",
gravidade: 4,
dicas: [
"pH baixo",
"Bicarbonato reduzido",
"Respiração de Kussmaul",
"Insuficiência renal",
"Diabetes descompensado"
],
alteracoesEsperadas: { acidose: true }
},

{
nome: "Alcalose Metabólica",
sistema: "Nefrologia",
gravidade: 3,
dicas: [
"Vômitos persistentes",
"Uso de diuréticos",
"pH elevado",
"Hipocalemia",
"Bicarbonato aumentado"
],
alteracoesEsperadas: { alcalose: true }
},

{
nome: "Acidose Respiratória Compensada",
sistema: "Nefrologia",
gravidade: 3,
dicas: [
"DPOC",
"Retenção de CO2",
"pH discretamente reduzido",
"HCO3 elevado",
"Compensação renal"
],
alteracoesEsperadas: { acidose: true }
},

/* ================= INFECÇÕES RENAIS ================= */

{
nome: "Pielonefrite Aguda",
sistema: "Nefrologia",
gravidade: 4,
dicas: [
"Febre",
"Dor lombar",
"Sinal de Giordano positivo",
"Disúria",
"Leucocitose"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Abscesso Renal",
sistema: "Nefrologia",
gravidade: 4,
dicas: [
"Febre persistente",
"Dor lombar",
"Falha ao antibiótico",
"Imagem alterada",
"Leucocitose"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

/* ================= OBSTRUTIVAS ================= */

{
nome: "Litíase Renal",
sistema: "Nefrologia",
gravidade: 3,
dicas: [
"Dor lombar intensa",
"Irradiação para virilha",
"Hematúria",
"Início súbito",
"Inquietação"
],
alteracoesEsperadas: { }
},

{
nome: "Hidronefrose",
sistema: "Nefrologia",
gravidade: 3,
dicas: [
"Dilatação pielocalicial",
"Obstrução urinária",
"Dor lombar",
"Redução do fluxo urinário",
"Diagnóstico por imagem"
],
alteracoesEsperadas: { }
},

/* ================= OUTRAS ================= */

{
nome: "Rabdomiólise",
sistema: "Nefrologia",
gravidade: 5,
dicas: [
"Dor muscular",
"Urina escura",
"CPK elevada",
"Insuficiência renal aguda",
"História de trauma"
],
alteracoesEsperadas: { acidose: true }
},

{
nome: "Síndrome Hemolítico-Urêmica",
sistema: "Nefrologia",
gravidade: 5,
dicas: [
"Anemia hemolítica",
"Trombocitopenia",
"Insuficiência renal",
"Diarreia prévia",
"Crianças"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Doença Policística Renal",
sistema: "Nefrologia",
gravidade: 3,
dicas: [
"História familiar",
"Cistos renais bilaterais",
"Hipertensão",
"Hematúria",
"Evolução para DRC"
],
alteracoesEsperadas: { }
}

];