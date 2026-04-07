var x = 5
var y = 7
var z = x + y
A = "Hello "
B = "world!"
var C = A + B
console.log(z)
console.log(C)


function sumnPrint(x1, x2) {
    console.log(x1 + x2);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C)
    if (C.length < z) {
        console.log(z)
    }
} else {
    console.log("good job!")
}

var L1 = ["Watermelon","Pineapple","Pear","Banana"];
var L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(x3) {
    for (var i = 0; i < x3.length; i++) { 
        if (x3[i] === "Banana") {
            alert("Found the banana!");
        }
    }
}

///findTheBanana(L1);

function findTheBananapt2(x3) {
    x3.forEach(function(item) { 
        if (item === "Banana") {
            alert("Found the banana!");
        }
    });
}

///findTheBananapt2(L1);

var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var message = "";
    if (x < 5 || x >= 20) {
        message = "Good night!";
    } else if (x < 12) {
        message = "Good morning!";
    } else if (x < 18) {
        message = "Good afternoon!";
    } else {
        message = "Good evening!";
    }
    var el = document.getElementById("greeting");
    if (el) el.innerHTML = message;
}

greeting(hour);


function addYear() {
    var year = new Date().getFullYear();
    var el = document.getElementById("copyYear");
    if (el) el.innerHTML = year;
}


function onPageLoad() {
    console.log("onPageLoad running, path:", window.location.pathname);
    
    var currPage = window.location.pathname.split("/").pop();
    console.log("currPage:", currPage);

    var navLinks = document.querySelectorAll("nav a");
    console.log("navLinks found:", navLinks.length);

    navLinks.forEach(function(link) {
        var linkPage = link.getAttribute("href").split("/").pop();
        console.log("linkPage:", linkPage, "| match:", linkPage === currPage);
        if (linkPage === currPage) {
            link.classList.add("active");
        }
    });
}

onPageLoad();


function showMore() {
    $("#longIntro").show();
    $("#readMore").hide();
    $("#readLess").show();
}

function showLess() {
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
}

if (typeof $ !== 'undefined') {
    $(document).ready(function() {
        $("#readMore").click(showMore);
        $("#readLess").click(showLess);
    });
}



const toggleButton = document.getElementById('toggleButton');
const content = document.getElementById('contentToToggle');

function showForm() {
    const checkoutForm = document.getElementById("checkoutForm");
    const buttons = document.querySelectorAll(".toggleButton"); 
    buttons.forEach(function(button) {
        button.onclick = function() {
            const isHidden = checkoutForm.style.display === "none";
            checkoutForm.style.display = isHidden ? "block" : "none";
        };
    });
}

var hamburgerOpen = document.querySelector('.hamburgerOpen');
var hamburgerClosed = document.querySelector('.hamburgerClosed');

if (hamburgerOpen) {
    hamburgerOpen.addEventListener('click', () => {
        document.querySelector('.mobileMenu').style.display = 'block';
    });
}

if (hamburgerClosed) {
    hamburgerClosed.addEventListener('click', () => {
        document.querySelector('.mobileMenu').style.display = 'none';
    });
}


var mapDiv = document.getElementById('map');

if (mapDiv) {
    var map = L.map('map').setView([40.7794, -73.9632], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);}
