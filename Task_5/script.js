const button = document.getElementById('clickHereButton');

button.addEventListener('click' , function(){

  
    const numbers=[];

    for(let i = 0 ; i < 100 ; ++i) {

        numbers.push(i);
    }


    const evenNumbers = numbers.filter(function(number){

        return number%2 ==0 ;
    });
    
    let sum = 0;

    for(let i = 0 ; i < evenNumbers.length ; ++i){
    
        sum+= evenNumbers[i];

    }

    console.log('the sum of the even numbers from 0 to 100 is : ' , sum);


});