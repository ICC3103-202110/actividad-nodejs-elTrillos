function fibo(numb){
    if(numb==0){
        return numb;
    } 
    else if(numb == 1){
        return numb;
    }
    else{
        return fibo(numb-1)+fibo(numb-2);
    }
}
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout

});

readline.question("ingresa un numero para calcular su secuencia de fibbonacci: ", n =>{
    console.log(`F(${n})=${fibo(n)}`);
    readline.close();
});
