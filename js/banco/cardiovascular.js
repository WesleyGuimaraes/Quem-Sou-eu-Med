const cardiovascular = [

{ nome: "Infarto Agudo do Miocárdio", sistema: "Cardiovascular", gravidade: 5,
dicas: [
"Dor torácica em aperto",
"Irradiação para braço esquerdo",
"Fator de risco: HAS, DM, tabagismo",
"Início súbito",
"Pode cursar com sudorese"
],
alteracoesEsperadas: { isquemico: true } },

{ nome: "Angina Instável", sistema: "Cardiovascular", gravidade: 4,
dicas: [
"Dor torácica aos mínimos esforços",
"Sem necrose miocárdica",
"Piora recente do padrão",
"Fatores de risco cardiovasculares",
"Alívio parcial com nitrato"
],
alteracoesEsperadas: { isquemico: true } },

{ nome: "Insuficiência Cardíaca Descompensada", sistema: "Cardiovascular", gravidade: 4,
dicas: [
"Dispneia progressiva",
"Edema de MMII",
"Ortopneia",
"Estertores bibasais",
"Histórico de cardiopatia"
],
alteracoesEsperadas: { inflamatorio: false } },

{ nome: "Fibrilação Atrial", sistema: "Cardiovascular", gravidade: 3,
dicas: [
"Pulso irregularmente irregular",
"Palpitações",
"Risco de AVC",
"Mais comum em idosos",
"Pode ser assintomática"
],
alteracoesEsperadas: { } },

{ nome: "Taquicardia Supraventricular", sistema: "Cardiovascular", gravidade: 3,
dicas: [
"Palpitações súbitas",
"Início e término abruptos",
"Paciente jovem",
"Ritmo regular e rápido",
"Pode responder à manobra vagal"
],
alteracoesEsperadas: { } },

{ nome: "Bradicardia Sinusal", sistema: "Cardiovascular", gravidade: 2,
dicas: [
"FC < 50 bpm",
"Pode causar tontura",
"Atleta ou uso de betabloqueador",
"Ritmo regular",
"Síncope em casos graves"
],
alteracoesEsperadas: { } },

{ nome: "Bloqueio AV Total", sistema: "Cardiovascular", gravidade: 4,
dicas: [
"Bradicardia importante",
"Desmaios",
"Dissociação AV",
"Necessita marcapasso",
"Pode ser pós-IAM"
],
alteracoesEsperadas: { } },

{ nome: "Endocardite Infecciosa", sistema: "Cardiovascular", gravidade: 5,
dicas: [
"Febre prolongada",
"Sopro novo",
"Uso de drogas EV",
"Petéquias",
"Fenômenos embólicos"
],
alteracoesEsperadas: { inflamatorio: true, infeccioso: true } },

{ nome: "Pericardite Aguda", sistema: "Cardiovascular", gravidade: 3,
dicas: [
"Dor torácica ventilatório-dependente",
"Melhora ao sentar inclinado",
"Febre baixa",
"Pode ter atrito pericárdico",
"Pós-viral comum"
],
alteracoesEsperadas: { inflamatorio: true } },

{ nome: "Miocardite", sistema: "Cardiovascular", gravidade: 4,
dicas: [
"Paciente jovem",
"História viral recente",
"Dor torácica",
"Pode simular IAM",
"Disfunção ventricular"
],
alteracoesEsperadas: { inflamatorio: true } },

{ nome: "Choque Cardiogênico", sistema: "Cardiovascular", gravidade: 5,
dicas: [
"Hipotensão",
"Extremidades frias",
"Oligúria",
"Rebaixamento do nível de consciência",
"Histórico de IAM"
],
alteracoesEsperadas: { isquemico: true } },

{ nome: "Estenose Aórtica", sistema: "Cardiovascular", gravidade: 4,
dicas: [
"Sopro sistólico em foco aórtico",
"Síncope aos esforços",
"Idoso",
"Dor torácica",
"Dispneia"
],
alteracoesEsperadas: { } },

{ nome: "Insuficiência Mitral", sistema: "Cardiovascular", gravidade: 3,
dicas: [
"Sopro holossistólico",
"Dispneia",
"Cardiomegalia",
"Pode ser pós-IAM",
"Fadiga"
],
alteracoesEsperadas: { } },

{ nome: "Dissecção de Aorta", sistema: "Cardiovascular", gravidade: 5,
dicas: [
"Dor torácica lancinante",
"Irradia para dorso",
"HAS mal controlada",
"Diferença de PA entre membros",
"Início súbito"
],
alteracoesEsperadas: { } },

{ nome: "Hipertensão Arterial Sistêmica", sistema: "Cardiovascular", gravidade: 2,
dicas: [
"Pressão persistentemente elevada",
"Geralmente assintomática",
"Fator de risco cardiovascular",
"Comum em adultos",
"Pode causar lesão de órgão-alvo"
],
alteracoesEsperadas: { } },

// + completar até ~40 seguindo mesmo padrão
];