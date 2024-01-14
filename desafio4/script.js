function validarLogin() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var mensagemErro = document.getElementById("mensagemErro");

    if (email === "" || senha === "") {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
        mensagemErro.style.display = "block";
    } else {
        // Simulando uma requisição HTTP para obter o arquivo JSON
        fetch('ex_bd.json')
            .then(response => response.json())
            .then(data => {
                var user = verificaUser(email, senha, data);

                if (!user) {
                    mensagemErro.textContent = "Login inválido. Verifique seu e-mail e senha.";
                    mensagemErro.style.display = "block";
                } else {
                    mensagemErro.textContent = "";
                    mensagemErro.style.display = "none";
                    alert("Login bem-sucedido!");
                }
            })
            .catch(error => console.error('Erro ao carregar dados do usuário:', error));
    }

    function verificaUser(email, senha, data) {
        for (let i = 0; i < data.users.length; i++) {
            const usuario_atual = data.users[i];

            if (usuario_atual.email === email && usuario_atual.password === senha) {
                console.log("Usuário encontrado:", usuario_atual);
                return usuario_atual;
            }
        }
        console.log("Usuário não encontrado");
        return null;
    }



    const retorno = verificaUser("joaopereira@gmail.com", "Senha123");
    console.log(retorno);
}
