const button = document.getElementById('ip');

button.addEventListener('click' , function(){


    const url='https://api.ipify.orgx?format=json';

    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            const ip = data.ip;

            document.getElementById('ip').textContent=ip;
        })
        .catch(error=>{
            window.alert('Error in fetching IP address :' + error.message);
        });






});