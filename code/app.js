let isOpen = false;

const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.querySelector(".hamburger-slide-menu")

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
