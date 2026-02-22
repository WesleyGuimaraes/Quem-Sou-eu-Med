const gastro = [

/* ================= ESOFAGO / ESTOMAGO ================= */

{
nome: "Doença do Refluxo Gastroesofágico",
sistema: "Gastrointestinal",
gravidade: 2,
dicas: [
"Pirose retroesternal",
"Piora ao deitar",
"Regurgitação ácida",
"Relacionada a obesidade",
"Melhora com IBP"
],
alteracoesEsperadas: { }
},

{
nome: "Esofagite",
sistema: "Gastrointestinal",
gravidade: 2,
dicas: [
"Odinofagia",
"Dor retroesternal",
"História de refluxo",
"Pode ser infecciosa",
"Piora ao engolir"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Gastrite Aguda",
sistema: "Gastrointestinal",
gravidade: 2,
dicas: [
"Dor epigástrica",
"Uso de AINEs",
"Náuseas",
"Piora após alimentação",
"Pode ter hematêmese leve"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Úlcera Péptica",
sistema: "Gastrointestinal",
gravidade: 3,
dicas: [
"Dor epigástrica em queimação",
"Melhora ou piora com alimentação",
"História de H. pylori",
"Uso crônico de AINE",
"Pode complicar com sangramento"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Hemorragia Digestiva Alta",
sistema: "Gastrointestinal",
gravidade: 5,
dicas: [
"Hematêmese",
"Melena",
"Hipotensão",
"História de úlcera ou cirrose",
"Taquicardia"
],
alteracoesEsperadas: { }
},

/* ================= INTESTINO ================= */

{
nome: "Apendicite Aguda",
sistema: "Gastrointestinal",
gravidade: 4,
dicas: [
"Dor em FID",
"Início periumbilical",
"Febre",
"Náuseas",
"Sinal de Blumberg"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Diverticulite Aguda",
sistema: "Gastrointestinal",
gravidade: 3,
dicas: [
"Dor em FIE",
"Febre",
"Idoso",
"Alteração do hábito intestinal",
"Sensibilidade localizada"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Obstrução Intestinal",
sistema: "Gastrointestinal",
gravidade: 4,
dicas: [
"Dor abdominal em cólica",
"Distensão abdominal",
"Vômitos",
"Parada de eliminação de gases",
"História cirúrgica prévia"
],
alteracoesEsperadas: { }
},

{
nome: "Perfuração de Víscera Oca",
sistema: "Gastrointestinal",
gravidade: 5,
dicas: [
"Dor abdominal súbita intensa",
"Abdome em tábua",
"Instabilidade hemodinâmica",
"Ar livre subdiafragmático",
"Emergência cirúrgica"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Síndrome do Intestino Irritável",
sistema: "Gastrointestinal",
gravidade: 1,
dicas: [
"Dor abdominal recorrente",
"Relacionada ao estresse",
"Alternância entre diarreia e constipação",
"Exames normais",
"Sem perda ponderal"
],
alteracoesEsperadas: { }
},

{
nome: "Doença de Crohn",
sistema: "Gastrointestinal",
gravidade: 3,
dicas: [
"Diarreia crônica",
"Dor abdominal",
"Perda de peso",
"Pode acometer qualquer segmento",
"Fístulas perianais"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Retocolite Ulcerativa",
sistema: "Gastrointestinal",
gravidade: 3,
dicas: [
"Diarreia com sangue",
"Dor abdominal",
"Acomete cólon",
"Evolução crônica",
"Tenesmo"
],
alteracoesEsperadas: { inflamatorio: true }
},

/* ================= HEPATOLOGIA ================= */

{
nome: "Hepatite Viral Aguda",
sistema: "Gastrointestinal",
gravidade: 3,
dicas: [
"Icterícia",
"Colúria",
"Astenia",
"Elevação de transaminases",
"Contato com sangue ou alimentos contaminados"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Cirrose Hepática",
sistema: "Gastrointestinal",
gravidade: 4,
dicas: [
"Icterícia",
"Ascite",
"Varizes esofágicas",
"Hepatopatia crônica",
"História de etilismo"
],
alteracoesEsperadas: { }
},

{
nome: "Ascite",
sistema: "Gastrointestinal",
gravidade: 3,
dicas: [
"Aumento do abdome",
"Sinal de macicez móvel",
"Cirrose prévia",
"Edema periférico",
"Dispneia"
],
alteracoesEsperadas: { }
},

{
nome: "Encefalopatia Hepática",
sistema: "Gastrointestinal",
gravidade: 4,
dicas: [
"Confusão mental",
"Flapping",
"História de cirrose",
"Hiperamonemia",
"Reversível com lactulose"
],
alteracoesEsperadas: { }
},

/* ================= BILIAR ================= */

{
nome: "Colelitíase",
sistema: "Gastrointestinal",
gravidade: 2,
dicas: [
"Dor em hipocôndrio direito",
"Pós-prandial",
"Mulher",
"Obesa",
"40 anos"
],
alteracoesEsperadas: { }
},

{
nome: "Colecistite Aguda",
sistema: "Gastrointestinal",
gravidade: 4,
dicas: [
"Dor em HCD",
"Febre",
"Sinal de Murphy",
"Náuseas",
"Leucocitose"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Colangite Aguda",
sistema: "Gastrointestinal",
gravidade: 5,
dicas: [
"Tríade de Charcot",
"Febre",
"Icterícia",
"Dor abdominal",
"Infecção biliar"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

/* ================= PANCREAS ================= */

{
nome: "Pancreatite Aguda",
sistema: "Gastrointestinal",
gravidade: 4,
dicas: [
"Dor epigástrica irradiada para dorso",
"Náuseas",
"História de álcool ou cálculo biliar",
"Amilase elevada",
"Pode evoluir com choque"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Pancreatite Crônica",
sistema: "Gastrointestinal",
gravidade: 3,
dicas: [
"Dor abdominal recorrente",
"História de etilismo",
"Insuficiência pancreática",
"Esteatorreia",
"Diabetes secundário"
],
alteracoesEsperadas: { }
},

/* ================= ONCOLOGIA ================= */

{
nome: "Câncer Gástrico",
sistema: "Gastrointestinal",
gravidade: 4,
dicas: [
"Perda de peso",
"Anemia",
"Dor epigástrica persistente",
"Saciedade precoce",
"Idoso"
],
alteracoesEsperadas: { }
},

{
nome: "Câncer de Cólon",
sistema: "Gastrointestinal",
gravidade: 4,
dicas: [
"Alteração do hábito intestinal",
"Sangue oculto nas fezes",
"Anemia ferropriva",
"Idade > 50 anos",
"História familiar"
],
alteracoesEsperadas: { }
},

{
nome: "Hepatocarcinoma",
sistema: "Gastrointestinal",
gravidade: 5,
dicas: [
"Cirrose prévia",
"Perda de peso",
"Dor em HCD",
"AFP elevada",
"Nódulo hepático"
],
alteracoesEsperadas: { }
}

];
