// Récupère l'élément de la barre de navigation
const navbar = document.querySelector(".navbar");

// Récupère la position actuelle du scroll
let lastScrollPos = window.pageYOffset;

// Ajoute un écouteur d'événement de scroll à la fenêtre
window.addEventListener("scroll", () => {
  // Récupère la position actuelle du scroll
  const currentScrollPos = window.pageYOffset;

  // Si l'utilisateur fait défiler vers le bas et que la barre de navigation n'est pas cachée
  if (
    currentScrollPos > lastScrollPos &&
    !navbar.classList.contains("hidden")
  ) {
    // Cache la barre de navigation
    navbar.classList.add("hidden");
  } else {
    // Affiche la barre de navigation
    navbar.classList.remove("hidden");
  }

  // Met à jour la dernière position du scroll
  lastScrollPos = currentScrollPos;
});

// Écoute l'événement de scroll de la fenêtre
window.addEventListener("scroll", function () {
  // Récupère les positions de scroll actuelles et précédentes
  var currentScrollPos = window.pageYOffset;
  var previousScrollPos = this.previousScrollPos || 0;

  // Détermine la direction du scroll
  if (currentScrollPos > previousScrollPos) {
    // L'utilisateur fait défiler vers le bas, donc ajoute la classe "scrolling-up"
    document.querySelector(".navbar").classList.add("scrolling-up");
  } else {
    // L'utilisateur fait défiler vers le haut, donc supprime la classe "scrolling-up"
    document.querySelector(".navbar").classList.remove("scrolling-up");
  }

  // Sauvegarde la position actuelle du scroll pour le prochain événement de scroll
  this.previousScrollPos = currentScrollPos;
});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



document.getElementById("voirplus").addEventListener("click", function() {
  if (hide.style.display === 'block') {
    hide.style.display = 'none';
    voirplus.textContent = 'voir plus';
  } else {
    hide.style.display = 'block';
    voirplus.textContent = 'voir moins';
  }
});

