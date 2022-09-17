// when scrolling over sections, background changes
const sections = document.querySelectorAll(".section");
const sectionHeight = sections[0].offsetHeight;

document.addEventListener("scroll", () => {
    if (window.scrollY < sectionHeight) {
        let newColor = sections[0].dataset.color;
        changeColor(newColor);
    } else if (window.scrollY < sectionHeight * 2) {
        let newColor = sections[1].dataset.color;
        changeColor(newColor);
    } else if (window.scrollY < sectionHeight * 3) {
        let newColor = sections[2].dataset.color;
        changeColor(newColor);
    } else if (window.scrollY < sectionHeight * 4) {
        let newColor = sections[3].dataset.color;
        changeColor(newColor);
    }
});

function changeColor(hexCode) {
    document.body.style = "background-color:" + hexCode;
}
