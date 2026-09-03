// console.dir(document.getElementById("myId"));

let heading2 = document.getElementsByClassName("myClass");
// console.dir(heading2);
// console.log(heading2);

let parahs = document.getElementsByTagName("p");
console.dir(parahs);

let firstEl = document.querySelector("p");
console.dir(firstEl);

const title = document.querySelector("#myId")
const button = document.querySelector("#btn");

// button.addEventListener("click", () => {
//     console.log("Button Clicked..!")
//     title.textContent = "Hello JavaScript ...."; // h1 tag content change after click
// })

//************************************************************* */
// 1. Approch 1 => write a separate function method
function myFunction(){          // this handler method
    // console.log("myFunction..")
}
// myFunction call when click is happened
button.addEventListener("click",myFunction); // don't write () after function like myFunction()

// 2. Approch 2 => write a function in arrow function
button.addEventListener("click", ()=>{
    // console.log("myFunction..")
});

//************************************************** */
const input = document.querySelector("#username");
input.addEventListener("change", () =>{
    console.log(input.value);
});

const form = document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log("Form submitted...!");
    // console.log(event.target.textContent);  // Login
});

