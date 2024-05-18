
const button1 = document.getElementById('B1');
const button2 = document.getElementById('B2');
const button3 = document.getElementById('B3');
const button4 = document.getElementById('B4');
const button5 = document.getElementById('B5');



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
}


button1.addEventListener('click' , function(){


const numbers =[];

for(let i = 1 ; i<100 ; ++i) {
    numbers.push(i);
}


const DivisableBy_3 = numbers.filter(function(number){

    return number%3==0;
});



console.log(DivisableBy_3);


});

button2.addEventListener('click' , function(){

const numbers=[];

for(let i = 1 ; i < 100 ;++i){
    numbers.push(i);
}


for(let i = 100 ; i <= 150 ;++i){
    numbers.push(i);
}

console.log(numbers);

});

button3.addEventListener('click' , function(){

    const numbers=[];
    for(let i = 1 ; i<100 ; ++i) {
        numbers.push(i);
    }

    numbers=numbers.map(function(num){
        return num+3;
    });
    
    console.log(numbers);


});

button4.addEventListener('click' , function(){


    const numbers=[];
    for(let i = 1 ; i<100 ; ++i) {
        numbers.push(i);
    }

   
    
    let SlicedArray = numbers.slice(20,41);
    

    console.log(SlicedArray);

});

button5.addEventListener('click' , function(){

    let arr = [1, 2, 3, 4, 5];
    shuffleArray(arr);

    console.log(arr);

    arr.sort(function(a,b){
         
        return b-a;

    });

    console.log(arr);



});