let button = document.getElementById('no');
    let height = window.innerHeight - 50;
    let width = window.innerWidth - 50;

    button.addEventListener('mouseover', function () {
        button.style.position = "absolute"
        button.style.top = Math.random() * height + "px";
        button.style.left = Math.random() * width + "px";
    })

// Função que será executada quando o botão for clicado
        document.getElementById("botaoSim").addEventListener("click", function() {
            // Define a mensagem desejada
            var mensagem = "Minha chave pix é celular (88)9.8145-6310";
            
            // Exibe a mensagem no elemento <span>
            document.getElementById("mensagemPix").textContent = mensagem;
        });
