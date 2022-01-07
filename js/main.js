window.addEventListener("load", init);


// TODO: Mudar os níveis de jogo após o score aumentar.
const niveis = {
    facil: 5,
    medio: 3,
    dificil: 2
};

const nivelActual = niveis.facil;
var tempo = nivelActual;
var score = 0;
let estaJogar;

const entradaPalavra = document.getElementById("entrada-palavra");
const palavraActual = document.getElementById("palavra-actual");
const mostrarScore = document.getElementById("score");
const mostrarTempo = document.getElementById("tempo");
const mensagem = document.getElementById("mensagem");
const segundos = document.getElementById("segundos");

const palavras = [
	"hacker",
	"desenvolvedor",
	"computador",
	"rio",
	"gerador",
	"cocktail",
	"piada",
	"herói",
	"javascript",
	"desenvolvimento",
	"python",
	"investigar",
	"assassino",
	"placa",
	"setup",
	"youtube",
	"mensagem",
	"autor",
];

// Iniciar o jogo
function init() {
    segundos.innerHTML = nivelActual;
	// carregar a palavra do array
	showWord(palavras);
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
		tempo = nivelActual + 1;
		showWord(palavras);
		entradaPalavra.value = "";
		score++;
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
