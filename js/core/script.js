/* ===================================== */
/* SCRIPT PRINCIPAL DO JOGO */
/* ===================================== */

/* ============================= */
/* ELEMENTOS DA TELA */
/* ============================= */

const jogo = {
    doencaAtual: null,
    estadoPaciente: 1,
    tempoRestante: 0,
    pontos: 100
};

const btnSortear = document.getElementById("btnSortear");
const nomeDoencaEl = document.getElementById("nomeDoenca");
const dicasEl = document.getElementById("listaDicas");
const resultadoExameEl = document.getElementById("resultadoExame");
let examesSolicitados = 0;
let modoOculto = false;
const LIMITE_EXAMES = 3;

/* ============================= */
/* VARIÁVEIS GLOBAIS */
/* ============================= */

// Clona o banco para evitar repetição
let doencasDisponiveis = [];

document.addEventListener("DOMContentLoaded", () => {
    doencasDisponiveis = [...doencas];
});

/* ============================= */
/* EVENTOS */
/* ============================= */

btnSortear.addEventListener("click", sortearDoenca);

/* ============================= */
/* SORTEAR DOENÇA */
/* ============================= */
function ativarBotoesExame() {
    const botoes = document.querySelectorAll(".btnExame");
    botoes.forEach(botao => {
        botao.disabled = false;
        botao.style.opacity = "1";
    });
}

function sortearDoenca() {

    if (doencasDisponiveis.length === 0) {
        alert("Todas as doenças já foram utilizadas. Reinicie a página para jogar novamente.");
        return;
    }

    const indice = Math.floor(Math.random() * doencasDisponiveis.length);

    jogo.doencaAtual = doencasDisponiveis[indice];

    // Remove da lista para não repetir
    doencasDisponiveis.splice(indice, 1);

    exibirDoenca(jogo.doencaAtual);

    // Limpa exame anterior
    resultadoExameEl.textContent = "Nenhum exame solicitado.";
    examesSolicitados = 0;
    ativarBotoesExame();
}

/* ============================= */
/* EXIBIR DOENÇA E DICAS */
/* ============================= */

function exibirDoenca(doenca) {

    nomeDoencaEl.textContent = doenca.nome;

    dicasEl.innerHTML = "";

    doenca.dicas.forEach(dica => {
        const li = document.createElement("li");
        li.textContent = dica;
        dicasEl.appendChild(li);
    });
}

/* ============================= */
/* SOLICITAÇÃO DE EXAMES */
/* ============================= */

function solicitarExame(tipoExame) {

    if (!jogo.doencaAtual) {
        alert("Sorteie uma doença primeiro.");
        return;
    }

    if (examesSolicitados >= LIMITE_EXAMES) {
        alert("Limite de exames atingido nesta rodada.");
        return;
    }

    examesSolicitados++;

    const resultado = gerarResultadoExame(tipoExame, jogo.doencaAtual);

    exibirResultado(resultado);

    if (examesSolicitados >= LIMITE_EXAMES) {
        desativarBotoesExame();
    }
}

function desativarBotoesExame() {
    const botoes = document.querySelectorAll(".btnExame");
    botoes.forEach(botao => {
        botao.disabled = true;
        botao.style.opacity = "0.5";
    });
}

/* ============================= */
/* EXIBIR RESULTADO */
/* ============================= */

function exibirResultado(laudo) {

    resultadoExameEl.innerHTML = "";

    const titulo = document.createElement("h3");
    titulo.textContent = laudo.exame;

    const metodo = document.createElement("p");
    metodo.innerHTML = `<strong>Método:</strong> ${laudo.metodo}`;

    const tabela = document.createElement("div");

    laudo.resultados.forEach(item => {
        const linha = document.createElement("p");
        linha.innerHTML = `
            <strong>${item.parametro}:</strong> 
            ${item.valor} ${item.unidade} 
            <em>(VR: ${item.referencia})</em>
        `;
        tabela.appendChild(linha);
    });

    const conclusao = document.createElement("p");
    conclusao.innerHTML = `<strong>Conclusão:</strong> ${laudo.conclusao}`;

    const classificacao = document.createElement("p");
    classificacao.innerHTML = `<strong>Status:</strong> ${laudo.classificacao}`;

    resultadoExameEl.appendChild(titulo);
    resultadoExameEl.appendChild(metodo);
    resultadoExameEl.appendChild(tabela);
    resultadoExameEl.appendChild(conclusao);
    resultadoExameEl.appendChild(classificacao);
}

/* ============================= */
/* (OPCIONAL) BOTÃO REINICIAR */
/* ============================= */

// Se quiser adicionar depois no HTML:
// <button onclick="reiniciarJogo()">Reiniciar</button>

function reiniciarJogo() {

    doencasDisponiveis = [...doencas];
    jogo.doencaAtual = null;

    nomeDoencaEl.textContent = "Nenhuma doença sorteada";
    dicasEl.innerHTML = "";
    resultadoExameEl.textContent = "Nenhum exame solicitado.";
}

const botoesExame = document.querySelectorAll(".btnExame");

botoesExame.forEach(botao => {
    botao.addEventListener("click", () => {
        const tipoExame = botao.getAttribute("data-exame");
        solicitarExame(tipoExame);
    });
});

const btnOcultar = document.getElementById("btnOcultar");

function alternarOcultacao() {

    modoOculto = !modoOculto;

    btnOcultar.classList.toggle("ativo");

    if (!jogo.doencaAtual) return;

    if (modoOculto) {

        // Oculta nome
        nomeDoencaEl.textContent = "Doença Oculta";

        // Oculta dicas
        dicasEl.style.display = "none";

    } else {

        // Mostra nome real
        nomeDoencaEl.textContent = jogo.doencaAtual.nome;

        // Mostra dicas novamente
        dicasEl.style.display = "block";
    }
}
