console.log("Test Test")


// alle images met lege src in html selecteren 
const tomaten = document.querySelector("#tomaten")
const bbq = document.querySelector("#bbq")
const parmezaans = document.querySelector("#parmezaans")
const cheddar = document.querySelector("#cheddar")
const peperoni = document.querySelector("#peperoni")
const ham = document.querySelector("#ham")
const pizzaklaar = document.querySelector("#pizzaklaar")
const toppings = [tomaten, bbq, parmezaans, cheddar, peperoni, ham]


// alle buttons in html selecteren
const tomatenKnop = document.querySelector("#tomatenknop")
const bbqKnop = document.querySelector("#bbqknop")
const parmezaansKnop = document.querySelector("#parmezaansknop")
const cheddarKnop = document.querySelector("#cheddarknop")
const peperoniKnop = document.querySelector("#peperoniknop")
const hamKnop = document.querySelector("#hamknop")
const samenstellenklaar = document.querySelector("#samenstellenklaar")
const afspelen = document.getElementById("samenstellenklaar")
const audio = new Audio ("img/finish.mp3")

// sausoptie kiezen
function sausKiezen(saus) {
  if (saus == "tomatenknop") {
    tomaten.src = "img/tom.png"
    bbq.src = ""

  } else if (saus == "bbqknop") {
    bbq.src = "img/bbq.png"
    tomaten.src = ""
  }
}


// kaasoptie kiezen
function kaasKiezen(kaas) {
  if (kaas == "parmezaansknop") {
    parmezaans.src = "img/parm.png"
    cheddar.src = ""

  } else if (kaas == "cheddarknop") {
    cheddar.src = "img/ched.png"
    parmezaans.src = ""
  }
}


// topingoptie kiezen
function topingKiezen(topping) {
  if (topping == "peperoniknop") {
    peperoni.src = "img/pep.png"
    ham.src = ""

  } else if (topping == "hamknop") {
    ham.src = "img/ham.png"
    peperoni.src = ""
  }
}


// klik op stel samen knop
// bron: met behulp van chatgpt deze functie toegevoegd https://chatgpt.com/c/8923a46e-3160-47ec-8d8c-5c8a0e943d55
// audio toevoegen met behulp van volgende video: https://youtu.be/3xlws5og44U?si=GeweRo71W0odgq1p
function pizzaKlaar() {
  toppings.forEach(function(topping) {
    topping.src = ""
  })
  pizzaklaar.src = "img/klaar.png"
  audio.play ()
}


// functies roepen na klik op de buttons 
// bron: chatgpt gevraagd hoe ik de functies moet roepen: https://chatgpt.com/c/921f45da-deef-4c50-8ba8-cec83cc87caf
// bron: om de arrow function anders te schrijven: https://www.w3schools.com/js/js_arrow_function.asp
tomatenKnop.addEventListener("click", function() {
  sausKiezen("tomatenknop")
})


bbqKnop.addEventListener("click", function() {
  sausKiezen("bbqknop")
})


parmezaansKnop.addEventListener("click", function() {
  kaasKiezen("parmezaansknop")
})


cheddarKnop.addEventListener("click", function() {
  kaasKiezen("cheddarknop")
})


peperoniKnop.addEventListener("click", function() {
  topingKiezen("peperoniknop")
})


hamKnop.addEventListener("click", function() {
  topingKiezen("hamknop")
})


// functie roepen na klik op stel samen
samenstellenklaar.addEventListener("click", function() {
  pizzaKlaar()
})


// overige bronnen:
// ingredienten-foto's: https://www.freepik.com/free-vector/set-pizza-elements_4430118.htm#fromView=search&page=1&position=8&uuid=2b505ad8-0e59-4128-bc8f-3441b81d5003
// pizzadeeg-foto: https://kr.pinterest.com/pin/995788167586073972/
// audio: https://pixabay.com/nl/sound-effects/search/finish/
