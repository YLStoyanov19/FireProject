function checkInfo() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if(username == "" || password == "") {
        alert("You should fill all places");
    }
    return false;
}

document.querySelector(".signin").addEventListener('click', checkInfo);