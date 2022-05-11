// realiza un programa que simule, mediante una función denominada cuenta, cómo el ordenador cuenta
//  por pantalla, desde 0 hasta un número a determinar por el usuario. Dicho número se pide en la
//  función principal y se envía a la función cuenta por valor, donde se irán imprimiendo.

function principal() {
  let alerta2 = document.getElementById("alerta2");

  let error1 = document.getElementById("error1");
  let resultado2 = document.getElementById("resultado2");

  let numero = document.getElementById("numero").value;

  if(numero <=0){
    resultado2.innerHTML = "";
    error1.innerHTML = "El numero no puede ser menor o igual a cero porque solo se cuentan numeros positivos";
    alerta2.className = "alert alert-danger";
    alerta2.style = "text-align:center;";
  }else{
    if (numero === "") {
      resultado2.innerHTML = "";
      error1.innerHTML = "Los campos no pueden estar vacios";
      alerta2.className = "alert alert-danger";
      alerta2.style = "text-align:center;";
    } else {
      function cuenta(num) {   //segunda funcion
        let i = 0;
        resultado2.innerHTML = "";
        alerta2.className = "alert alert-success";
        alerta2.style = "text-align: center;";
        error1.innerHTML = "";
  
        while (i <= num) {
          let parrafo = document.createElement("p");
          parrafo.innerHTML = `${i} `;
  
          resultado2.appendChild(parrafo);
          i++;
        }
      }
      cuenta(numero);
    }
  }
}

var subButton = document.getElementById("Boton2");
subButton.addEventListener("click", principal, false);
