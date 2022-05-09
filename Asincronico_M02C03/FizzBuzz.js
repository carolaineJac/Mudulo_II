let contador= 1;
 
while(contador<100){
if (contador % 3===0){
   console.log ("fizz");
}
else if (contador % 5 ===0){
       console.log("buzz"); 
     }
       else if (contador % 3 ===0 && contador % 5 ===0){
          console.log ("FizzBuzz");
       }
      else {
         console.log (contador);
       }contador++
}


let aleatorio =Math.floor( Math.random()*3 + 1)
console.log (aleatorio)


