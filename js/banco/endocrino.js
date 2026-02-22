const endocrino = [

/* ================= DIABETES ================= */

{
nome: "Diabetes Mellitus Tipo 1",
sistema: "Endócrino",
gravidade: 4,
dicas: [
"Início geralmente na infância ou adolescência",
"Poliúria e polidipsia",
"Perda de peso",
"Dependente de insulina",
"Pode evoluir com cetoacidose"
],
alteracoesEsperadas: { }
},

{
nome: "Diabetes Mellitus Tipo 2",
sistema: "Endócrino",
gravidade: 3,
dicas: [
"Associado à obesidade",
"Resistência insulínica",
"Adultos",
"Muitas vezes assintomático",
"Diagnóstico em exames de rotina"
],
alteracoesEsperadas: { }
},

{
nome: "Cetoacidose Diabética",
sistema: "Endócrino",
gravidade: 5,
dicas: [
"Paciente diabético",
"Respiração de Kussmaul",
"Hálito cetônico",
"Dor abdominal",
"Desidratação importante"
],
alteracoesEsperadas: { acidose: true }
},

{
nome: "Estado Hiperosmolar Hiperglicêmico",
sistema: "Endócrino",
gravidade: 5,
dicas: [
"Idoso com DM2",
"Hiperglicemia extrema",
"Desidratação severa",
"Sem cetose significativa",
"Alteração do nível de consciência"
],
alteracoesEsperadas: { }
},

{
nome: "Hipoglicemia Grave",
sistema: "Endócrino",
gravidade: 4,
dicas: [
"Sudorese fria",
"Tremores",
"Confusão mental",
"Uso de insulina ou sulfonilureia",
"Melhora após glicose"
],
alteracoesEsperadas: { }
},

/* ================= TIREOIDE ================= */

{
nome: "Hipotireoidismo",
sistema: "Endócrino",
gravidade: 2,
dicas: [
"Fadiga",
"Ganho de peso",
"Intolerância ao frio",
"Constipação",
"Pele seca"
],
alteracoesEsperadas: { }
},

{
nome: "Hipertireoidismo",
sistema: "Endócrino",
gravidade: 3,
dicas: [
"Perda de peso",
"Taquicardia",
"Tremor fino",
"Intolerância ao calor",
"Nervosismo"
],
alteracoesEsperadas: { }
},

{
nome: "Doença de Graves",
sistema: "Endócrino",
gravidade: 3,
dicas: [
"Exoftalmia",
"Bócio difuso",
"Autoimune",
"Hipertireoidismo",
"Mais comum em mulheres jovens"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Tireoidite Subaguda",
sistema: "Endócrino",
gravidade: 2,
dicas: [
"Dor cervical",
"História viral recente",
"Hipertireoidismo transitório",
"Febre baixa",
"Sensibilidade à palpação"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Bócio Multinodular",
sistema: "Endócrino",
gravidade: 2,
dicas: [
"Aumento da tireoide",
"Nódulos palpáveis",
"Pode ser eutireoidiano",
"Mais comum em idosos",
"Crescimento lento"
],
alteracoesEsperadas: { }
},

/* ================= ADRENAL ================= */

{
nome: "Síndrome de Cushing",
sistema: "Endócrino",
gravidade: 3,
dicas: [
"Face em lua cheia",
"Giba dorsal",
"Obesidade central",
"Estrias violáceas",
"Hipertensão"
],
alteracoesEsperadas: { }
},

{
nome: "Doença de Cushing",
sistema: "Endócrino",
gravidade: 4,
dicas: [
"Adenoma hipofisário",
"Hiperprodução de ACTH",
"Sinais de hipercortisolismo",
"Fraqueza muscular",
"Equimoses fáceis"
],
alteracoesEsperadas: { }
},

{
nome: "Insuficiência Adrenal Primária",
sistema: "Endócrino",
gravidade: 4,
dicas: [
"Hipotensão",
"Hiperpigmentação",
"Fraqueza",
"Hiponatremia",
"Pode evoluir para choque"
],
alteracoesEsperadas: { }
},

{
nome: "Crise Addisoniana",
sistema: "Endócrino",
gravidade: 5,
dicas: [
"Hipotensão grave",
"Desidratação",
"Hipoglicemia",
"Confusão mental",
"Necessita corticoide urgente"
],
alteracoesEsperadas: { }
},

{
nome: "Hiperaldosteronismo Primário",
sistema: "Endócrino",
gravidade: 3,
dicas: [
"Hipertensão resistente",
"Hipocalemia",
"Fraqueza muscular",
"Alcalose metabólica",
"Pode ser adenoma adrenal"
],
alteracoesEsperadas: { alcalose: true }
},

{
nome: "Feocromocitoma",
sistema: "Endócrino",
gravidade: 4,
dicas: [
"Cefaleia",
"Sudorese",
"Taquicardia",
"Crises hipertensivas",
"Tumor produtor de catecolamina"
],
alteracoesEsperadas: { }
},

/* ================= PARATIREOIDE ================= */

{
nome: "Hiperparatireoidismo Primário",
sistema: "Endócrino",
gravidade: 3,
dicas: [
"Hipercalcemia",
"Cálculos renais",
"Dor óssea",
"Constipação",
"Fraqueza"
],
alteracoesEsperadas: { }
},

{
nome: "Hipoparatireoidismo",
sistema: "Endócrino",
gravidade: 3,
dicas: [
"Hipocalcemia",
"Parestesias",
"Sinal de Chvostek",
"Sinal de Trousseau",
"Pós-tireoidectomia"
],
alteracoesEsperadas: { }
},

{
nome: "Osteoporose",
sistema: "Endócrino",
gravidade: 2,
dicas: [
"Fraturas por fragilidade",
"Pós-menopausa",
"Redução de massa óssea",
"Assintomática até fratura",
"Idosos"
],
alteracoesEsperadas: { }
},

{
nome: "Síndrome Metabólica",
sistema: "Endócrino",
gravidade: 2,
dicas: [
"Obesidade central",
"Hipertensão",
"Hiperglicemia",
"Hipertrigliceridemia",
"HDL baixo"
],
alteracoesEsperadas: { }
},

{
nome: "Obesidade",
sistema: "Endócrino",
gravidade: 1,
dicas: [
"IMC elevado",
"Associado a DM2",
"Sedentarismo",
"Resistência insulínica",
"Fator de risco cardiovascular"
],
alteracoesEsperadas: { }
},

/* ================= OUTRAS ENDOCRINOPATIAS ================= */

{
nome: "Prolactinoma",
sistema: "Endócrino",
gravidade: 2,
dicas: [
"Amenorreia",
"Galactorreia",
"Infertilidade",
"Adenoma hipofisário",
"Cefaleia"
],
alteracoesEsperadas: { }
},

{
nome: "Diabetes Insipidus",
sistema: "Endócrino",
gravidade: 3,
dicas: [
"Poliúria intensa",
"Polidipsia",
"Osmolaridade urinária baixa",
"Deficiência de ADH",
"Desidratação"
],
alteracoesEsperadas: { }
},

{
nome: "SIADH",
sistema: "Endócrino",
gravidade: 3,
dicas: [
"Hiponatremia",
"Osmolaridade plasmática baixa",
"Urina concentrada",
"Euvolemia",
"Pode ser paraneoplásica"
],
alteracoesEsperadas: { }
},

{
nome: "Acromegalia",
sistema: "Endócrino",
gravidade: 3,
dicas: [
"Crescimento de extremidades",
"Prognatismo",
"Aumento de mãos e pés",
"Adenoma hipofisário",
"Resistência insulínica"
],
alteracoesEsperadas: { }
},

{
nome: "Gigantismo",
sistema: "Endócrino",
gravidade: 3,
dicas: [
"Excesso de GH na infância",
"Altura elevada",
"Crescimento exagerado",
"Adenoma hipofisário",
"Proporções corporais mantidas"
],
alteracoesEsperadas: { }
}

];