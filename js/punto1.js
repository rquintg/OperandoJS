function permuta() {
  let alerta = document.getElementById("alerta");
  let error = document.getElementById("error");

  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;

  if (n1 === "" && n2 === "") {
    result.innerHTML = "";
    result1.innerHTML = "";
    error.innerHTML = "Los campos no pueden estar vacios";
    alerta.className = "alert alert-warning";
    alerta.style = "text-align:center;";
  } else {
    if (n1 != n2) {
      let temp1;
      let temp2;

      temp1 = n1;
      temp2 = n2;

      n1 = temp2;
      n2 = temp1;

      error.innerHTML = "";
      alerta.className = "alert alert-success";
      alert.style = "text-align: center;";
      result.textContent = "variable permutada A: " + n1;
      result1.textContent = "variable permutada B: " + n2;
    } else {
      result.innerHTML = "";
      result1.innerHTML = "";
      error.innerHTML = "No se puede permutar, los numeros son iguales";
      alerta.className = "alert alert-danger";
      alerta.style = "text-align:center;";
    }
  }
}

var subButton = document.getElementById("Boton1");
subButton.addEventListener("click", permuta, false);




