const targetText = document.querySelector(".typewriter");
const splitTargetText = targetText.innerText.split("");
let newTargetText = "";
splitTargetText.forEach((character) => {
    newTargetText += "<span>" + character + "</span>";
});

targetText.innerHTML = newTargetText;
let index = 0;
const spans = targetText.querySelectorAll("span");
const timer = setInterval(onTick, 250);

function onTick() {
    spans[index].style = "display:inline-block";
    index++;
    if (index === spans.length) {
        clearInterval(timer);
    }
}
