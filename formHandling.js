
const form = document.querySelector("#signUpForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const usernameError = document.querySelector("#usernameError");
const emailError =  document.querySelector("#emailError");
const message = document.querySelector("#message");


form.addEventListener("submit", (event) =>{
    event.preventDefault();     // Browser, don't perform your normal form submission. I'll handle it with JavaScript
    // console.log(username.value);
    // console.log("form submitted..!")

    // validations - get values and remove exra spaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    // clear previous messages
    usernameError.textContent = "";
    emailError.textContent = "";

    if (usernameValue === ""){
        usernameError.textContent = "Username is required...!"; 
        return ;  //stops the function immediately.
    }
    if(emailValue === ""){
        emailError.textContent = "Email is required ...!";
        return;
    }
    message.textContent = "Form Sumbitted successfully!";
    console.log("Everything is valid!");
});


