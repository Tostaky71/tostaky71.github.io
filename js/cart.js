// Récupère le bouton "Ajouter au panier"
const bouton = document.getElementById("add-to-cart");
const selectFormat = document.getElementById("format-select");

if(bouton && selectFormat){
  bouton.addEventListener("click", () => {
    const formatChoisi = selectFormat.value; // récupère la valeur sélectionnée

    // Vérification du format
    if (!selectFormat.value) {
        alert("Veuillez sélectionner un format avant d'ajouter au panier !");
        return;
    }
    const optionChoisie = selectFormat.options[selectFormat.selectedIndex]; // <-- récupère l'option    
    const prixFormat = parseFloat(optionChoisie.dataset.prix); // prix dépend du format

    if (isNaN(prixFormat)) {
      alert("Erreur de prix ! Vérifiez les data-prix de vos options.");
      return;
    }
    
    // Récupérer le panier existant
    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    // Créer l'article depuis les data attributes du bouton
    const article = {
      id: bouton.dataset.id + "_" + formatChoisi,
      nom: bouton.dataset.nom,
      prix: prixFormat,
      quantite: 1,
      format: formatChoisi  // On stocke aussi le format
    };

    // Vérifier si l'article est déjà dans le panier
    const index = panier.findIndex(item => item.id === article.id && item.format === article.format);
    if(index > -1){
      panier[index].quantite += 1;
    } else {
      panier.push(article);
    }

    // Sauvegarder le panier
    localStorage.setItem("panier", JSON.stringify(panier));

    // Message de confirmation
    alert("Article ajouté au panier !");
    console.log("Panier actuel :", panier); // Pour debug
  });
}
