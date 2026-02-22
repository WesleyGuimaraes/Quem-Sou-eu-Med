const neurologia = [

/* ================= AVC ================= */

{
nome: "AVC Isquêmico",
sistema: "Neurologia",
gravidade: 5,
dicas: [
"Início súbito",
"Déficit neurológico focal",
"Hemiparesia",
"Assimetria facial",
"Fatores de risco cardiovasculares"
],
alteracoesEsperadas: { }
},

{
nome: "AVC Hemorrágico",
sistema: "Neurologia",
gravidade: 5,
dicas: [
"Cefaleia intensa súbita",
"Déficit neurológico focal",
"Rebaixamento do nível de consciência",
"Hipertensão",
"Pode ter vômitos"
],
alteracoesEsperadas: { }
},

{
nome: "AIT (Ataque Isquêmico Transitório)",
sistema: "Neurologia",
gravidade: 4,
dicas: [
"Déficit focal reversível",
"Duração menor que 24h",
"Sem sequela",
"Fatores de risco vasculares",
"Alto risco de AVC futuro"
],
alteracoesEsperadas: { }
},

/* ================= CRISES EPILÉPTICAS ================= */

{
nome: "Crise Convulsiva Tônico-Clônica",
sistema: "Neurologia",
gravidade: 4,
dicas: [
"Perda de consciência",
"Movimentos generalizados",
"Mordedura de língua",
"Período pós-ictal",
"Início súbito"
],
alteracoesEsperadas: { }
},

{
nome: "Status Epiléptico",
sistema: "Neurologia",
gravidade: 5,
dicas: [
"Crise prolongada",
"Sem recuperação da consciência",
"Emergência neurológica",
"Necessita benzodiazepínico",
"Risco de dano cerebral"
],
alteracoesEsperadas: { }
},

{
nome: "Epilepsia",
sistema: "Neurologia",
gravidade: 3,
dicas: [
"Crises recorrentes",
"Diagnóstico clínico",
"Pode ter aura",
"Necessita anticonvulsivante",
"Evolução crônica"
],
alteracoesEsperadas: { }
},

/* ================= INFECÇÕES SNC ================= */

{
nome: "Meningite Bacteriana",
sistema: "Neurologia",
gravidade: 5,
dicas: [
"Febre",
"Rigidez de nuca",
"Cefaleia intensa",
"Rebaixamento do nível de consciência",
"Evolução rápida"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Meningite Viral",
sistema: "Neurologia",
gravidade: 3,
dicas: [
"Cefaleia",
"Febre",
"Rigidez de nuca leve",
"Evolução autolimitada",
"Paciente jovem"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Encefalite",
sistema: "Neurologia",
gravidade: 5,
dicas: [
"Alteração comportamental",
"Convulsões",
"Febre",
"Déficit focal",
"Pode ser herpética"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

/* ================= DESMIELINIZANTES ================= */

{
nome: "Esclerose Múltipla",
sistema: "Neurologia",
gravidade: 3,
dicas: [
"Mulher jovem",
"Surtos neurológicos",
"Déficits multifocais",
"Neurite óptica",
"Evolução em surtos"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Neuromielite Óptica",
sistema: "Neurologia",
gravidade: 4,
dicas: [
"Neurite óptica grave",
"Mielite transversa",
"Déficit visual importante",
"Evolução recorrente",
"Autoimune"
],
alteracoesEsperadas: { inflamatorio: true }
},

/* ================= NEURODEGENERATIVAS ================= */

{
nome: "Doença de Parkinson",
sistema: "Neurologia",
gravidade: 3,
dicas: [
"Tremor de repouso",
"Rigidez",
"Bradicinesia",
"Instabilidade postural",
"Idoso"
],
alteracoesEsperadas: { }
},

{
nome: "Doença de Alzheimer",
sistema: "Neurologia",
gravidade: 3,
dicas: [
"Perda de memória progressiva",
"Idoso",
"Desorientação",
"Evolução lenta",
"Comprometimento cognitivo"
],
alteracoesEsperadas: { }
},

{
nome: "Demência Vascular",
sistema: "Neurologia",
gravidade: 3,
dicas: [
"Declínio cognitivo em degraus",
"História de AVC",
"Fatores de risco cardiovasculares",
"Déficits focais",
"Evolução progressiva"
],
alteracoesEsperadas: { }
},

/* ================= CEFALÉIAS ================= */

{
nome: "Enxaqueca",
sistema: "Neurologia",
gravidade: 2,
dicas: [
"Cefaleia pulsátil",
"Fotofobia",
"Náuseas",
"Unilateral",
"Pode ter aura"
],
alteracoesEsperadas: { }
},

{
nome: "Cefaleia Tensional",
sistema: "Neurologia",
gravidade: 1,
dicas: [
"Dor em aperto",
"Bilateral",
"Relacionada ao estresse",
"Sem náuseas importantes",
"Leve a moderada"
],
alteracoesEsperadas: { }
},

{
nome: "Cefaleia em Salvas",
sistema: "Neurologia",
gravidade: 3,
dicas: [
"Dor unilateral intensa",
"Lacrimejamento",
"Hiperemia conjuntival",
"Crises em salvas",
"Homens jovens"
],
alteracoesEsperadas: { }
},

/* ================= TRAUMA ================= */

{
nome: "Traumatismo Cranioencefálico",
sistema: "Neurologia",
gravidade: 5,
dicas: [
"História de trauma",
"Perda de consciência",
"Vômitos",
"Amnésia",
"Pode evoluir com hematoma"
],
alteracoesEsperadas: { }
},

{
nome: "Hematoma Subdural",
sistema: "Neurologia",
gravidade: 4,
dicas: [
"Trauma prévio",
"Instalação progressiva",
"Idoso",
"Alteração do nível de consciência",
"Dor de cabeça"
],
alteracoesEsperadas: { }
},

{
nome: "Hematoma Epidural",
sistema: "Neurologia",
gravidade: 5,
dicas: [
"Trauma",
"Intervalo lúcido",
"Deterioração rápida",
"Cefaleia intensa",
"Emergência neurocirúrgica"
],
alteracoesEsperadas: { }
},

/* ================= NEUROPATIAS ================= */

{
nome: "Síndrome de Guillain-Barré",
sistema: "Neurologia",
gravidade: 4,
dicas: [
"Fraqueza ascendente",
"Arreflexia",
"Infecção prévia",
"Paralisia progressiva",
"Pode necessitar ventilação"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Neuropatia Diabética",
sistema: "Neurologia",
gravidade: 2,
dicas: [
"Parestesias em luva e bota",
"Diabetes crônico",
"Dor neuropática",
"Hipoestesia distal",
"Evolução lenta"
],
alteracoesEsperadas: { }
},

{
nome: "Miastenia Gravis",
sistema: "Neurologia",
gravidade: 3,
dicas: [
"Fraqueza flutuante",
"Piora ao final do dia",
"Ptose",
"Diplopia",
"Autoimune"
],
alteracoesEsperadas: { inflamatorio: true }
}

];