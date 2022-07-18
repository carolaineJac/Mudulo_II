max = 17
min = 0
const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

function RandomWords() {
    var palabras = Math.floor(Math.random() * (max - min));
    console.log(palabras)
    return words[palabras];
}
///RandomWords()

var palabraAleatoria = RandomWords();

var time = 10;

var score = 0;

function addToDOM() {

    var palabraAleatoriaHtml = document.querySelector("h1")
    palabraAleatoria.textContent="";
    palabraAleatoria=RandomWords();
    palabraAleatoriaHtml.textContent=palabraAleatoria;
}
addToDOM();
//funcion que aumenta el score
function aumentarScore(){
    var scoreHtml=document.querySelector("#score");
    scoreHtml.textContent=score;
}
//funcion que aumenta el tiempo
function mostrarTiempoAumnetado(){
    var tiempoHtml=document.querySelector("#timeSpan");
    tiempoHtml.textContent=time;
}
//creacion del evento par ainput
var cajaTexto = document.querySelector("#text");
cajaTexto.addEventListener("keyup",(e)=>{
    if(e.key=="Enter"){                
        //comparamos palabras ingresada con la del arreglo
        if(palabraAleatoria==cajaTexto.value){
            score++;
            //aumentamos el tiempo
            time=time+3
            aumentarScore();
            mostrarTiempoAumnetado();
        }
        palabraAleatoria = RandomWords();
        addToDOM();
        cajaTexto.value ="";
    }
});
//funcion gameover()
function gameOver(){
    //se debe completar la funcion
    //alert("El tiempo se termino");
    //<button onclick="location.reload()">Volvé a empezar</button>
    let boton = document.createElement('button'); 
    boton.type = "button"; 
    boton.setAttribute("onclick","location.reload()");
    boton.innerText = 'Vover a Empezar';
     
    
    let h1_game=document.createElement("h1");
    let parrafo=document.createElement("P");
    let game=document.querySelector("#end-game-container");
    parrafo.textContent="Puntaje Obtenido: "+score;
    h1_game.textContent="Tiempo terminado";
    game.appendChild(h1_game);
    game.appendChild(parrafo);
    game.appendChild(boton);
}
//funcion para actualizar el tiempo
function actualizarTiempo(){
    time--;
    mostrarTiempoAumnetado();
    if (time < 0) {
        clearInterval(timeInterval);        
        //Aqui colocar la funcion game over
        mostrarTiempoAumnetado();
        gameOver();
    }
    //fin de l afuncion 
}
let timeInterval = setInterval(actualizarTiempo, 1000);