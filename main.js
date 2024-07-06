var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    setTimeout(function () {
        document.getElementById(tabname).classList.add("active-tab");
    }, 300); // Delay adding the active-tab class to allow fade-in transition
}

// ========================

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// ========================

const text = document.querySelector(".animasi");
const textload = () => {
    setTimeout(() => {
        text.textContent = "Web Developer.";
    }, 0);
    setTimeout(() => {
        text.textContent = "Graphic Designer.";
    }, 5000);
};

textload();
setInterval(textload, 10000);

// ==========================
