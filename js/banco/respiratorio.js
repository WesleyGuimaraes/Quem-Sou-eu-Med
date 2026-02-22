const respiratorio = [

/* ================= OBSTRUTIVAS ================= */

{
nome: "Asma",
sistema: "Respiratório",
gravidade: 3,
dicas: [
"Sibilância",
"Dispneia episódica",
"Piora noturna",
"História de atopia",
"Melhora com broncodilatador"
],
alteracoesEsperadas: { }
},

{
nome: "Exacerbação de Asma",
sistema: "Respiratório",
gravidade: 5,
dicas: [
"Dispneia intensa",
"Sibilância difusa",
"Uso de musculatura acessória",
"Fala entrecortada",
"Piora súbita"
],
alteracoesEsperadas: { acidose: true }
},

{
nome: "DPOC",
sistema: "Respiratório",
gravidade: 4,
dicas: [
"Tabagismo crônico",
"Tosse produtiva",
"Dispneia progressiva",
"Hiperinsuflação",
"Idoso"
],
alteracoesEsperadas: { }
},

{
nome: "Exacerbação de DPOC",
sistema: "Respiratório",
gravidade: 5,
dicas: [
"Piora da dispneia",
"Aumento da expectoração",
"Escarro purulento",
"História de tabagismo",
"Hipercapnia"
],
alteracoesEsperadas: { acidose: true, inflamatorio: true }
},

{
nome: "Bronquite Crônica",
sistema: "Respiratório",
gravidade: 3,
dicas: [
"Tosse produtiva crônica",
"Tabagismo",
"Escarro matinal",
"Evolução lenta",
"Dispneia leve"
],
alteracoesEsperadas: { }
},

{
nome: "Enfisema Pulmonar",
sistema: "Respiratório",
gravidade: 4,
dicas: [
"Dispneia progressiva",
"Tórax em tonel",
"Hipoxemia",
"Magreza",
"Tabagismo"
],
alteracoesEsperadas: { }
},

/* ================= INFECCIOSAS ================= */

{
nome: "Pneumonia Comunitária",
sistema: "Respiratório",
gravidade: 4,
dicas: [
"Febre",
"Tosse produtiva",
"Dispneia",
"Dor torácica pleurítica",
"Infiltrado pulmonar"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Pneumonia Hospitalar",
sistema: "Respiratório",
gravidade: 5,
dicas: [
"Internação recente",
"Febre",
"Secreção purulenta",
"Piora respiratória",
"Germes resistentes"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Tuberculose Pulmonar",
sistema: "Respiratório",
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
sistema: "Respiratório",
gravidade: 4,
dicas: [
"Febre",
"Tosse seca",
"Dispneia",
"Anosmia",
"Contato recente"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Influenza",
sistema: "Respiratório",
gravidade: 3,
dicas: [
"Início súbito",
"Mialgia",
"Febre alta",
"Tosse",
"Quadro gripal"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

{
nome: "Bronquiolite",
sistema: "Respiratório",
gravidade: 3,
dicas: [
"Lactente",
"Sibilância",
"Tosse",
"Infecção viral prévia",
"Dificuldade respiratória"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true }
},

/* ================= VASCULARES ================= */

{
nome: "Tromboembolismo Pulmonar",
sistema: "Respiratório",
gravidade: 5,
dicas: [
"Dispneia súbita",
"Dor torácica pleurítica",
"Taquicardia",
"Imobilização recente",
"Hipoxemia"
],
alteracoesEsperadas: { alcalose: true }
},

{
nome: "Hipertensão Pulmonar",
sistema: "Respiratório",
gravidade: 4,
dicas: [
"Dispneia progressiva",
"Síncope",
"Edema de membros inferiores",
"Fadiga",
"Sopro tricúspide"
],
alteracoesEsperadas: { }
},

/* ================= PLEURA ================= */

{
nome: "Pneumotórax Espontâneo",
sistema: "Respiratório",
gravidade: 5,
dicas: [
"Dor torácica súbita",
"Dispneia",
"Redução do murmúrio vesicular",
"Paciente jovem magro",
"Hiperressonância"
],
alteracoesEsperadas: { }
},

{
nome: "Pneumotórax Hipertensivo",
sistema: "Respiratório",
gravidade: 5,
dicas: [
"Dispneia grave",
"Hipotensão",
"Desvio de traqueia",
"Emergência",
"Colapso pulmonar"
],
alteracoesEsperadas: { acidose: true }
},

{
nome: "Derrame Pleural",
sistema: "Respiratório",
gravidade: 3,
dicas: [
"Diminuição do MV",
"Macicez à percussão",
"Dispneia",
"Pode ser infeccioso",
"Pode ser neoplásico"
],
alteracoesEsperadas: { inflamatorio: true }
},

/* ================= INTERSTICIAIS ================= */

{
nome: "Fibrose Pulmonar",
sistema: "Respiratório",
gravidade: 4,
dicas: [
"Dispneia progressiva",
"Estertores crepitantes",
"Hipoxemia",
"Evolução crônica",
"Baqueteamento digital"
],
alteracoesEsperadas: { }
},

{
nome: "Doença Intersticial Pulmonar",
sistema: "Respiratório",
gravidade: 4,
dicas: [
"Dispneia crônica",
"Restrição ventilatória",
"Crepitações",
"Hipoxemia",
"Evolução lenta"
],
alteracoesEsperadas: { }
},

/* ================= OUTROS ================= */

{
nome: "Síndrome do Desconforto Respiratório Agudo (SDRA)",
sistema: "Respiratório",
gravidade: 5,
dicas: [
"Hipoxemia grave",
"Infiltrado bilateral",
"Internação em UTI",
"Necessidade de ventilação",
"Instalação aguda"
],
alteracoesEsperadas: { inflamatorio: true, acidose: true }
},

{
nome: "Apneia Obstrutiva do Sono",
sistema: "Respiratório",
gravidade: 2,
dicas: [
"Ronco alto",
"Sonolência diurna",
"Obesidade",
"Pausas respiratórias noturnas",
"Cefaleia matinal"
],
alteracoesEsperadas: { }
},

{
nome: "Sarcoidose",
sistema: "Respiratório",
gravidade: 3,
dicas: [
"Adenomegalia hilar",
"Dispneia",
"Tosse seca",
"Doença sistêmica",
"Granulomas"
],
alteracoesEsperadas: { inflamatorio: true }
},

{
nome: "Câncer de Pulmão",
sistema: "Respiratório",
gravidade: 5,
dicas: [
"Tabagismo",
"Perda de peso",
"Hemoptise",
"Dor torácica",
"Massa pulmonar"
],
alteracoesEsperadas: { }
}

];