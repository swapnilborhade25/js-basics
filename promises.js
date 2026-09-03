// 1. creating promises
const fetchUserData = new Promise((resolve, reject) =>{
    let success = false;
    if (success){
        resolve({id : 101 , name : "Krushna"}); // Trigger .then
    }else {
        reject("Failed to fetch user data.");   // Trigger .catch
    }
});

// 2. consuming the promise
fetchUserData
    .then((data) => {
        console.log("Success!",data.name); // Logs: Success! Alice
    })
    .catch((error) =>{
        console.error("Error occurred : ",error); // Runs only if reject() is called
    });


    
// class User{   // for consructor learning
 
//     // constructor method
//     constructor (username , email){
//         this.username = username;
//         this.email = email;
//     }
//     sayHello(){
//         console.log(`Hello My name is ${this.username}`);
//     }
// }
// const user1 = new User("trisha", "trishaU@gmail.com");
// user1.sayHello();
