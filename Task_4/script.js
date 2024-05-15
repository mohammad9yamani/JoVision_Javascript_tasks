const button = document.getElementById('clickHereButton');

button.addEventListener('click' , function(){

  
    const numbers=[];

    for(let i = 0 ; i < 100 ; ++i) {

        numbers.push(i);
    }

    let sum = 0;

    for(let i = 0 ; i < 100 ; ++i){
    
        sum+= numbers[i];

    }

    console.log('the sum of all numbers from 0 to 100 is : ' , sum);


});