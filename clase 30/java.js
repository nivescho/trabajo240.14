//declara un array
let nums =[1,2,3,4,5];

console.log (nums)

//accder por indice 
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
console.log(nums[4]);

//array de strings 
let vocales =['a','e','i','o','u'];

//mutabilida e inmutabilidad 
//las strigs spon inmutables
let palabra="hola"
console.log(palabra);
console.log(palabra [3]);

palabra[3]='e';
console.log(palabra);


//los arrays son mutables
console.log (nums)
console.log (nums[4])
nums[4]=10;
console.log(nums);



//array de dos dimensiones
let  matriz=[1,2,3,
            4,5,6,
            7,8,9];
console.log(matriz);

matriz=[[1,2,3],
        [4,5,6],
        [7,8,9]];
console.log(matriz);
console.log(matriz[0]);
console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);

//iterand en ARRAYS
/*

let numeros=[0,1,2,3,4,5,6,7,8,9];

for  (let i =0; i<numeros.length;i++){
    console.log(numeros[i]);
}

*/


//iterando en una matriz
matriz=[[1,2,3],
    [4,5,6],
    [7,8,9]];

for (let i =0; i<matriz.length;i++){
    for (let j =0 ; j < matriz [i].length;j++){
        console.log(`i=${i}, j= ${j}`);
        //console.log(matriz[i])
    }
}

//ejercicio
for (let i=0 ; i < 10 ;i++){
    for(let j=0 ; j < 10 ;j++){
        console.log(`${i},${j}`)
    }

}
