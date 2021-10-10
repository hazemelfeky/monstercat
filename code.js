const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const exit = document.getElementById("exit");

burger.onclick = () => {
  nav.classList.add("open")
}

exit.onclick = () => {
  nav.classList.remove("open")
}

document.addEventListener('click', function(event) {
  // clicked out the nav or click on th burger
    var isClickInsideElement = nav.contains(event.target) || burger.contains(event.target);
    if (!isClickInsideElement) {
      nav.classList.remove("open")
    }
});


const hasSubmenu = document.getElementsByClassName("has-submenu")
for(let i=0; i<hasSubmenu.length; i++){
  hasSubmenu[i].onclick = () => {
    hasSubmenu[i].classList.toggle("active");
    hasSubmenu[i].parentElement.nextElementSibling.classList.toggle("active");
  }
}

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}


// IntersectionObserver

const navBar = document.querySelector(".header-bar")
const dummyDiv = document.querySelector(".dummi--div")
const navOptions = {};
const navObserver = new IntersectionObserver( (entries, navObserver) => {
  entries.forEach( entry => {
    // console.log(entry.isIntersecting);
    if( !entry.isIntersecting ){
      navBar.classList.add("active")
    }else{
      navBar.classList.remove("active")
    }
    
  })
}, navOptions)

navObserver.observe(dummyDiv)