const lampOff = document.getElementById("lamp-off");
const lampOn = document.getElementById("lamp-on")
const onOffBtn = document.getElementById("on-off-btn");

onOffBtn.addEventListener ('click', function(){
  // tolgo l'immagine lamp-off
  lampOff.classList.remove("shown");
  lampOff.classList.add("hidden");
  // inserisco l'immagine lamp-on
  lampOn.classList.remove("hidden")
  lampOn.classList.add("shown");
});