//array 

let cars=["bmw","volvo","saab","ford","fiat","audi"];
const btnpush=document.getElementById("btn _push")
const btnpop=document.getElementById("btn _pop")
const btnshift=document.getElementById("btn _shift")
const btnunshift=document.getElementById("btn _unshift")
const btnslice=document.getElementById("btn _slice")

//funcion

function cargarlogos(){
    let text ="";

    for (let car of cars){
        text +=`<img src="assets/img/${car}.png" alt="${car}logo" width ="100"/>`;
    }
    document.getElementById("demo").innerHTML=text;
}

// 
function funcionpush(e){
    cars.push('lexus')
    cargarlogos();
}

function funcionpop(e){
    cars.pop();
    cargarlogos();
}

function funcionshift(e){
    cars.shift();
    cargarlogos();
}

function funcionunshift(e){
    cars.unshift('ferrari');
    cargarlogos();
}

function funcionslice(e){
    let begin=document.getElementById("begin").value;
    let end=document.getElementById("end").value;

    if (begin !="" && end!=""){
        cars=cars.slice(begin,end);
        cargarlogos();
    }
}




cargarlogos();
btnpush.onclick=funcionpush;
cargarlogos();
btnpop.onclick=funcionpop;
cargarlogos();
btnshift.onclick=funcionshift;
cargarlogos();
btnunshift.onclick=funcionunshift;
cargarlogos();
btnslice.onclick=funcionslice;


