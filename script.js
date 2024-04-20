const convertfrom = document.getElementById("from");
const convertto = document.getElementById("to");
const convert = document.getElementById("convert");
const amount= document.getElementById('amount');
const convertedAmount = document.getElementById('to-currency');

let data;
async function fetchapi(){
    let response = await fetch(`https://v6.exchangerate-api.com/v6/bcbe07cb24da825602c9746f/latest/${convertfrom.value}`);
     data = await response.json();
    console.log(data['conversion_rates']);
    for(const key in data['conversion_rates']){
        var option = document.createElement('option');
        option.value= key;
        option.text=key;
        convertfrom.appendChild(option.cloneNode(true));
        convertto.appendChild(option);
    }
    convert.onclick=function(){
        convertedAmount.value= amount.value*data['conversion_rates'][convertto.value].toFixed(3);  
    }
}
convertfrom.onchange=async function(){
    
    let response = await fetch(`https://v6.exchangerate-api.com/v6/bcbe07cb24da825602c9746f/latest/${convertfrom.value}`);
     data = await response.json();
    convert.onclick=function(){
        convertedAmount.value= amount.value*data['conversion_rates'][convertto.value].toFixed(3);    
    }
}