document.getElementById('submitButton').addEventListener('click' , function(){


    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;


    const user = {
      
        name:name,
        age:age,
        timestamp: new Date().toLocaleString()

    };


    const { name:enteredName , age:enteredAge , timestamp} = user;



    window.alert(`Your name is : ${enteredName}\nYour age is : ${enteredAge}\nTimestamp : ${timestamp}`);



});





