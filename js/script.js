/* ******************************************** */
/*            SOLUZIONE 1            */
/* ******************************************** */
const lampOff = document.getElementById("lamp-off");
const lampOn = document.getElementById("lamp-on")
const onOffBtn = document.getElementById("on-off-btn");

// al click del bottone assegno display:none alla lampadina spenta e display:inline-block alla lampadina accesa
onOffBtn.addEventListener('click', function(){
  // tolgo l'immagine lamp-off
  lampOff.classList.remove("shown");
  lampOff.classList.add("hidden");
  // inserisco l'immagine lamp-on
  lampOn.classList.remove("hidden")
  lampOn.classList.add("shown");
});


/* ******************************************** */
/*                 SOLUZIONE 2                  */
/* ******************************************** */
const lamp = document.getElementById("lamp");
const button = document.getElementById("btn");

// al click del bottone cambio il contenuto dell'immagine con la lampadina accesa
button.addEventListener("click", function(){
  lamp.src = "./img/yellow_lamp.png";
})