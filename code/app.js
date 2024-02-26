let isOpen = false;

const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.querySelector(".hamburger-slide-menu");

const buttonTryIt = document.querySelector(".button-64")

const register = document.querySelector(".register-container");
const slideRegister = document.querySelector("#slide-button-register");
const registerExit = document.querySelector(".exit");
const registerLogin = document.querySelector("#btn-login");

const loginExit = document.querySelector(".login_exit");
const menuLoginBtn = document.querySelector("#slide-button-login");
const loginContainer = document.querySelector(".login-container");
const newRegister = document.querySelector("#login-container-register")

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
slideRegister.addEventListener("click",function(showRegister){
     if(register.style.top === "-50em" || register.style.top === ""){
          register.style.top = "10em"
     }
     if(loginContainer.style.top = "10em"){
          loginContainer.style.top = "-50em"
          register.style.top = "10em"

     }
});
registerExit.addEventListener("click",function(){
     register.style.top = "-50em"
});

menuLoginBtn.addEventListener("click",function(){
     console.log("click")
     if(loginContainer.style.top === "-50em" || loginContainer.style.top === ""){
          loginContainer.style.top = "10em"
     }

     if( register.style.top === "10em"){
          register.style.top = "-50em"
          loginContainer.style.top = "10em"
     }

});
loginExit.addEventListener("click",function(){
     loginContainer.style.top = "-50em"
});
registerLogin.addEventListener("click",function(){
     register.style.top = "-50em"
     loginContainer.style.top = "10em"
})
newRegister.addEventListener("click",function(){
     loginContainer.style.top = "-50em"
     register.style.top = "10em"
})
buttonTryIt.addEventListener("click",function(){
     register.style.top = "10em"
})