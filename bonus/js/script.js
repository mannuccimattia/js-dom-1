/* ******************************************** */
/*            SOLUZIONE DISPLAY:NONE            */
/* ******************************************** */
const lampOff = document.getElementById("lamp-off");
const lampOn = document.getElementById("lamp-on")
const onOffBtn = document.getElementById("on-off-btn");

onOffBtn.addEventListener("click", function(){
  // se la lampadina è spenta
  if(lampOff.classList.contains("shown") && lampOn.classList.contains("hidden")){
    // tolgo l'immagine lamp-off
    lampOff.classList.remove("shown");
    lampOff.classList.add("hidden");
    // inserisco l'immagine lamp-on
    lampOn.classList.remove("hidden");
    lampOn.classList.add("shown");
    // cambio il testo del bottone da "Accendi" a "Spegni"
    onOffBtn.innerHTML = "Spegni"
  }
  // se la lampadina è accesa
  else if(lampOn.classList.contains("shown") && lampOff.classList.contains("hidden")){
    // tolgo l'immagine lamp-on
    lampOn.classList.remove("shown");
    lampOn.classList.add("hidden");
    // inserisco l'immagine lamp-off
    lampOff.classList.remove("hidden");
    lampOff.classList.add("shown");
    // cambio il testo del bottone da "Spegni" a "Accendi"
    onOffBtn.innerHTML = "Accendi"
  }
});


/* ******************************************** */
/*                 SOLUZIONE SRC                */
/* ******************************************** */
const lamp = document.getElementById("lamp");
const button = document.getElementById("btn");

// al click del bottone cambio il contenuto dell'immagine con la lampadina accesa
button.addEventListener("click", function(){
  lamp.classList.toggle("is-on");
  if(lamp.classList.contains("is-on")){
    lamp.src = "./img/yellow_lamp.png";
    btn.innerHTML = "Spegni"
  }
  else{
    lamp.src = "./img/white_lamp.png";
    btn.innerHTML = "Accendi"
  }
})