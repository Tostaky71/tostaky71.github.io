// Récupère le bouton "Ajouter au panier"
const bouton = document.getElementById("add-to-cart");

if(bouton){
  bouton.addEventListener("click", () => {
    // Récupérer le panier existant
    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    // Créer l'article depuis les data attributes du bouton
    const article = {
      id: bouton.dataset.id,
      nom: bouton.dataset.nom,
      prix: parseFloat(bouton.dataset.prix),
      quantite: 1
    };

    // Vérifier si l'article est déjà dans le panier
    const index = panier.findIndex(item => item.id === article.id);
    if(index > -1){
      panier[index].quantite += 1;
    } else {
      panier.push(article);
    }

    // Sauvegarder le panier
    localStorage.setItem("panier", JSON.stringify(panier));

    // Message de confirmation
    alert("Article ajouté au panier !");
  });
}
