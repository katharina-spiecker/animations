// when scrolling over sections, background changes
let sections = document.querySelectorAll(".section");
let sectionHeight = sections[0].offsetHeight;

// height

// console.log(height);
// on scroll, check section you are in
document.addEventListener("scroll", () => {
    if(window.scrollY < sectionHeight){
        let newColor = sections[0].dataset.color;
        changeColor(newColor);
    } else if(window.scrollY < sectionHeight * 2){
        let newColor = sections[1].dataset.color;
        changeColor(newColor);
    } else if(window.scrollY < sectionHeight * 3){
        let newColor = sections[2].dataset.color;
        changeColor(newColor);
    } else if(window.scrollY < sectionHeight * 4){
        let newColor = sections[3].dataset.color;
        changeColor(newColor);
    }
})

function changeColor(hexCode){
    document.body.style = "background-color:" + hexCode;
}