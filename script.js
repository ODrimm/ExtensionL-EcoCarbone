var item = document.getElementById("container");

window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) item.scrollLeft += 70;
    else item.scrollLeft -= 70;
});

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let kilometres = randomIntFromInterval(2500, 8000);

document.getElementById("distance").innerHTML = kilometres + " kilomètres parcourus";

document.getElementById("conso").innerHTML  = Math.floor(kilometres * 0.02);

document.getElementById("titre").innerHTML  = "Avec " + Math.floor(kilometres * 0.02) + " tonnes de CO² on pourrait";

document.getElementById("menages").innerHTML  = "Faire vivre " + Math.floor(kilometres / 275) + " ménages pendant 1 an";

document.getElementById("repas").innerHTML  = "Produire " + Math.floor(kilometres / 2.89) + " repas végétariens";



let loading = document.getElementById("Loading");
let data = document.getElementById("Data");
let container = document.getElementById("container");

data.style.display = "none";

function myMove() {
    var pos = 168;
    id = setInterval(frame, 0.000002);
    function frame() {
      if (pos == 800) {
        clearInterval(id);
      } else {
        pos++; 
        loading.style.top = pos + 'px'; 
      }
    }
}

function myMove2() {
    var pos = 500;
    id = setInterval(frame, 0.000002);
    function frame() {
      if (pos == 75) {
        clearInterval(id);
      } else {
        pos--; 
        data.style.marginLeft = pos + 'px'; 
      }
    }
}

setTimeout(() => {
    myMove();
    myMove2();
    data.style.display = "flex";
}, 2000);

setTimeout(() => {
    loading.style.display = "none"; 
    container.style.overflowY = "auto";

}, 4000);

