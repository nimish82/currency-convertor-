const from = document.getElementById("from");
const to = document.getElementById("to");
const convert = document.getElementById("convert");
const value1= document.getElementById('amount');
const value2 = document.getElementById('to-currency');
console.log(from.value)

let data;
from.onclick=async function(){
    let response = await fetch(`https://v6.exchangerate-api.com/v6/bcbe07cb24da825602c9746f/latest/${from.value}`);
     data = await response.json();
    console.log(data['conversion_rates']);

    convert.onclick=function(){
        console.log(value1.value);
        // console.log('sam')
        // console.log(from.value)''
        // value1.value= data['conversion_rates'][from.value];
        value2.value= value1.value*data['conversion_rates'][to.value];
    }
     
}

