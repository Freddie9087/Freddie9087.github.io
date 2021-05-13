// make nav bar links highlight div is in view
var home = document.getElementById("home");
var about = document.getElementById("about");
var social = document.getElementById("social");

// 650  1440 1800

function highLight() {
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");
    var link4 = document.getElementById("link4");
    var scrollPos = window.scrollY;

    if (scrollPos < 650 ) {
        link1.classList.add("hover")
        link2.classList.remove("hover")
        link3.classList.remove("hover")
        link4.classList.remove("hover")
        
    } 
    if (scrollPos > 650) {
        link2.classList.add("hover")
        link1.classList.remove("hover")
        link3.classList.remove("hover")
        link4.classList.remove("hover")
        
    }
    if (scrollPos > 2200) {
        link3.classList.add("hover")
        link2.classList.remove("hover") 
        link1.classList.remove("hover") 
        link4.classList.remove("hover") 
    }

    if (scrollPos > 2840) {
        link3.classList.remove("hover")
        link4.classList.add("hover")
        
    }

    //   console.log(scrollPos);
}

function cardSlider() {
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");
    var card3 = document.getElementById("card3");
    var value = window.scrollY;
//  @ 1351 stop runing card/value code or idk


    if (value < 2250 && innerWidth >= 1024) {
    card1.style.bottom = value - 10000 * 0.2 + "px";
    card2.style.bottom = value - 10000 * 0.2 + "px";
    card3.style.bottom = value - 10000 * 0.2 + "px";
    card1.style.transition = "0.8s";
    card2.style.transition = "0.8s";
    card3.style.transition = "0.8s";
    }
}


window.addEventListener("scroll", highLight);
 window.addEventListener("scroll", cardSlider);