// callback function


// Synchronous callback
console.log("*******sychronous callback *******")
function greetUser( name , callback){
    console.log("name is ",name);
    callback();  // execute the callback function
}

// callback function
function finishGreet(){
    console.log("Greeting process is completed..!")
}

// passing the function without parenthesis
greetUser("Sam", finishGreet);

 //************************************************** 

// Asynchronous callbacks
console.log("\n*******Asychronous callback ******* ");

console.log("step 1 :start baking a cake");

function step3(){
    console.log("step 3 : the cake is ready....!"); 
}
setTimeout(step3,3000); // runs after 3 second step3

console.log("step 2 : ready the table");

// ************************************************
//  Built - in example
console.log("\n*********Built in***********")

// event listener
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Button was clicked!");
});


