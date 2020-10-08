var btnCorNao = document.getElementById("btnCorUm");
var btnCorSim = document.getElementById("btnCorDois");
var node = document.getElementById("refencia");

function openReferencia() {
    node.classList.add("oculto")
    btnCorSim.classList.add("oculto")
    btnCorNao.classList.remove("oculto")
}


function closeReferencia() {
    node.classList.remove("oculto")
    btnCorSim.classList.remove("oculto")
    btnCorNao.classList.add("oculto")
}

function enviar() {

    var nome = document.getElementById("txtNome");
    var sobrenome = document.getElementById("txtSobrenome");
    var email = document.getElementById("txtEmail");
    var vaga = document.getElementById("txtVaga");
    var data = document.getElementById("txtData");
    var emprego = document.querySelectorAll("input[name=txtEmprego]:checked");

    if (nome == "" || sobrenome == "" || email == "" || vaga == "" || data == "" || emprego.length < 1) {
        var x = document.getElementById("snackbar2");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);

    } else {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);

        setTimeout(function () {
            x.className = x.className.replace(document.location.reload(true));
        }, 1000);
    }

}