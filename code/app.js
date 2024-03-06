const logOut = document.querySelector("#btn-logOut");
const taskWindow = document.querySelector(".task-add-window");
const calendaryNav = document.querySelector(".calendaryChose");
const addTask = document.querySelector(".addTask-nav");
const exitBtn = document.querySelector(".exit-btn");
////////  calendar days///////
const pon = document.querySelector(".pon");
const wt = document.querySelector(".wt");
const sr = document.querySelector(".sr");
const czw = document.querySelector(".czw");
const pt = document.querySelector(".pt");
const so = document.querySelector(".so");
const ndz = document.querySelector(".ndz");
//////////////////////////////////////////////////////
const dayExit = document.querySelector("#exit-daySelect");
const selectDay = document.querySelector(".selectDay");
const calendarTaskAdd = document.querySelector("#calendar-select");

///////////////SElect DAY WINDOW/////////
const poniedzialek = document.querySelector("#poniedzialek");
const wtorek = document.querySelector("#wtorek");
const sroda = document.querySelector("#sroda");
const czwartek = document.querySelector("#czwartek");
const piatek = document.querySelector("#piatek");
const sobota = document.querySelector("#sobota");
const niedziela = document.querySelector("#niedziela");
////////// TASK WINDOW ////////////
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



// Funkcja do dodawania boxa
//  function dodajBox(rubryka) {
//     var box = document.createElement("div");
//     box.className = "box";
//     box.textContent = "Nowy box";
//     document.querySelector("." + rubryka).appendChild(box);
// }

// // Funkcja do usuwania boxa
// function usunBox(rubryka) {
//     var boxes = document.querySelector("." + rubryka).querySelectorAll(".box");
//     if (boxes.length > 0) {
//         var lastBox = boxes[boxes.length - 1];
//         lastBox.parentNode.removeChild(lastBox);
//     }
// }

// // Przykładowe użycie
// dodajBox("pon");
// dodajBox("pon");
// usunBox("pon");
