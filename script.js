console.log("Test Test")


//alle images met lege src in html selecteren 
let tomaten = document.querySelector("#tomaten")
let bbq = document.querySelector("#bbq")
let parmezaans = document.querySelector("#parmezaans")
let cheddar = document.querySelector("#cheddar")
let peperoni = document.querySelector("#peperoni")
let ham = document.querySelector("#ham")
const pizzaklaar = document.querySelector("#pizzaklaar")


//alle buttons in html selecteren
let toppings = [tomaten, bbq, parmezaans, cheddar, peperoni, ham]
let tomatenKnop = document.querySelector('#tomatenknop')
let bbqKnop = document.querySelector('#bbqknop')
let parmezaansKnop = document.querySelector('#parmezaansknop')
let cheddarKnop = document.querySelector('#cheddarknop')
let peperoniKnop = document.querySelector('#peperoniknop')
let hamKnop = document.querySelector('#hamknop')
let samenstellenklaar = document.querySelector('#samenstellenklaar')
const afspelen = document.getElementById("samenstellenklaar")


//sausoptie kiezen
function sausKiezen(saus) {
  if (saus == "tomatenknop") {
    tomaten.src = "img/tom.png"
    bbq.src = ""

  } else if (saus == "bbqknop") {
    bbq.src = "img/bbq.png"
    tomaten.src = ""
  }
}


//kaasoptie kiezen
function kaasKiezen(kaas) {
  if (kaas === "parmezaansknop") {
    parmezaans.src = "img/parm.png"
    cheddar.src = ""

  } else if (kaas == "cheddarknop") {
    cheddar.src = "img/ched.png"
    parmezaans.src = ""
  }
}


//topingoptie kiezen
function topingKiezen(topping) {
  if (topping == "peperoniknop") {
    peperoni.src = "img/pep.png"
    ham.src = ""

  } else if (topping == "hamknop") {
    ham.src = "img/ham.png"
    peperoni.src = ""
  }
}


//klik op stel samen knop
// bron: met behulp van chatgpt deze functie toegevoegd https://chatgpt.com/c/8923a46e-3160-47ec-8d8c-5c8a0e943d55
function pizzaKlaar() {
  toppings.forEach(function(topping) {
    topping.src = ""
  })
  pizzaklaar.src = "img/klaar.png"
}


//functies roepen na klik op de buttons 
//bron: chatgpt gevraagd hoe ik de functies moet roepen: https://chatgpt.com/c/921f45da-deef-4c50-8ba8-cec83cc87caf
//bron: om de arrow function anders te schrijven https://www.w3schools.com/js/js_arrow_function.asp
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


//functie roepen na klik op stel samen
samenstellenklaar.addEventListener("click", function() {
  pizzaKlaar()
})



// audio toevoegen met behulp van het volgend video: https://youtu.be/3xlws5og44U?si=GeweRo71W0odgq1p
function speelMuziek (){
  let audio = new Audio ("img/finish.mp3")
  audio.play ()
}
afspelen.addEventListener("click", speelMuziek)


// overige bronnen 
// ingredienten : foto https://www.freepik.com/free-vector/set-pizza-elements_4430118.htm#fromView=search&page=1&position=8&uuid=2b505ad8-0e59-4128-bc8f-3441b81d5003
// pizzadeeg : https://kr.pinterest.com/pin/995788167586073972/
//audio : https://pixabay.com/nl/sound-effects/search/finish/
