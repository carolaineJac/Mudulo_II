var numero = prompt("elige un numero para saber si es par o impar")
if (numero % 2 == 0){
    alert("el numero es par")
}else{ alert ("es impar")

var sexo = prompt ("Si es hombre ponga una M en cambio si es mujer una F");
var edad = prompt ("escribe tu edad"); 

if(sexo =="M" && edad>=65)
{   alert("usted esta jubilado");
}else if (sexo=="M" && edad<=64){
   alert ("usted NO esta jubilado");
}

else if (sexo=="F" && edad>=60){
   alert("usted esta jubilada");
}else if (sexo=="F" && edad<=59);

   alert("usted NO esta jubilada");
}