function FizzBuzz(n){
    for (let i = 1; i < n; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
}

function main() {
   // const n = parseInt(readLine().trim(), 10);
    let n = 15;
    fizzBuzz(n);
}