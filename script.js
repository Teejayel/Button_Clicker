function logOut(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    }
}

var totalLikes1 = 13;
function count1(element) {
    ++totalLikes1;
    element.innerText = totalLikes1 + " likes"
}

var totalLikes2 = 37;
function count2(element) {
    ++totalLikes2;
    element.innerText = totalLikes2 + " likes"
}

function remove(element) {
    element.remove();
}