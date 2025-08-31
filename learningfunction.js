    // function hoistings 
    /*
    canBeHoisted();
    function canBeHoisted(){
        console.log('SUNFLOWER');

    }

    cannotBeHoisted();

    let sunflower = function(){
        console.log('Error will come in the console');
        
    }
        */




    //Fat arrow function
    /*
        let multiply = (a,b) =>{
            return a*b;
        }
         console.log(multiply(4,6));
         */







// identify parameter and argument
/*
    function welcome(name){
        console.log(`Welcome to the Multiverse of ${name}`);
        
    }
    welcome('Rakhi Sawant');
    */




// in paramemters when we wnat to add many arguments then we use ... which is rest parameter. the parameter will act like a array





//use rest parameter to accept any number of scores and return the total
/*
function getScore(...scores){
    console.log(`these are the scores to do the sum ${scores}`);

    // using foreach loop
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
        


}
console.log(getScore(10,12,53,2,5,2,5,2,5,2))

*/





//   function using early return
/*

function checkAge(age){
    if(age < 18) return 'Too Young';
    return 'Allowed';
}
console.log(checkAge(6));

*/



// if a function is not returning any thing than it returns undefined




// What does it mean when we say " functions are first-class citizens"
// it means we can treat function as a value 

    /*
          let a = function (){
          
          }
          a(); // you need to call the variable
          */






// Pass a function into another function and execute it inside. 
  /*
    function abcd(val){
       val();
    }
    abcd(function(){
            console.log('Ma hariBahadur');
            
    })
            */





    // what is the higher-order function
    // --> it is a function which can return other function and a function that can take function as a parameter

         





// convert the function into a pure function.
/*
let total = 0;
function addToTotal(num){
    let temptotal = total
temptotal += num;
  return temptotal;
    
}
let result = addToTotal(5);
console.log(result)

*/





// what is a closure? When is it created?
// --> closure means inner function can access outer functions variables or objs
/*
function outer(){
    let count = 0;
    return function (){
        count++;
        console.log(count)
    };
}
    let couter = outer();
couter();
couter();
couter();

*/






//what will ge output here and why?

// greet();
// var greet = function (){
//     console.log('hi!');
    
// }
// it will give erro becuase you have used function expression






// write a bmi calculator
/*
function bmi(weight, height) {
  return weight / (height * height);
}

function checkStatus(val) {
  if (val < 18.5) return "Underweight";
  else if (val < 24.9) return "Healthy";
  else return "Overweight";
}

let result = bmi(63, 1.7);
console.log(result.toFixed(2));
console.log(checkStatus(result));
*/






