document.addEventListener("keydown", function(event) {
    if (event.key >= 'a' && event.key <= 'z') {
        let keylogger = document.querySelector("#keylogger");
        keylogger.value += event.key;
    }
});
