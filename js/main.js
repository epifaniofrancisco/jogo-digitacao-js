window.addEventListener("load", init);

const levels = {
	easy: 10,
	medium: 7,
	hard: 4,
};

const nActual = levels.easy;
var tempo = nActual;
var score = 0;
let estaJogar;

const entradaPalavra = document.getElementById("entrada-palavra");
const palavraActual = document.getElementById("palavra-actual");
const mostrarScore = document.getElementById("score");
const mostrarTempo = document.getElementById("tempo");
const mensagem = document.getElementById("mensagem");
const segundos = document.getElementById("segundos");

const palavrasF = [
	"desenvolvedor",
	"cocktail",
	"investigar",
	"assassino",
	"javascript",
	"desenvolvimento",
	"atirar",
	"vocês",
	"novamente",
	"advogado",
	"claramente",
	"cultural",
	"responsabilidade",
	"mais tarde",
	"óleo",
	"desenvolve",
	"importante",
	"internacional",
	"principal",
	"permanecer",
];
const palavrasM = [
	"youtube",
	"mensagem",
	"autor",
	"coleção",
	"mil",
	"pensamento",
	"dinheiro",
	"questão",
	"colocar",
	"estrada",
	"tornar-se",
	"problema",
	"porta",
	"hospital",
	"público",
	"viagem",
	"sentar",
	"professor",
	"médico",
	"capital",
];
const palavrasD = [
	"hacker",
	"computador",
	"rio",
	"gerador",
	"piada",
	"herói",
	"python",
	"placa",
	"setup",
	"quente",
	"apesar",
	"provar",
	"vento",
	"também",
	"perder",
	"unidade",
	"caixa",
	"questão",
	"entre",
	"preço",
	"estado",
	"não",
	"escolha",
	"evita",
	"conjunto",
	"eles",
	"ano",
	"menina",
	"tentativas",
];

var palavra = palavrasF;

function init() {
	segundos.innerHTML = nActual;
	showWord(palavra);
	entradaPalavra.addEventListener("input", acertar);
	setInterval(contador, 1000);
	setInterval(verificarJogo, 50);
}

function showWord(palavras) {
	// Gerar um índice aleatório
	const randIndex = Math.floor(Math.random() * palavras.length);

	palavraActual.innerHTML = palavras[randIndex];
}

function acertar() {
	if (matchWords()) {
		estaJogar = true;
		tempo = nActual + 1;
		showWord(palavra);
		entradaPalavra.value = "";
		score++;

		if (score > 6) {
			tempo = levels.medium;
			palavra = palavrasM;
		} if (score > 11) {
			tempo = levels.hard;
			palavra = palavrasD;
		}
	}
	if (score === -1) {
		mostrarScore.innerHTML = 0;
	} else {
		mostrarScore.innerHTML = score;
	}
}

function matchWords() {
	if (entradaPalavra.value === palavraActual.innerHTML) {
		mensagem.innerHTML = "Acertou.";
		return true;
	} else {
		mensagem.innerHTML = "";
		return false;
	}
}

function contador() {
	if (tempo > 0) {
		tempo--;
	} else if (tempo === 0) {
		// Jogo terminou
		estaJogar = false;
	}

	mostrarTempo.innerHTML = tempo;
}

function verificarJogo() {
	if (!estaJogar && tempo === 0) {
		mensagem.innerHTML = "Jogo terminou.";
		score = -1;
	}
}
