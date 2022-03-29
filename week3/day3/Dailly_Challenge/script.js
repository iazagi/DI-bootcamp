


let input = document.querySelector("input");
input.addEventListener('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z]");
    if (!regex.test(event.key)) {
       event.preventDefault();
       return false;
    }
});
