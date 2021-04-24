function checkInfo() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let email = document.querySelector("#email").value;

    if(username == "" || password == "" || email == "") {
        alert("You should fill all places");
        alert("You will be automatically returned to the home page!");
    }
}

document.querySelector(".signin").addEventListener('click', checkInfo);