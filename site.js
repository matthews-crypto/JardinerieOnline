// image qui defilent
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
    // declaration de la valeur du panier
var x = 0;
// selection de la classe  ou on affiiche le prix
const q = document.getElementsByClassName('nbre');
for (let i = 0; i < q.length; i++) {

    q[i].innerHTML = x;
    // fonction qui ajoute un article au panier
    function ajoutProduit() {
        x = x + 1;
        q[i].innerHTML = x;
    }
    // fonction qui retire un produit du panier
    function retraitProduit() {
        x = x - 1;
        if (x < 0) {
            x = 0;
        }
        q[i].innerHTML = x;
    }
}

// js du mode  sombre
// selectionne le checkbox jour et nuit
const darkMode = document.getElementById('dark-mode');
// on ajoute  automatiquement une class dark au body quand le checkbox change de position qui disparaitra grace au toggle
darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// bouton like
// selection de la classe des icones NB:sachant que c'est une classe elles seront mise dans un tableau. 
var li = document.querySelectorAll('.fa-regular');

// boucle qui permet de parcourir le tableau des icones ci dessus. 
for (var i = 0; i < li.length; i++) {
    // ecouteur d'evenement au clic qui execute la fonction
    li[i].onclick = function(e) {
        // e.target permet de cibler l'icone du tableau qui a declenché l'evenement onclick vu que nous avons un tableau
        // className change le nom de classe qui existe deja au niveau de l'icone ciblé
        e.target.className = 'fa-solid fa-heart';
    }
}
// fin du like icone