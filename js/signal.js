function checkInfo() {
    let block = document.querySelector("#block").value;
    let entrance = document.querySelector("#entrance").value;
    let floor = document.querySelector("#floor").value;

    if(block == "" || entrance == "" || floor == "") {
        alert("You should fill all places");
    }
    else {
        window.open("../html/submit.html", "_self");
    }
}

document.querySelector(".submit").addEventListener('click', checkInfo);