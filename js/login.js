function checkLogin() {
    let username = document.querySelector("#username1").value;
    let password = document.querySelector("#password1").value;

    if(username == "" || password == "") {
        alert("You should fill all places");
    }
    else {
        window.open("../html/home-page.html", "_self");
    }
}

document.querySelector(".signin").addEventListener('click', checkLogin);