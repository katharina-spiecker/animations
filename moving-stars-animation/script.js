let transformStyles = ["translateX(5px)", "translateX(-5px)", "translateY(5px)", "translateY(-5px)"];
let boxes = document.querySelectorAll(".box");
document.querySelector(".header-grid").addEventListener('mousemove', () => {
    // select a random box
    let rand = Math.floor(Math.random() * boxes.length);
    let box = boxes[rand];
    let randStyle = transformStyles[Math.floor(Math.random() * transformStyles.length)];
    boxes[rand].style = "transform:" + randStyle;
})