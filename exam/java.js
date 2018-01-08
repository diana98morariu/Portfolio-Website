var slideIndex1 = 0;
showSlides1();

function showSlides1() {
    var i;
    var slides1 = document.getElementsByClassName("mySlides1");
    for(i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    slideIndex1 ++;
    if(slideIndex1 > slides1.length) {slideIndex1 = 1}
    slides1[slideIndex1 -1].style.display = "block";
    setTimeout(showSlides1, 2000);
}

var slideIndex2 = 0;
showSlides();

function showSlides() {
    var j;
    var slides2 = document.getElementsByClassName("mySlides2");
    for(j = 0; j < slides2.length; j++) {
        slides2[j].style.display = "none";
    }
    slideIndex2 ++;
    if(slideIndex2 > slides2.length) {slideIndex2 = 1}
    slides2[slideIndex2 -1].style.display = "block";
    setTimeout(showSlides, 2000);
}

var slideIndex3 = 0;
showSlides3();

function showSlides3() {
    var j;
    var slides3 = document.getElementsByClassName("mySlides3");
    for(j = 0; j < slides3.length; j++) {
        slides3[j].style.display = "none";
    }
    slideIndex3 ++;
    if(slideIndex3 > slides3.length) {slideIndex3 = 1}
    slides3[slideIndex3 -1].style.display = "block";
    setTimeout(showSlides3, 2000);
}
var slideIndex4 = 0;
showSlides4();

function showSlides4() {
    var x;
    var slides4 = document.getElementsByClassName("mySlides4");
    for(x = 0; x < slides4.length; x++) {
        slides4[x].style.display = "none";
    }
    slideIndex4 ++;
    if(slideIndex4 > slides4.length) {slideIndex4 = 1}
    slides4[slideIndex4 -1].style.display = "block";
    setTimeout(showSlides4, 2000);
}




















