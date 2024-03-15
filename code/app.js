
const logOut = document.querySelector("#btn-logOut");
const taskWindow = document.querySelector(".task-add-window");
const calendaryNav = document.querySelector(".calendaryChose");
const addTask = document.querySelector(".addTask-nav");
const exitBtn = document.querySelector(".exit-btn");

const dayExit = document.querySelector("#exit-daySelect");
const selectDay = document.querySelector(".selectDay");
const calendarTaskAdd = document.querySelector("#calendar-select");
const dateBtn = document.querySelector("#dateBtn");
const searchAddTask = document.querySelector("#searchAddTask");

///////////////SElect DAY WINDOW/////////
const d1 = document.querySelector("#poniedzialek")
const d2 = document.querySelector("#wtorek")
const d3 = document.querySelector("#sroda")
const d4 = document.querySelector("#czwartek")
const d5 = document.querySelector("#piatek")
const d6 = document.querySelector("#sobota")
const d7 = document.querySelector("#niedziela")

const pon = document.querySelector(".pon")
const wt = document.querySelector(".wt")
const sr = document.querySelector(".sr")
const czw = document.querySelector(".czw")
const pt = document.querySelector(".pt")
const so = document.querySelector(".so")
const ndz = document.querySelector(".ndz")


/////////////////// INPUT VALUE TASK 
const inputAddTask = document.querySelector("#searchAddTask")
const inputDate = document.querySelector("#dateAddTask")
const inputTime = document.querySelector("#timeAddTask")

pon.addEventListener("click",function (){
	taskWindow.style.display = "flex";
	
})
/////////// NEW TASK VALUE/////////
const readyTask = document.querySelectorAll(".new-task")
const dataTask = document.querySelector(".date-task")

const timeTask = document.querySelector(".time-task")
///////////////////////////////////
const dateAddTask = document.querySelector("#dateAddTask")
const timeAddTask = document.querySelector("#timeAddTask")

// dateBtn.addEventListener("click",function(){
// 	let inputValue = inputAddTask.value
// 	let dateValue = dateAddTask.value
// 	let timeValue = timeAddTask.value

// 	let newTask = document.createElement("div");
// 	let newData = document.createElement("div")
// 	newTask.classList.add("new-task");
// 	newTask.textContent = inputValue;
// 	newData.classList.add("date-task")
// 	newData.textContent = dateValue
// 	pon.appendChild(newTask,newData);
// 	readyTask.style.display = "flex"
// 	console.log(inputValue)
// })
dateBtn.addEventListener("click", function showTask() {
    let inputValue = inputAddTask.value;
    let dateValue = dateAddTask.value;
    let timeValue = timeAddTask.value;
    const readyTask = document.querySelector(".days-time.pon");
    const newTask = document.createElement("div");
    newTask.classList.add("new-task");
    const newParagraph = document.createElement('p');
    newParagraph.textContent = inputValue;
    const newData = document.createElement("div");
    newData.classList.add("date-task");
    newData.textContent = dateValue;
    const newTime = document.createElement("div");
    newTime.classList.add("time-task");
    newTime.textContent = timeValue;
    const navTask = document.createElement("div");
    navTask.classList.add("nav-task");
    const exitTask = document.createElement("div");
    exitTask.classList.add("exit-task");
    exitTask.textContent = "x";
    exitTask.addEventListener("click", function() {   
        newTask.remove(); 
    });
    const mainTask = document.createElement("div"); 
    mainTask.classList.add("main-task");
    newTask.appendChild(navTask);
    navTask.appendChild(exitTask); 
    navTask.appendChild(newData);
    newTask.appendChild(mainTask);
    mainTask.appendChild(newParagraph);
    newTask.appendChild(newTime);
    readyTask.appendChild(newTask);
});
////////// TASK WINDOW SHOW    ////////////
exitBtn.addEventListener("click", function () {
	taskWindow.style.display = "none";
});
addTask.addEventListener("click", function () {
	taskWindow.style.display = "flex";
});
dayExit.addEventListener("click", function () {
	selectDay.style.display = "none";
});
calendarTaskAdd.addEventListener("click", function () {
	selectDay.style.display = "flex";
});


const exitApp = document.querySelector(".exitRing")
const appContainer = document.querySelector(".application")
exitApp.addEventListener("click",function(){
	appContainer.style.display = "none";
	appBlankHl.style.display = "flex";

})
const appLoginBtn = document.querySelector("#blankAppLoginBtn");
const appBlankHl = document.querySelector(".blankAppClouse")

appLoginBtn.addEventListener("click",function(){
	const loginToApp = document.querySelector("#loginToApp");
	const passwordToApp = document.querySelector("#passwordToApp")
	
	
	if(loginToApp.value === "test@gmail.pl" && passwordToApp.value === "test"){
		appBlankHl.style.display = "none";
		appContainer.style.display = "flex"
	}

})

const btnLogOut = document.querySelector("#btn-logOut");
btnLogOut.addEventListener("click",function(){
	appContainer.style.display = "none";
	appBlankHl.style.display = "flex";
})

////////////////////ADD TASK FOR DAYS /////////////
const daysSelect = document.querySelectorAll(
	".selectDay .days-section .days-select"
);

document.addEventListener("DOMContentLoaded", function () {
	daysSelect.forEach(function (day) {
		day.addEventListener("click", function () {
			
			if (day.style.border === "none" || day.style.border === "") {
				day.style.border = "solid 2px white";
			} else {
				day.style.border = "none";
			}
		});
	});
});

dateBtn.addEventListener("click", function () {
	if (taskWindow.style.display === "flex" || taskWindow.style.display === "") {
		taskWindow.style.display = "none";
		

	}
});





































 