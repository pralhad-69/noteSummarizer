// write a function getGrade(score) that:
// takes a student's marks zero to hundred returns the grade based on this logic
// function getGrade(score){
//     if(score < 33 && score === 0) return 'Fail';
//     if (score < 70 && score > 59) return "C";
//     if (score < 80 && score > 69) return "B";
//     if (score < 60 && score > 32) return "D";
//     if (score < 90 && score > 79) return "A";
//     if (score < 101 && score > 89) return "A+";
//     return " please enter valid marks the marks is invalid";
// }
// console.log(getGrade(57));

// this was ealry return 




// building rock paper and scissors very basic just the logic

// function rps(u,c){
//     if(u === c) return 'draw';
//     if ( u === 'rock' && c === 'scissors') return 'You Win';
//     if ( u === 'paper' && c === 'rock') return 'You Win';
//     if ( u === 'scissors' && c === 'paper') return 'You Win';
//     else return 'computer';


// }
// console.log( rps('rock', 'paper'));




// functions again

// Those functions that can be used as a value in other functions in first class function


// higher order functions
    // these functions return function or accept a function inn their parameter
        // syntax : function abcd(val){  // here this is the higher order function not the function below 
        // };
        // abcd(function(){

        // })
                // if the function is returned in the first function then it is also a higher order function






/// pure vs impure function
    // those function that doesn't change the value of var outside of the function is pure
    // function which change the value outsde of the function is impure. it has side effect
    //         a=33;
    // here : function pure(){
        // console.log('thumak thumak '); this doesn't change the value outside the function so it is pure
               //}

            //    function impure(a){
            //     a ++;  it changes the vlaue outside of this function so it is impure

            //    }
        




// closures -> ek function that returns other function and returned function will use parent function variable

//     function abcd(){
// let a= 12;
// return function(){
// console. log (a);
// } }


// lexicle scoping ->   it is so simple thing if you have a function where you create a variable that is accessable inside the whole function if there are other functions innside that function than also we can access it there but the var from the b cannot be accessed in a fuction




// // IIFE (Immediately invoked function expression)
//         (function(){
        
//         })(); here you don't write the function name and you call it right there only and it work right there 

// Hoisting Differences between Declaration and Expression 
        // abcd();

        // function abcd(){ // only works with normal function 
        //     console.log('hey  hey hey ');
            
        // }
        
        // we cannot do hoisting with function expressoin which is let abcd = function() 




