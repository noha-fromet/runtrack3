document.querySelector("#button").addEventListener("click", showhide);

function showhide() {
    let article = document.querySelector("#article");
    if (article) {
        article.remove();
    } else {
        let newArticle = document.createElement("article");
        newArticle.id = "article";
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle);
    }
}
