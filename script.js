function clicar() {
   var abrir = document.getElementById ('menu-fechado');

   if
   (abrir.classList.contains('hide')) {
   abrir.classList.add('show');
   abrir.classList.remove('hide'); 
} else {
    abrir.classList.add('hide');
    abrir.classList.remove('show'); 
}


}