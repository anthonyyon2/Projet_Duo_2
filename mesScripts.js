//Exercice 1
function filtrerCommentairesCritiques() {
    console.log("Filtrage des commentaires critiques");
}

//Exercice 2 -Partie 1 et 2
function miseAJourVilles() {
  console.log("mise à jour de villes");
  var phrase = document.getElementById("villes"); // récupère phrase
  var tab = phrase.textContent.split(","); // créé tableau dans lequel les éléments sont les villes

  var first_element = tab.shift();
        console.log(tab);
        tab.push(first_element);
        console.log(tab.join(","));
        phrase.innerText = tab.join(",");
        /*recu ou pas ?*/
}

function demarrerDefilementVilles() {
    console.log("Défilement continu des villes");
}

//Exercice 3
function chargerDonnees() {
      console.log("Chargement d'un tableau de données");
}

//Exercice 4
//Exercice 4
let total = 0; //La somme totale des transactions générées
let nbreTotalTransactions = 0; //Nombre de transactions générées
let nbreTransactionsSupMile = 0; //Nombre de transactions dont le montant > 1000

function genererTransaction() {
    return Math.floor(Math.random() * (2000 - 100 + 1) + 100);
}

function ajouterTransaction() {
    console.log("Ajout de transaction");
}

function afficherStatistiques() {
    console.log("Affiche statistiques");
}
