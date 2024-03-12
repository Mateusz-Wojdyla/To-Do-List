
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
const poniedzialek = document.querySelector("#poniedzialek");
const wtorek = document.querySelector("#wtorek");
const sroda = document.querySelector("#sroda");
const czwartek = document.querySelector("#czwartek");
const piatek = document.querySelector("#piatek");
const sobota = document.querySelector("#sobota");
const niedziela = document.querySelector("#niedziela");
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
	appBlankHl.style.display = "none";
	appContainer.style.display = "flex"
})

////////////////////ADD TASK FOR DAYS /////////////
const daysSelect = document.querySelectorAll(
	".selectDay .days-section .days-select"
);

document.addEventListener("DOMContentLoaded", function () {
	daysSelect.forEach(function (day) {
		day.addEventListener("click", function () {
			console.log("click");
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
		addNewTask;

	}
});



function addNewTask(){
	let inputValue = document.getElementById("searchAddTask").Value;

	let newTask = document.createElement("div");

	newTask.classList.add("main-task");

	newTask.textContent = inputValue;
	let taskList = document.querySelector(".ndz");

	taskList.appendChild(newTask);
}
































 