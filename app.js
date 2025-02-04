let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // El usuario no acertó.
        if(numeroDeUsuario > numeroSecreto){
           asignarTextoElemento('p','El numero Secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numerGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numerGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamis todos lo numeros 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('P','Ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numerGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numerGenerado);
            return numerGenerado;
        }
    }    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(params) {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de nuemros 
    //generar el numero aleatorio
    //iniciar el numero de intentos
    condicionesIniciales();
     //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true' );
 
}


condicionesIniciales();
