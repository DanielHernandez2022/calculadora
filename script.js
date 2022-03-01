const main = document.getElementById("main")
const buttons = document.querySelectorAll(".buttons")
const display = document.querySelector(".display")
let count = 0;
let valor1 = 0;
let valor2 = 0;
let opera =""
let total=0;


/*main.addEventListener("click", () => {

    buttons


    for(let i=1; i<=main.length;i++){

        if(main.children[i].value == true){

            display.value = main.children[i].textContent

        }

    }

})*/

const hizoclick = function(elemento){


	display.value = this.textContent

	if(isNaN(display.value)){
		
		opera = display.value
		console.log("suma")

	}else{

		if(valor1==0){
			valor1 = parseInt(display.value)
		}
		

		else {
			valor2 = parseInt(display.value)
			console.log(`Valor2 = ${valor2}`)
			
		}
		
	}

	count++
	console.log(count)

	if(valor2!=0){

			switch (opera) {
				case '+':
					
					total = valor1 + valor2
					
				let espera = true;
				console.log("He declarado la variable e inicializado espera")
					while(espera){//creo no es necesario poner el while si los eventos siempra se activaran cuando los disparemos

						main.children[16].addEventListener("click", ()=>{
							console.log("boton = presionado")

							display.value = total
							

						})
						

						espera = false
					}
					

					break;

				case "-":
					
					display.value = valor1 - valor2
					break;

				case "*":

					display.value = valor1 * valor2
					break;
				case "/":
					
					display.value = (valor1) / (valor2)

				break;
				default:
					display.value = "error"
					break;
			}

			valor1=0;
			valor2=0;

		}

	



}

buttons.forEach(button =>{

	button.addEventListener("click", hizoclick)

})


/*No esta funcionando aplicar esto*/

/*<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Escuchar click de botones</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
		<button class="botones">Soy un botón</button>
		<br><br>
		<button class="botones">Otro botón</button>
		<br><br>
		<button class="botones">Botón 3</button>
		<br><br>
		<button class="botones">Botón 4</button>
		<br><br>
		<button class="botones">Botón 5</button>
		<br><br>
		<button class="botones">Último botón</button>
		<br><br>
    <script src="script.js"></script>
  </body>
</html> 


---------JAVASCRIPT-----------------------------------
// Obtener referencia a botones
// Recuerda: el punto . indica clases
const botones = document.querySelectorAll(".botones");
// Definir función y evitar definirla de manera anónima
const cuandoSeHaceClick = function (evento) {
	// Recuerda, this es el elemento
	console.log("El texto que tiene es: ", this.innerText);

	// Podemos cambiar cualquier cosa, p.ej. el estilo
	this.style.borderColor = "blue";
}
// botones es un arreglo así que lo recorremos
botones.forEach(boton => {
	//Agregar listener
	boton.addEventListener("click", cuandoSeHaceClick);
});*/