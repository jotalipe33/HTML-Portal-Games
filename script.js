// ===== FUNCIONALIDADE 1: VALIDAÇÃO DO FORMULÁRIO =====
function validarFormulario() {
    // Lendo os campos com .value
    const nome = document.getElementById("joao_nome").value.trim();
    const email = document.getElementById("joao_email").value.trim();
    const idade = Number(document.getElementById("joao_idade").value);
    const plataforma = document.getElementById("joao_plataforma").value;
    const mensagem = document.getElementById("joao_mensagem").value.trim();
    const termos = document.getElementById("joao_termos").checked;

    // Radio: pega o que estiver marcado (se tiver algum)
    const radio = document.querySelector('input[name="joao_tipo"]:checked');
    let tipo = "";
    if (radio) {
        tipo = radio.value;
    }

    const aviso = document.getElementById("joao_mensagem_form");

    // Verificando as condições com if / else if / else
    if (nome.length < 3) {
        aviso.textContent = "Erro: o nome precisa ter pelo menos 3 letras.";
        aviso.style.color = "red";
    } else if (!email.includes("@") || !email.includes(".")) {
        aviso.textContent = "Erro: digite um e-mail válido.";
        aviso.style.color = "red";
    } else if (isNaN(idade) || idade < 10 || idade > 100) {
        aviso.textContent = "Erro: a idade deve ser entre 10 e 100.";
        aviso.style.color = "red";
    } else if (plataforma === "") {
        aviso.textContent = "Erro: escolha uma plataforma.";
        aviso.style.color = "red";
    } else if (tipo === "") {
        aviso.textContent = "Erro: escolha o tipo de jogador.";
        aviso.style.color = "red";
    } else if (mensagem.length < 10) {
        aviso.textContent = "Erro: a mensagem precisa ter pelo menos 10 letras.";
        aviso.style.color = "red";
    } else if (termos === false) {
        aviso.textContent = "Erro: marque a caixa para aceitar as novidades.";
        aviso.style.color = "red";
    } else {
        aviso.textContent = "Sucesso: cadastro enviado, " + nome + "!";
        aviso.style.color = "green";
        document.getElementById("joao_form").reset();
    }
}

// ===== FUNCIONALIDADE 2: TROCA DE COR E MODO ESCURO =====
function mudarCor(nomeClasse) {
    // tira as 4 cores e coloca só a escolhida
    document.body.classList.remove("joao_azul", "joao_verde", "joao_vermelho", "joao_roxo");
    document.body.classList.add(nomeClasse);
}

function alternarModo() {
    // toggle: se tem a classe, tira; se não tem, coloca
    document.body.classList.toggle("joao_escuro");
}

// ===== FUNCIONALIDADE 3: SISTEMA DE ABAS =====
function abrirAba(numero) {
    const botoes = document.querySelectorAll(".joao_aba_botao");
    const conteudos = document.querySelectorAll(".joao_aba_conteudo");

    // primeiro tira a classe "joao_ativa" de todos
    for (let i = 0; i < conteudos.length; i++) {
        botoes[i].classList.remove("joao_ativa");
        conteudos[i].classList.remove("joao_ativa");
    }

    // depois coloca só na aba clicada (numero = índice do array)
    botoes[numero].classList.add("joao_ativa");
    conteudos[numero].classList.add("joao_ativa");
}

// ===== FUNCIONALIDADE 4: FAQ / ACCORDION =====
function abrirFaq(numero) {
    const resposta = document.getElementById("joao_resposta" + numero);
    resposta.classList.toggle("joao_aberta");
}

// ===== FUNCIONALIDADE 5: LISTA DINÂMICA =====
function adicionarItem() {
    const campo = document.getElementById("joao_item_texto");
    const aviso = document.getElementById("joao_aviso_lista");
    const texto = campo.value.trim();

    if (texto === "") {
        aviso.textContent = "Digite o nome de um jogo.";
        aviso.style.color = "red";
    } else {
        aviso.textContent = "";

        const item = document.createElement("li");   // cria o <li>
        item.textContent = texto + " ";

        const botaoApagar = document.createElement("button");  // cria o botão
        botaoApagar.textContent = "Apagar";
        botaoApagar.onclick = function () {
            item.remove();   // apaga só este item
        };

        item.appendChild(botaoApagar);   // coloca o botão dentro do li
        document.getElementById("joao_lista").appendChild(item);  // coloca o li na lista

        campo.value = "";
    }
}

function apagarTudo() {
    document.getElementById("joao_lista").innerHTML = "";
}

// Evento de teclado: apertar Enter no campo também adiciona o item
document.getElementById("joao_item_texto").onkeydown = function (evento) {
    if (evento.key === "Enter") {
        adicionarItem();
    }
};
