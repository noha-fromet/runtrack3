window.addEventListener("scroll", function() {
    let footer = document.querySelector("#footer");
    let scrollPercentage = (window.scrollY) / (document.body.scrollHeight - window.innerHeight);
    if (scrollPercentage > 0.5) {
        footer.classList.add("green");
    } else {
        footer.classList.remove("green");
    }
});
