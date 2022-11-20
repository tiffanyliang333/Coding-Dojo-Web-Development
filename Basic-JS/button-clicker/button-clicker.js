function login(element){
    if(element.innertext == "Login"){
        element.innerText="Logout";
    } else {
        element.innertext="Login";
    }
}

function hide(el) {
    el.remove();    
}
