// función de suma de arreglos

function sumArray(arr){
    var total = 0;
    for (var i = 0; i < arr.length; i++){
        total += Number(arr[i]);
    }
    return total;
}

console.log (sumArray([1,2,3]));       // 6
console.log (sumArray([10,3,10,4]));   // 27
console.log (sumArray([-5,100]));      //95

