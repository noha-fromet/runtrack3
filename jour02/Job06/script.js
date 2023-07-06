let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let currentIndex = 0;

document.addEventListener("keydown", function(event) {
    if (event.key === konamiCode[currentIndex]) {
        currentIndex++;
        if (currentIndex === konamiCode.length) {
            document.body.classList.add("konami");
        }
    } else {
        currentIndex = 0;
    }
});
