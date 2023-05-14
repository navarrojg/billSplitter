const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const error = document.querySelector(".error");
const costInfo = document.querySelector(".cost-info");
const btn = document.querySelector(".count");
const span = document.querySelector(".cost");

const tipFun = () => {
	if (price.value.length == 0 || people.value.length == 0 || tip.value == 0) {
		error.textContent = "Podaj wszystkie dane!!!";
		span.style.display = "none";
	} else {
		error.textContent = "";
		countTip();
	}
};

const countTip = () => {
	result =
		(parseFloat(price.value) +
			parseFloat(price.value) * parseFloat(tip.value)) /
		parseInt(people.value);
	span.textContent = result.toFixed(2);
	costInfo.style.display = "block";
	span.style.display = "inline";
};

btn.addEventListener("click", tipFun);
