const candidatos = {
    governador: {
        "12": "Maria Silva",
        "15": "João Santos",
        "23": "Alberto Mota"
    },

    presidente: {
        "10": "Carlos Oliveira",
        "20": "Ana Pereira",
        "45": "Zema Lima"
    }
};

let cargoAtual = "governador";
let numeroDigitado = "";

function atualizarTela() {

    const display = document.getElementById("display-numero");
    const info = document.getElementById("info-candidato");

    display.innerText = numeroDigitado;

    if (numeroDigitado.length === 2) {

        const nomeCandidato = candidatos[cargoAtual][numeroDigitado];

        console.log("Cargo:", cargoAtual);
        console.log("Número:", numeroDigitado);
        console.log("Resultado:", nomeCandidato);

        if (nomeCandidato) {
            info.innerText = "Candidato: " + nomeCandidato;
        } else {
            info.innerText = "VOTO NULO";
        }

    } else {
        info.innerText = "";
    }
}


function digitar(numero) {

    if (numeroDigitado.length < 2) {

        numeroDigitado += numero;

        console.log("Digitado:", numeroDigitado);

        atualizarTela();
    }
}


function corrigir() {

    numeroDigitado = "";

    atualizarTela();
}


function branco() {

    numeroDigitado = "";

    atualizarTela();
}


function confirmar() {

    if (numeroDigitado.length < 2) {

        alert("Por favor, digite 2 números antes de confirmar!");

        return;
    }

    const nomeCandidato =
        candidatos[cargoAtual][numeroDigitado] || "Nulo";

    alert("Você votou em: " + nomeCandidato);

    if (cargoAtual === "governador") {

        cargoAtual = "presidente";

        document.getElementById("cargo").innerText = "PRESIDENTE";

        corrigir();

    } else {

        alert("FIM");

        cargoAtual = "governador";

        document.getElementById("cargo").innerText = "GOVERNADOR";

        corrigir();
    }
}