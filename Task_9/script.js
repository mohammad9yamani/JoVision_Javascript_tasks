const button = document.getElementById('ip');

button.addEventListener('click' , function(){

const url = 'https://api.ipify.org?format=json';


fetch(url)
    .then(response=>response.json())
    .then(data=>{console.log(data.ip)});



});