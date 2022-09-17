const headline = document.querySelector("#headline");
const splitHeadline = headline.innerText.split("");
let newHeadline = "";
splitHeadline.forEach((char) => {
    newHeadline += "<span>" + char + "</span>";
});

headline.innerHTML = newHeadline;
let index = 0;
const spans = headline.querySelectorAll("span");
const timer = setInterval(onTick, 50);
function onTick() {
    spans[index].classList.add("fade");
    index++;
    if (index === spans.length) {
        clearInterval(timer);
    }
}
