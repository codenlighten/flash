if (localStorage.name) {
	let name = localStorage.name;
	document.getElementById("hello").innerHTML = `Hello ${name}!`;
	document.getElementById("login").style.display = "none";
}
var interval;
const strobe = () => {
	let flash = true;

	let number = document.getElementById("number").value;
	interval = setInterval(() => {
		flash = !flash;

		document.body.style.backgroundImage = flash
			? "linear-gradient(180deg, green, orange, blue,yellow, red,purple,black)"
			: "linear-gradient(90deg,blue, red, green,brown,gold,white, yellow,black,purple)";
	}, parseInt(number) * 144);
};

const stopStrobe = () => {
	clearInterval(interval);
};

const submit = () => {
	let name = document.getElementById("name").value;
	localStorage.setItem("name", name);
	document.getElementById("hello").innerHTML = `Hello ${name}!`;
	name.innerHTML = "";
	document.getElementById("login").style.display = "none";
};

const clearMe = () => {
	console.log("clear");
	localStorage.clear();
	location.reload();
};
