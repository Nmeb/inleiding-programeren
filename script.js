console.log("Test Test")


//alle buttons in html selecteren 
let tomaten = document.querySelector("#tomaten")
let bbq = document.querySelector("#bbq")
let parmezaans = document.querySelector("#parmezaans")
let cheddar = document.querySelector("#cheddar")
let peperoni = document.querySelector("#peperoni")
let ham = document.querySelector("#ham")
let pizzaklaar = document.querySelector("#pizzaklaar")


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


let toppings = [tomaten, bbq, parmezaans, cheddar, peperoni, ham]
let tomatenKnop = document.querySelector('#tomatenknop')
let bbqKnop = document.querySelector('#bbqknop')
let parmezaansKnop = document.querySelector('#parmezaansknop')
let cheddarKnop = document.querySelector('#cheddarknop')
let peperoniKnop = document.querySelector('#peperoniknop')
let hamKnop = document.querySelector('#hamknop')
let allDoneBtn = document.querySelector('#samenstellenklaar')
let afspelen = document.getElementById("samenstellenklaar")

//samenstellen klaar klikken
function pizzaKlaar() {
  toppings.forEach(function(topping) {
    topping.src = ""
  });
  pizzaklaar.src = "img/klaar.png"
}


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


allDoneBtn.addEventListener("click", function() {
  pizzaKlaar()
})


// audio toevoegen met behulp van het volgend video: https://youtu.be/3xlws5og44U?si=GeweRo71W0odgq1p
function speelMuziek (){
  let audio = new Audio ("img/finish.mp3")
  audio.play ()
}
afspelen.addEventListener("click", speelMuziek)

// de bronnen 
// foto's : foto https://www.freepik.com/free-vector/set-pizza-elements_4430118.htm#fromView=search&page=1&position=8&uuid=2b505ad8-0e59-4128-bc8f-3441b81d5003
// audio : https://pixabay.com/nl/sound-effects/search/finish/
