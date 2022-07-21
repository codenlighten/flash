if (localStorage.name) {
	let name = localStorage.name;
	document.getElementById("hello").innerHTML = `Hello ${name}!`;
	document.getElementById("login").style.display = "none";
}

const strobe = () => {
	let flash = true;
	let number = document.getElementById("number").value;
	setInterval(() => {
		flash = !flash;
		document.body.style.backgroundColor = flash ? "blue" : "purple";
	}, parseInt(number) * 100);
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