// using traditonal promises (.then)
function fetchUserData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            console.log("User data :", data);
        })
        .catch(error => {
            console.error("Error fetching data :", error);
        });
}
// fetchUserData();

//***************************************************** */

// using Modern async/await
async function fetchUserDataAsync() {
    try{
        // Execution pauses here until fetch completes
        const response = await fetch ('https://jsonplaceholder.typicode.com/todos/2');

        //Execution pauses here until response is parsed
        const data = await response.json();
        console.log("USer data :", data);
    }catch(error){
        console.error("Error feching data :",error);
    }
}

fetchUserDataAsync();



