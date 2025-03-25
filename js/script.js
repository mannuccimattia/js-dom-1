const lampOff = document.getElementById("lamp-off");
console.log(lampOff);
const lampOn = document.getElementById("lamp-on")
console.log(lampOn);
const onOffBtn = document.getElementById("on-off-btn");
console.log(onOffBtn);

onOffBtn.addEventListener ('click', function(){
  lampOff.classList.remove("shown");
  lampOff.classList.add("hidden");

  lampOn.classList.remove("hidden")
  lampOn.classList.add("shown");
});