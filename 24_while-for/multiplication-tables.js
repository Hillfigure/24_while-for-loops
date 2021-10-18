// Nested for-loops

for (let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        let result= i*j;
        console.log(i + " * " + j + " = " + result);
    }
}

// Nested while-loops

let k=1;
let l;
while (k<=10) {
    l = 1;
        while(l<=10){
            let result= k*l;
            console.log(k + " * " + l + " = " + result);
            l++
        }   
        k++;
}