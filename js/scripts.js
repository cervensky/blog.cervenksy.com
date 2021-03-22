function toggle() {
	var x = document.getElementById("nav");
	if (x.className === "nav") {
		x.className += " responsive";
		document.getElementById("icon").innerHTML = "close";
	}
	else {
		x.className = "nav";
		document.getElementById("icon").innerHTML = "menu";
	}
}

function mouseScrolled() {

	var x = document.querySelector("a.hide") !== null;
	if (x) {
		document.getElementById("toTopBtn").addEventListener("animationend", () => {
			var x = document.getElementById("toTopBtn");
			if (x.className === "material-icons hide") {
				x.style.display = "none";
			}
		});
	}

	var x = document.getElementById("toTopBtn");
	var y = window.scrollY;
	if (y > 240) {
		x.style.display = "block";
		x.className = "material-icons show";
	}
	else {
		x.className = "material-icons hide";
	}
}

window.addEventListener("scroll", mouseScrolled);