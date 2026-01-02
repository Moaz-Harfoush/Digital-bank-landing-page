const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");
const ul = document.querySelector(".navbar ul");
const btnOfHeader = document.querySelector("header .request");
const hamburger = document.querySelector(".hamburger");

// Clone the existing <ul> element and all its children
let div = ul.cloneNode(true);

// Add Tailwind CSS classes to style the cloned menu
div.classList.add(
    "w-[80%]",
    "h-fit",
    "bg-white",
    "rounded-[10px]",
    "absolute",
    "top-[120%]",
    "left-[10%]",
    "flex-col",
    "p-5",
    "text-center",
    "transition-all",
    "duration-500",
    "ease-in-out",
    "opacity-0",
    "translate-x-[100px]",
    "shadow-[0_0_30px_rgb(35,38,56)]"
);
// Toggle mobile menu on hamburger click
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    div.classList.toggle("opacity-0");
    div.classList.toggle("translate-x-[100px]");
});
// Add the mobile menu to the header
header.appendChild(div);

// Function to handle screen resizing
function handleResize() {
    const isMobile = window.innerWidth < 768;

    navbar.classList.toggle("hidden", isMobile);
    navbar.classList.toggle("block", !isMobile);

    btnOfHeader.classList.toggle("hidden", isMobile);
    btnOfHeader.classList.toggle("block", !isMobile);

    hamburger.classList.toggle("hidden", !isMobile);
    hamburger.classList.toggle("block", isMobile);

    if (!isMobile && header.contains(div)) {
        div.classList.add("opacity-0", "translate-x-[100px]");
        div.classList.remove("opacity-100", "translate-x-0");
        hamburger.classList.remove("open");
    }

}


handleResize(); // Run on page load
window.addEventListener("resize", handleResize); // Re-run when window is resized



// Create the "Back to Top" button
let btnToTop = document.createElement("button");
btnToTop.textContent = "↑";
btnToTop.classList.add(
    "w-[50px]",
    "h-[50px]",
    "rounded-[10px]",
    "bg-gradient-to-t", "from-primary-vivid-cyan", "to-primary-bright-green",
    "fixed",
    "bottom-[3%]",
    "right-[3%]",
    "text-white",
    "hidden",
);

// Show or hide the button when scrolling
window.onscroll = function () {
    if (window.scrollY >= 500) {
        btnToTop.classList.remove("hidden");
    } else {
        btnToTop.classList.add("hidden");
    }
}

// Scroll smoothly to the top when the button is clicked
btnToTop.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    })
}

// Add the button to the page
document.body.appendChild(btnToTop);


// Create the scroll progress bar
let heightBar = document.createElement("div");

heightBar.classList.add(
    "w-[10px]",
    "bg-gradient-to-t", "from-primary-vivid-cyan", "to-primary-bright-green",
    "fixed",
    "right-0",
    "top-0",
    "z-[11]",
    "rounded-[30px]",
);
heightBar.style.height = window.scrollY + "px";
document.body.appendChild(heightBar);

// Animate the bar's colors continuously
let hue = 0; 
function animateColor() {
    hue = (hue + 2) % 360;
    heightBar.style.filter = `hue-rotate(${hue}deg)`;
    requestAnimationFrame(animateColor);
}
animateColor();

// Update bar height based on scroll percentage
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = (scrollTop / docHeight) * 100;
    heightBar.style.height = scrollPercent + "%";
});



