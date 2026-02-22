const psiquiatria = [

/* ================= TRANSTORNOS DE HUMOR ================= */

{
nome: "Transtorno Depressivo Maior",
sistema: "Psiquiatria",
gravidade: 4,
dicas: [
"Humor deprimido",
"Anedonia",
"Alteração de sono",
"Alteração de apetite",
"Pode haver ideação suicida"
],
alteracoesEsperadas: { }
},

{
nome: "Episódio Depressivo Leve",
sistema: "Psiquiatria",
gravidade: 2,
dicas: [
"Humor triste",
"Fadiga",
"Baixa autoestima",
"Sintomas leves",
"Sem prejuízo funcional grave"
],
alteracoesEsperadas: { }
},

{
nome: "Transtorno Bipolar Tipo I",
sistema: "Psiquiatria",
gravidade: 5,
dicas: [
"Episódios de mania",
"Grandiosidade",
"Redução da necessidade de sono",
"Comportamento impulsivo",
"Pode alternar com depressão"
],
alteracoesEsperadas: { }
},

{
nome: "Transtorno Bipolar Tipo II",
sistema: "Psiquiatria",
gravidade: 4,
dicas: [
"Hipomania",
"Episódios depressivos recorrentes",
"Oscilação de humor",
"Impulsividade",
"Prejuízo funcional"
],
alteracoesEsperadas: { }
},

{
nome: "Distimia",
sistema: "Psiquiatria",
gravidade: 2,
dicas: [
"Humor deprimido crônico",
"Evolução superior a 2 anos",
"Sintomas leves persistentes",
"Baixa autoestima",
"Pouca energia"
],
alteracoesEsperadas: { }
},

/* ================= ANSIEDADE ================= */

{
nome: "Transtorno de Ansiedade Generalizada",
sistema: "Psiquiatria",
gravidade: 3,
dicas: [
"Preocupação excessiva",
"Tensão muscular",
"Irritabilidade",
"Insônia",
"Duração > 6 meses"
],
alteracoesEsperadas: { }
},

{
nome: "Transtorno do Pânico",
sistema: "Psiquiatria",
gravidade: 4,
dicas: [
"Crises súbitas de ansiedade",
"Palpitação",
"Sensação de morte iminente",
"Duração curta",
"Medo de novas crises"
],
alteracoesEsperadas: { }
},

{
nome: "Fobia Social",
sistema: "Psiquiatria",
gravidade: 2,
dicas: [
"Medo de situações sociais",
"Evitação",
"Ansiedade antecipatória",
"Sudorese",
"Prejuízo funcional"
],
alteracoesEsperadas: { }
},

{
nome: "Transtorno de Estresse Pós-Traumático",
sistema: "Psiquiatria",
gravidade: 4,
dicas: [
"Evento traumático prévio",
"Flashbacks",
"Evitação",
"Hipervigilância",
"Pesadelos"
],
alteracoesEsperadas: { }
},

/* ================= PSICÓTICOS ================= */

{
nome: "Esquizofrenia",
sistema: "Psiquiatria",
gravidade: 5,
dicas: [
"Delírios",
"Alucinações auditivas",
"Discurso desorganizado",
"Isolamento social",
"Evolução crônica"
],
alteracoesEsperadas: { }
},

{
nome: "Transtorno Esquizoafetivo",
sistema: "Psiquiatria",
gravidade: 4,
dicas: [
"Sintomas psicóticos",
"Episódios de humor",
"Delírios",
"Alucinações",
"Oscilação afetiva"
],
alteracoesEsperadas: { }
},

{
nome: "Surto Psicótico Agudo",
sistema: "Psiquiatria",
gravidade: 5,
dicas: [
"Início súbito",
"Delírios",
"Alucinações",
"Agitação",
"Pode ser desencadeado por estresse"
],
alteracoesEsperadas: { }
},

{
nome: "Transtorno Delirante Persistente",
sistema: "Psiquiatria",
gravidade: 3,
dicas: [
"Delírios estruturados",
"Sem desorganização grave",
"Funcionamento preservado",
"Evolução crônica",
"Convicção firme"
],
alteracoesEsperadas: { }
},

/* ================= SUBSTÂNCIAS ================= */

{
nome: "Abstinência Alcoólica",
sistema: "Psiquiatria",
gravidade: 5,
dicas: [
"Tremores",
"Sudorese",
"Agitação",
"História de etilismo crônico",
"Piora após suspensão abrupta"
],
alteracoesEsperadas: { inflamatorio: false }
},

{
nome: "Delirium Tremens",
sistema: "Psiquiatria",
gravidade: 5,
dicas: [
"Confusão mental",
"Alucinações visuais",
"Instabilidade autonômica",
"Abstinência alcoólica grave",
"Emergência clínica"
],
alteracoesEsperadas: { }
},

{
nome: "Intoxicação por Cocaína",
sistema: "Psiquiatria",
gravidade: 4,
dicas: [
"Agitação",
"Taquicardia",
"Midríase",
"Euforia",
"Risco cardiovascular"
],
alteracoesEsperadas: { }
},

{
nome: "Transtorno por Uso de Álcool",
sistema: "Psiquiatria",
gravidade: 3,
dicas: [
"Consumo excessivo",
"Tolerância",
"Abstinência",
"Prejuízo social",
"Dificuldade de controle"
],
alteracoesEsperadas: { }
},

/* ================= PERSONALIDADE ================= */

{
nome: "Transtorno de Personalidade Borderline",
sistema: "Psiquiatria",
gravidade: 4,
dicas: [
"Instabilidade emocional",
"Impulsividade",
"Relacionamentos intensos",
"Medo de abandono",
"Autoagressão"
],
alteracoesEsperadas: { }
},

{
nome: "Transtorno de Personalidade Antissocial",
sistema: "Psiquiatria",
gravidade: 3,
dicas: [
"Desrespeito às normas sociais",
"Falta de empatia",
"Comportamento impulsivo",
"História desde adolescência",
"Manipulação"
],
alteracoesEsperadas: { }
},

/* ================= OUTROS ================= */

{
nome: "Transtorno Obsessivo-Compulsivo",
sistema: "Psiquiatria",
gravidade: 3,
dicas: [
"Obsessões recorrentes",
"Compulsões",
"Ansiedade",
"Rituais repetitivos",
"Reconhece irracionalidade"
],
alteracoesEsperadas: { }
},

{
nome: "Transtorno de Déficit de Atenção e Hiperatividade",
sistema: "Psiquiatria",
gravidade: 2,
dicas: [
"Desatenção",
"Hiperatividade",
"Impulsividade",
"Início na infância",
"Prejuízo escolar"
],
alteracoesEsperadas: { }
},

{
nome: "Transtorno Alimentar - Anorexia Nervosa",
sistema: "Psiquiatria",
gravidade: 4,
dicas: [
"Restrição alimentar",
"Medo de ganhar peso",
"IMC baixo",
"Distorção da imagem corporal",
"Amenorreia"
],
alteracoesEsperadas: { }
},

{
nome: "Transtorno Alimentar - Bulimia Nervosa",
sistema: "Psiquiatria",
gravidade: 3,
dicas: [
"Episódios de compulsão",
"Vômitos autoinduzidos",
"Preocupação com peso",
"Erosão dentária",
"Peso geralmente normal"
],
alteracoesEsperadas: { alcalose: true }
}

];