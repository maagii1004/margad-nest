const starsContainer = document.querySelector(".stars");
const numStars = 100; // Number of stars to create

// Function to create a single star
const createStar = () => {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    starsContainer.appendChild(star);
};

// Function to create multiple stars
const addStars = () => {
    for (let i = 0; i < numStars; i++) {
        createStar();
    }
};

// Call `addStars` function
addStars();

// Function to toggle the color of the home screen
const homeScreen = document.querySelector(".home-screen");
const navLinks = document.querySelectorAll(".home-screen nav a");

// Function to toggle the home screen colors
const toggleHomeScreenColor = () => {
    const isBlackBackground = homeScreen.style.backgroundColor === "black";

    if (isBlackBackground) {
        homeScreen.style.backgroundColor = "white";
        homeScreen.style.color = "black";
        navLinks.forEach(link => {
            link.style.borderColor = "black"; 
            link.style.color = "black"; 
        });
    } else {
        homeScreen.style.backgroundColor = "black";
        homeScreen.style.color = "white";
        navLinks.forEach(link => {
            link.style.borderColor = "white"; 
            link.style.color = "white"; 
        });
    }
};

// Toggle color every 10 seconds
setInterval(toggleHomeScreenColor, 4000);
toggleHomeScreenColor();
