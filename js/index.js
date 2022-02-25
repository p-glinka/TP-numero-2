let  usuario, password

usuario = "administrador"
password = "1234"

function ingresarDatos(){

let inUsuario = prompt("ingrese el Usuario");
let inPasword = prompt("ingrese el password");

console.log (inUsuario);
console.log(inPasword);

if(inUsuario == usuario && inPasword == password){
    alert("Bienvenido !!!!!")
} else 
    alert("Usuario o contraseña incorrectos")

}

function tresNumeros(){
    let  numUno = prompt("ingrese el 1º numero");
    let  numDos = prompt("ingrese el 2º numero");
    let  numTres = prompt("ingrese el 3º  numero");

if (numUno < numDos && numDos > numTres){
  if ( numUno < numTres ){
    console.log(numUno);
    console.log(numDos);
}
}
if (numUno < numDos && numDos > numTres){
    if ( numUno > numTres) {
    console.log(numTres);
    console.log(numDos);
}
}

if (numUno > numDos && numDos > NumTres ){
    if (numUno > numTres){  
        console.log(numtres);
        console.log(numUno);
}
}
if(numUno < numDos && numDos < numTres ){
    console.log(numUno);
    console.log(numTres);
}
if( numUno > numDos && numDos > numTres ){
    if(numTres > numUno)
    console.log (numDos);
    console.log (numTres);
}
if ( numUno > numDos && numDos < numTres){
    if(numUno > numTres){
        console.log(numDos);
        console.log(numUno)
}
}
}

function mensajeUs (){ 
let holaMundo
holaMundo = " Hola Mundo "
    alert(holaMundo)
}