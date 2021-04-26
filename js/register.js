function checkRegister() {
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    let email = document.querySelector("#email").value;

    if(username == "" || password == "" || email == "") {
        alert("You should fill all places");
    }
    else {
        window.open("../html/home-page.html", "_self");
    }
}

document.querySelector("#register10").addEventListener('click', checkRegister);