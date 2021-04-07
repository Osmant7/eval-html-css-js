
let images = [
    "background2.jpg",
    "background.jpg"
];

let changeImg = document.querySelector("header");
let i = 0;

setInterval(function(){
    changeImg.style.backgroundImage = "url("+ images[i] + ")";
    i = i + 1;
    if(i == images.length) {
        i = 0;
    }
},5000);

// changeImg.style.backgroundImage = "url('background2.jpg')"


