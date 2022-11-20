var username="Jane Doe"
var usernameElement=document.querySelector("#username");

console.log(usernameElement);

function editprofile(){
    usernameElement.innerText="Mary Jane";
    console.log(username);
}
