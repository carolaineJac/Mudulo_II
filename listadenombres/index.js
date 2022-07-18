let palabra = "Hola";//arrays 
let palabra2= "adios"

//.............................................
console.log (palabra.length);//de esta forma se llama a el arreglo que contara las letras dentro de la variable;
console.log (palabra[0]);
console.log (palabra[1]);
console.log (palabra [2]);
console.log (palabra [3]);

let largoPalabra = palabra.length;//..para sacar el numero del largo de la frase 
console.log ("la ultima letra es " + palabra2[largoPalabra-1]);//forma larga
console.log ("ultima letra " + palabra2 [length-1]);

///..........porque se usan los arreglos ?
//quiero guardar los nombres de los alumnos del curso
//......version larga..... no eficiente
var Alumno1 = "paula"
var Alumno2 = "alexis"
var Alumno3 = "katy"
var Alumno4 = "sandra"

console.log ("el alumno 4 es" + Alumno4);

//..........version arreglo mas corto y simple

let alumnos = ["paula", "alexis","katy","sandra"];//........de esta forma se separan los elemento dentro de 
// un arrays se separan con una "","".
console.log ("la cantidas de alumnos es " +alumnos.length);
console.log ("el primero alumno es:" + alumnos[0]);
console.log ("el ultimo es :" [alumnos.length -1] )//de esta forma se hace para sacar el ultimo numero.


///............push y pop modificacion de un elemento de larreglo
console.log ("el tercer alumno antes del cambio es:" +alumnos[2])
alumnos[3] = "pedro"//cambiando el indice de la variable podemos cambiar de posision el contenido de ese arreglo 
console.log ("el nuevo alumno es " + alumnos [3] );


//...arreglo elemento al final del arreglo. el push hace que se ponga al final (push)
console.table(alumnos);//esta funcion table es un comando de consola para revisar en una tabla 
alumnos.push ("clemente");
console.table(alumnos);
//agregar dos elemntos
alumnos.push("guillermo", "alejandra");//.....no debe llevar los corchetes porque se agregaria como un elementos 
// ("se pueden agregar mas de dos todos los que quieras pero siempre separado por ",")
console.table (alumnos);

//.................pop solo permite eliminar  l ultimo nombre no crea solo saca el ultimo indice y lo deja guardado
console.log("antes del pop----------------");
console.table (alumnos);
let ultimo =alumnos.pop();//
console.log ("despues del pop-------------");
console.table (alumnos);
console.log ("el elemento sacado es :" + ultimo);


//... sacar el primer elemento con unshft... el parecido a pop pero elimina el primero
console.log("antes del shif----------------");
console.table (alumnos);
let primero =alumnos.shift();//
console.log ("despues del shif-------------");
console.table (alumnos);
console.log ("el elemento sacado es :" + primero);

//..........indexof... nos devuelve la posicion de lo que se busque
var texto = "mi primer index";
var posicion = texto.indexOf("P");
console.log ("la posicion del texto es: "+ posicion);
console.log ("la posicion del texto es:" + texto.indexOf("primer"));//...() hay va lo que se desea buscar
console.log ("la posicion del texto es:" + texto.indexOf("index"));// 10
console.log ("la posicion del texto es" +texto.indexOf ("pro"));//-1 me resultara siempre -1 porque no existe 
console.log ("la posicion del texto es" + texto.indexOf("i"));//toma solo la primera letra si es que existen mas de una letra


// index of arreglos
alumnos=["paula", "alexis","katy","sandra","fernando"]; // reescribr el arreglo
console.log("la posiscion de alexis en el arreglo es:" + alumnos.indexOf("alexis"));//1
console.log ("la posiscion de alexis en el arreglo es:" + alumnos.indexOf("fernando"))//4
console.log("la posiscion de alexis en el arreglo es:" + alumnos.indexOf("denis"));//-1 nos retorna porque este nombre no esta

//ejemplo de index of, para buscar un alumno

var busqueda= prompt("ingrese nombre del alumno");

if (alumnos.indexOf(busqueda)>=0){
    alert ("si esta");
}else{
    alert ("no esta")};


//.....slice
var copiaAlumnos = alumnos.slice();
var copiaParcialAlumnos = alumnos.slice(1,4);
console.log("copia------------");
console.table(copiaAlumnos);
console.log("copia parcial-------");
console.table(copiaAlumnos);


//eliminar elementos desde cualquier parte metodo splice esto elimina desde un indice hasta otro
console.log ("antes de eliminar.----------------");
console.table (copiaAlumnos);
var eliminados= copiaAlumnos.splice(1,3);
console.table(copiaAlumnos);
console.log("elementos eliminados---------------");
console.table(eliminados);

//eliminar un solo elemento determinado de enmedio con splice este elimina un SOLO elemnto
copiaAlumnos=alumnos.slice();
console.log("antes de eliminar un indice ---------------");
console.table(copiaAlumnos);
var eliminados = copiaAlumnos.slipe(2,1);
console.log("despues de eliminar ese indice ------------");
console.table(copiaAlumnos);
console.log (eliminados);
copiaAlumnos.slice;
//metodo join -----------------

console.log(alumnos.join("----"));
var textoAlumnos= "pedro juan diego pablo sandra";
var arregloAlumnos = textoAlumnos.split("");
console.table(arregloAlumnos);