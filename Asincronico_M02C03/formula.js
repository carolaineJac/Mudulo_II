let eleccion = prompt("elige 1) piedra, 2)papel o 3) tijera");
let piedra = 1;
let papel = 2;
let tijera =3;
let volver = "no"

while(volver){
       let aleatorio =Math.floor( Math.random()*3 + 1);
            
    if(eleccion == 1 && aleatorio == 3){
        alert ("usted a ganado "+ eleccion  + " vs "+ aleatorio);
       }
         else if (eleccion == 2 && aleatorio == 1 ){
        alert ("usted a ganado "+ eleccion + " vs "+ aleatorio);
         }   
        else if(eleccion == 3 && aleatorio == 2){
            alert ("usted a ganado "+ eleccion + " vs "+ aleatorio );
        }
        else if(aleatorio == 1 && eleccion == 3){
              alert ("lo siento a perdido "+ aleatorio+ " vs " + eleccion);
        }else if (aleatorio == 2 && eleccion ==3){
                alert ("lo siento a perdido "+  aleatorio + " vs "+ eleccion);
        }else if (aleatorio== 3 && eleccion ==2){
                alert ("lo siento a perdido "+ aleatorio+ " vs " + eleccion);
        }else if  (aleatorio === eleccion  ); {
               alert ("esto es un empate");
               }  
 promt(volver)

}