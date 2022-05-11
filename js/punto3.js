function comparar() {
  let alerta3 = document.getElementById("alerta3");

  let error3 = document.getElementById("error3");
  let resultado3 = document.getElementById("resultado3");

  let numero3 = document.getElementById("numero3").value;

  if (numero3 !== "") {
    if (numero3 < 0) {
      error3.innerHTML = "";
      alerta3.className = "alert alert-danger";
      alerta3.style = "text-align: center;";
      resultado3.textContent = "El número es negativo";
    } else if (numero3 == 0) {
      error3.innerHTML = "";
      alerta3.className = "alert alert-warning";
      alerta3.style = "text-align: center;";
      resultado3.textContent = "El número es nulo";
    } else {
      error3.innerHTML = "";
      alerta3.className = "alert alert-success";
      alerta3.style = "text-align: center;";
      resultado3.textContent = "El número es positivo";
    }
  } else {
    resultado3.innerHTML = "";
    error3.innerHTML = "Los campos no pueden estar vacios";
    alerta3.className = "alert alert-danger";
    alerta3.style = "text-align:center;";
  }
}

var subButton = document.getElementById("Boton3");
subButton.addEventListener("click", comparar, false);
