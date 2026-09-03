// localStorage.setItem("name","daksh");
// localStorage.setItem("username","daksh@gmail.com")
// localStorage.clear();
// console.log(localStorage);

const user ={
    id : 101,
    name: "Rudra",
    age : 28
};

// we cant save user object in local storage we need to convert in json 
localStorage.setItem("user",JSON.stringify(user));
const storedUser = localStorage.getItem("user");  // storedUser as a string
// convert back in to javascript oject
const getUser = JSON.parse(storedUser);
// console.log(user.name);


const fruits = ["banana","apple","pineapple"];
localStorage.setItem("fruits", JSON.stringify(fruits));
const storedFruit = localStorage.getItem("fruits");
const fruitArray = JSON.parse(storedFruit);
// console.log(fruitArray[0]); // banana

//************************************************ */

const username = document.querySelector("#username");
const saveBtn = document.querySelector("#saveBtn");
const removeBtn = document.querySelector("#removeBtn");
const message = document.querySelector("#message");
const savedUsername = localStorage.getItem("username");
    if(savedUsername){
        username.value = savedUsername;
    }
        // console.log(savedUsername);

saveBtn.addEventListener("click" , () => {
    const value = username.value.trim();
    if(value === ""){
        message.textContent = "please enter a username";
        return;
    }
    localStorage.setItem("username", value);
    message.textContent ="username save..!";
});

removeBtn.addEventListener("click", ()=>{
    localStorage.removeItem("username");
    username.value = "";
    message.textContent = "username removed...";
});
