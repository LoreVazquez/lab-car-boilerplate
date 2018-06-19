//Evento para inicializar modales
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {opacity: 0.5});
});

// Evento para inicializar menu en versión móvil
$(document).ready(function(){
  $('.sidenav').sidenav();
});

//Evento para inicializar select
$(document).ready(function(){
  $('select').formSelect();
});