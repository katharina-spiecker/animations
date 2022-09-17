let headline = document.querySelector('#headline');
let splitHeadline = headline.innerText.split('');
let newHeadline = '';
splitHeadline.forEach(char => {
	newHeadline += '<span>' + char + '</span>';
});

headline.innerHTML = newHeadline;
index = 0;
const spans = headline.querySelectorAll('span');
let timer = setInterval(onTick, 50);
function onTick(){
	spans[index].classList.add('fade');
	index++;
	if(index === spans.length){
		complete();
	}
}

function complete(){
	clearInterval(timer);
}
