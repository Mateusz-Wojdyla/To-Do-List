let isOpen = false;

const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.querySelector(".hamburger-slide-menu")
const login = document.querySelector(".login-container")
const slideRegister = document.querySelector("#slide-button-register")
const registerExit = document.querySelector(".exit")

function renderHamburger(){
	hamburger.className = isOpen ? "open":"close";
    
	
}
function toggleHamburger(){
    
	isOpen = !isOpen
	renderHamburger()
    
}


hamburger.addEventListener("click",function(){
    toggleHamburger();
   if(hamburgerMenu.style.top === "-80em" || hamburgerMenu.style.top === ""){
        hamburgerMenu.style.top = "8em"
   }else{
    hamburgerMenu.style.top = "-80em"
   }
	

});


slideRegister.addEventListener("click",function(){
     if(login.style.top === "-50em" || login.style.top === ""){
          login.style.top = "10em"
     }
})

registerExit.addEventListener("click",function(){
     login.style.top = "-50em"
})