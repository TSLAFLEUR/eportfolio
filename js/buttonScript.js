//Scroll functions
//Designed gradually scroll towards specified location
function scrollAbout(){
	document.getElementById('aboutMe').scrollIntoView({behavior: 'smooth',block: 'center'});
}

function scrollShowcase(){
	document.getElementById('showcase').scrollIntoView({behavior: 'smooth',block: 'center'});
}

function scrollContact(){
	document.getElementById('contactMe').scrollIntoView({behavior: 'smooth',block: 'center'});
}

function scrollTop(){
	document.getElementById('top').scrollIntoView({behavior: 'smooth',block: 'center'});
}

function scrollFoot(){
	document.getElementById('foot').scrollIntoView({behavior: 'smooth',block: 'center'});
}

//Slideshow functions
let slideIndex =1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex+=n);
}

function currentSlide(n){
	showSlides(slideIndex=n);
}

function showSlides(n){
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n>slides.length){slideIndex=1}
	if (n<1){slideIndex=slides.length}
	for (i=0;i<slides.length;i++){
		slides[i].style.display="none";
	}
	for (i=0;i<dots.length;i++){
		dots[i].className=dots[i].className.replace(" active", "");	
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}