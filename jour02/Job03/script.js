document.querySelector("#button").addEventListener("click", addone);

function addone() {
    let compteur = document.querySelector("#compteur");
    compteur.textContent = parseInt(compteur.textContent) + 1;
}
