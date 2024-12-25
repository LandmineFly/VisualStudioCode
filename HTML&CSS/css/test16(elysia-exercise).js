// window.onload = function () {
// 	var skillsWrapper = document.getElementsByClassName("skills-wrapper")[0];
// 	var skill = document.getElementsByClassName("skill");
// 	var activeReg = /\bactive\b/g;
// 	skill[0].getElementsByTagName("img")[0].style.transform = "scale(1.2)";
// 	skillsWrapper.onclick = function (e) {
// 		if (e.target.className == "skill-img") {
// 			for (var i = 0; i < skill.length; i++) {
// 				skill[i].getElementsByTagName("div")[0].className = skill[i]
// 					.getElementsByTagName("div")[0]
// 					.className.replace(activeReg, "");
// 				skill[i].getElementsByTagName("img")[0].style.transform = "";
// 			}
// 			var img = e.target;
// 			var skillDescript = img.nextElementSibling;
// 			img.style.transform = "scale(1.2)";
// 			skillDescript.className = skillDescript.className + " active";
// 		}
// 	};
// };

window.onload = function () {
	var skillsWrapper = document.getElementsByClassName("skills-wrapper")[0];
	var skill = document.getElementsByClassName("skill");
	skill[0].getElementsByTagName("img")[0].style.transform = "scale(1.2)";
	skillsWrapper.onclick = function (e) {
		if (e.target.className == "skill-img") {
			for (var i = 0; i < skill.length; i++) {
				skill[i].getElementsByTagName("div")[0].classList.remove("active");
				skill[i].getElementsByTagName("img")[0].style.transform = "";
			}
			var img = e.target;
			var skillDescript = img.nextElementSibling;
			img.style.transform = "scale(1.2)";
			skillDescript.classList.add("active");
		}
	};
};