function jeuQuiz() {
    var reponseJoueur = document.question.reponse.value;
    var affichageReponse = document.getElementById("reponseQuiz");
    parseInt(reponseJoueur);
    if(reponseJoueur==5){
        affichageReponse.innerHTML += "Vous avez trouvé la bonne valeur. Bravo.<br>";
    }
    else{
        affichageReponse.innerHTML += "Vous n'avez pas trouvé la bonne valeur. Dommage.<br>";
    }
    return
}

function changeCSS(FichierCss, indexLienCss){
	var ancienLienCss = document.getElementsByTagName("link").item(indexLienCss);
    var nouveauLienCss = document.createElement("link");
    nouveauLienCss.setAttribute("rel", "stylesheet");
	nouveauLienCss.setAttribute("type", "text/css");
    nouveauLienCss.setAttribute("href", FichierCss);
    document.getElementsByTagName("head").item(indexLienCss).replaceChild(nouveauLienCss, ancienLienCss);
}
