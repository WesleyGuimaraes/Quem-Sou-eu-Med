const infectologia = [

/* ================= INFECÇÕES RESPIRATÓRIAS ================= */

{
nome: "Pneumonia Comunitária",
sistema: "Infectologia",
gravidade: 4,
dicas: [
"Febre",
"Tosse produtiva",
"Dor torácica pleurítica",
"Estertores localizados",
"Infiltrado em RX"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Pneumonia Hospitalar",
sistema: "Infectologia",
gravidade: 5,
dicas: [
"Início após 48h de internação",
"Febre",
"Secreção purulenta",
"Paciente em ventilação mecânica",
"Alto risco de sepse"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Tuberculose Pulmonar",
sistema: "Infectologia",
gravidade: 4,
dicas: [
"Tosse crônica",
"Sudorese noturna",
"Perda de peso",
"Hemoptise",
"Contato prévio"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "COVID-19",
sistema: "Infectologia",
gravidade: 3,
dicas: [
"Febre",
"Tosse seca",
"Anosmia",
"Dispneia",
"Contato recente"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Influenza",
sistema: "Infectologia",
gravidade: 3,
dicas: [
"Início súbito",
"Febre alta",
"Mialgia intensa",
"Tosse seca",
"Sazonal"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

/* ================= SEPSE ================= */

{
nome: "Sepse",
sistema: "Infectologia",
gravidade: 5,
dicas: [
"Infecção confirmada ou suspeita",
"Disfunção orgânica",
"Hipotensão",
"Taquicardia",
"Lactato elevado"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Choque Séptico",
sistema: "Infectologia",
gravidade: 5,
dicas: [
"Hipotensão refratária",
"Necessita vasopressor",
"Lactato elevado",
"Infecção grave",
"Disfunção múltipla de órgãos"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

/* ================= INFECÇÃO URINÁRIA ================= */

{
nome: "Cistite",
sistema: "Infectologia",
gravidade: 2,
dicas: [
"Disúria",
"Polaciúria",
"Dor suprapúbica",
"Sem febre alta",
"Mais comum em mulheres"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Pielonefrite",
sistema: "Infectologia",
gravidade: 4,
dicas: [
"Febre alta",
"Dor lombar",
"Sinal de Giordano positivo",
"Náuseas",
"Mal-estar"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

/* ================= SNC ================= */

{
nome: "Meningite Bacteriana",
sistema: "Infectologia",
gravidade: 5,
dicas: [
"Febre",
"Cefaleia intensa",
"Rigidez de nuca",
"Rebaixamento do nível de consciência",
"Evolução rápida"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Meningite Viral",
sistema: "Infectologia",
gravidade: 3,
dicas: [
"Febre",
"Cefaleia",
"Rigidez de nuca leve",
"Evolução autolimitada",
"Paciente jovem"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Encefalite",
sistema: "Infectologia",
gravidade: 5,
dicas: [
"Alteração comportamental",
"Convulsões",
"Febre",
"Déficit neurológico focal",
"Pode ser herpética"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

/* ================= ABDOMINAL ================= */

{
nome: "Peritonite Bacteriana Espontânea",
sistema: "Infectologia",
gravidade: 5,
dicas: [
"Paciente cirrótico",
"Ascite",
"Febre",
"Dor abdominal",
"Piora clínica súbita"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Abscesso Intra-abdominal",
sistema: "Infectologia",
gravidade: 4,
dicas: [
"Febre persistente",
"Dor abdominal localizada",
"Leucocitose",
"História cirúrgica recente",
"Mal-estar"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

/* ================= DOENÇAS TROPICAIS ================= */

{
nome: "Dengue",
sistema: "Infectologia",
gravidade: 3,
dicas: [
"Febre alta",
"Dor retro-orbitária",
"Mialgia intensa",
"Exantema",
"Plaquetopenia"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Dengue Grave",
sistema: "Infectologia",
gravidade: 5,
dicas: [
"Hipotensão",
"Sangramento",
"Dor abdominal intensa",
"Plaquetas muito baixas",
"Sinais de alarme"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Chikungunya",
sistema: "Infectologia",
gravidade: 2,
dicas: [
"Febre",
"Artralgia intensa",
"Edema articular",
"Exantema",
"Epidemia local"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Zika",
sistema: "Infectologia",
gravidade: 2,
dicas: [
"Exantema pruriginoso",
"Febre baixa",
"Conjuntivite",
"Artralgia leve",
"Gestante em risco"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Malária",
sistema: "Infectologia",
gravidade: 4,
dicas: [
"Febre intermitente",
"Calafrios",
"Anemia",
"História de viagem",
"Esplenomegalia"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Leptospirose",
sistema: "Infectologia",
gravidade: 4,
dicas: [
"Febre",
"Mialgia em panturrilha",
"Icterícia",
"Contato com água contaminada",
"Pode evoluir com insuficiência renal"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Febre Amarela",
sistema: "Infectologia",
gravidade: 5,
dicas: [
"Febre",
"Icterícia",
"Hemorragia",
"Vacinação ausente",
"Área endêmica"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

/* ================= IST ================= */

{
nome: "Sífilis",
sistema: "Infectologia",
gravidade: 3,
dicas: [
"Úlcera genital indolor",
"Linfadenomegalia",
"Evolução em fases",
"Transmissão sexual",
"Teste não-treponêmico positivo"
],
alteracoesEsperadas: { infeccioso: true }
},

{
nome: "Gonorreia",
sistema: "Infectologia",
gravidade: 3,
dicas: [
"Corrimento uretral purulento",
"Disúria",
"Transmissão sexual",
"Neisseria gonorrhoeae",
"Pode causar DIP"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "HIV",
sistema: "Infectologia",
gravidade: 4,
dicas: [
"Imunossupressão",
"Infecções oportunistas",
"Transmissão sexual",
"Perda de peso",
"Linfadenomegalia"
],
alteracoesEsperadas: { infeccioso: true }
}

];