const hemato = [

/* ================= ANEMIAS ================= */

{
nome: "Anemia Ferropriva",
sistema: "Hematologia",
gravidade: 2,
dicas: [
"Microcitose",
"Hipocromia",
"Fadiga",
"Mulher em idade fértil",
"Baixa ferritina"
],
alteracoesEsperadas: { }
},

{
nome: "Anemia Megaloblástica",
sistema: "Hematologia",
gravidade: 3,
dicas: [
"Macrocitose",
"Deficiência de B12 ou folato",
"Parestesias",
"Glossite",
"Hipersegmentação de neutrófilos"
],
alteracoesEsperadas: { }
},

{
nome: "Anemia Hemolítica",
sistema: "Hematologia",
gravidade: 4,
dicas: [
"Icterícia",
"Reticulocitose",
"Aumento de bilirrubina indireta",
"Esplenomegalia",
"Queda rápida de hemoglobina"
],
alteracoesEsperadas: { }
},

{
nome: "Anemia Aplásica",
sistema: "Hematologia",
gravidade: 4,
dicas: [
"Pancitopenia",
"Infecções recorrentes",
"Sangramentos",
"Hipocelularidade medular",
"Fadiga intensa"
],
alteracoesEsperadas: { }
},

{
nome: "Anemia Falciforme",
sistema: "Hematologia",
gravidade: 4,
dicas: [
"Dor óssea intensa",
"Hemólise crônica",
"Crises vaso-oclusivas",
"Esplenomegalia na infância",
"Origem genética"
],
alteracoesEsperadas: { }
},

/* ================= LEUCEMIAS ================= */

{
nome: "Leucemia Mieloide Aguda",
sistema: "Hematologia",
gravidade: 5,
dicas: [
"Início agudo",
"Blastos no sangue periférico",
"Anemia",
"Trombocitopenia",
"Febre"
],
alteracoesEsperadas: { }
},

{
nome: "Leucemia Linfoblástica Aguda",
sistema: "Hematologia",
gravidade: 5,
dicas: [
"Mais comum na infância",
"Linfadenomegalia",
"Dor óssea",
"Pancitopenia",
"Blastos"
],
alteracoesEsperadas: { }
},

{
nome: "Leucemia Mieloide Crônica",
sistema: "Hematologia",
gravidade: 4,
dicas: [
"Leucocitose importante",
"Cromossomo Filadélfia",
"Esplenomegalia",
"Evolução lenta",
"Pode evoluir para crise blástica"
],
alteracoesEsperadas: { }
},

{
nome: "Leucemia Linfocítica Crônica",
sistema: "Hematologia",
gravidade: 3,
dicas: [
"Idoso",
"Linfocitose persistente",
"Assintomática no início",
"Linfadenomegalia",
"Evolução lenta"
],
alteracoesEsperadas: { }
},

/* ================= LINFOMAS ================= */

{
nome: "Linfoma de Hodgkin",
sistema: "Hematologia",
gravidade: 4,
dicas: [
"Linfadenomegalia indolor",
"Febre",
"Sudorese noturna",
"Perda de peso",
"Célula de Reed-Sternberg"
],
alteracoesEsperadas: { }
},

{
nome: "Linfoma Não Hodgkin",
sistema: "Hematologia",
gravidade: 4,
dicas: [
"Linfadenomegalia",
"Evolução variável",
"Sintomas B",
"Acomete imunossuprimidos",
"Pode ser agressivo"
],
alteracoesEsperadas: { }
},

/* ================= DISTURBIOS PLAQUETARIOS ================= */

{
nome: "Púrpura Trombocitopênica Imune",
sistema: "Hematologia",
gravidade: 3,
dicas: [
"Trombocitopenia isolada",
"Petéquias",
"Epistaxe",
"Autoimune",
"Plaquetas baixas"
],
alteracoesEsperadas: { }
},

{
nome: "Púrpura Trombocitopênica Trombótica",
sistema: "Hematologia",
gravidade: 5,
dicas: [
"Pentade clássica",
"Anemia hemolítica",
"Trombocitopenia",
"Alteração neurológica",
"Febre"
],
alteracoesEsperadas: { }
},

{
nome: "Coagulação Intravascular Disseminada",
sistema: "Hematologia",
gravidade: 5,
dicas: [
"Sangramento difuso",
"Plaquetas baixas",
"Sepse associada",
"Consumo de fatores",
"Gravidade elevada"
],
alteracoesEsperadas: { inflamatorio: true }
},

/* ================= COAGULOPATIAS ================= */

{
nome: "Hemofilia A",
sistema: "Hematologia",
gravidade: 3,
dicas: [
"Deficiência de fator VIII",
"Hemartrose",
"Doença hereditária",
"Sangramentos prolongados",
"Homens"
],
alteracoesEsperadas: { }
},

{
nome: "Hemofilia B",
sistema: "Hematologia",
gravidade: 3,
dicas: [
"Deficiência de fator IX",
"Hemartrose",
"Hereditária",
"Sangramento excessivo",
"Homens"
],
alteracoesEsperadas: { }
},

{
nome: "Doença de Von Willebrand",
sistema: "Hematologia",
gravidade: 2,
dicas: [
"Sangramento mucoso",
"Epistaxe",
"Menorragia",
"Alteração da adesão plaquetária",
"Hereditária"
],
alteracoesEsperadas: { }
},

/* ================= MIELOPROLIFERATIVAS ================= */

{
nome: "Policitemia Vera",
sistema: "Hematologia",
gravidade: 3,
dicas: [
"Hematócrito elevado",
"Prurido após banho quente",
"Trombose",
"Rubor facial",
"Mutação JAK2"
],
alteracoesEsperadas: { }
},

{
nome: "Trombocitemia Essencial",
sistema: "Hematologia",
gravidade: 3,
dicas: [
"Plaquetas elevadas",
"Trombose",
"Sangramentos paradoxais",
"Evolução crônica",
"Pode ser assintomática"
],
alteracoesEsperadas: { }
},

{
nome: "Mieloma Múltiplo",
sistema: "Hematologia",
gravidade: 4,
dicas: [
"Dor óssea",
"Hipercalcemia",
"Anemia",
"Proteína monoclonal",
"Lesões líticas"
],
alteracoesEsperadas: { }
},

{
nome: "Neutropenia Febril",
sistema: "Hematologia",
gravidade: 5,
dicas: [
"Febre",
"Neutrófilos baixos",
"Paciente oncológico",
"Risco de sepse",
"Emergência clínica"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
}

];