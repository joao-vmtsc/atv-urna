// 1. Configuração dos candidatos fictícios
const candidatos = {
    governador: {
        "12": "Maria Silva",
        "15": "João Santos"
        "23": "Alberto Mota"
    },
    presidente: {
        "10": "Carlos Oliveira",
        "20": "Ana Pereira"
        "45": "Zema Lima"
    }
};

// Variáveis para controlar a etapa do voto
let cargoAtual = "governador"; // Começa em Governador, depois vai pra Presidente
let numeroDigitado = "";

// Inicializa o rodapé assim que carrega o script
atualizarRodape();

// Função para colocar números na tela ao clicar nos botões
function digitar(numero) {
    if (numeroDigitado.length < 2) {
        numeroDigitado += numero;
        atualizarTela();
    }
}

// Atualiza o texto exibido na tela da urna
function atualizarTela() {
    let display = document.getElementById("display-numero");
    let info = document.getElementById("info-candidato");

    display.innerText = numeroDigitado;

    // Se digitou 2 números, procura se o candidato existe
    if (numeroDigitado.length === 2) {
        let nomeCandidato = candidatos[cargoAtual][numeroDigitado];
        if (nomeCandidato) {
            info.innerText = "Candidato: " + nomeCandidato;
        } else {
            info.innerText = "VOTO NULO";
        }
    } else {
        info.innerText = "";
    }
}

// Limpa os números digitados
function corrigir() {
    numeroDigitado = "";
    atualizarTela();
}

// Confirma o voto do eleitor
function confirmar() {
    if (numeroDigitado.length < 2) {
        alert("Por favor, digite 2 números antes de confirmar!");
        return;
    }

    let nomeCandidato = candidatos[cargoAtual][numeroDigitado] || "Nulo";

    // Janela de confirmação exibindo a mensagem solicitada
    alert("Você votou em: " + nomeCandidato);

    // Fluxo da votação: Passa de Governador para Presidente
    if (cargoAtual === "governador") {
        cargoAtual = "presidente";
        document.getElementById("cargo").innerText = "PRESIDENTE";
        corrigir();
        atualizarRodape();
    } else {
        // Fim da votação
        alert("FIM");
        // Reinicia a urna para o próximo eleitor
        cargoAtual = "governador";
        document.getElementById("cargo").innerText = "GOVERNADOR";
        corrigir();
        atualizarRodape();
    }
}

// Atualiza a lista de candidatos mostrada no rodapé de acordo com o cargo atual
function atualizarRodape() {
    let listaDiv = document.getElementById("lista-candidatos");
    let opcoes = candidatos[cargoAtual];
    let html = "";

    for (let numero in opcoes) {
        html += "<p><strong>" + numero + "</strong> - " + opcoes[numero] + "</p>";
    }

    listaDiv.innerHTML = html;
}