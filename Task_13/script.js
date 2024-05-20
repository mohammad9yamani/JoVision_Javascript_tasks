document.getElementById('submitButton').addEventListener('click', function(){

const name = document.getElementById('name').value;

const url = `https://api.agify.io?name=${name}`;


fetch(url)
    .then(response=>response.json())
    .then(data=>{

        const {name:enteredName , age } = data;

        window.alert(`Your name is ${enteredName} and your age is ${age}`);
    })
    .catch(error=>{
        window.alert('Error fetching the age' + error.message);
    })











});