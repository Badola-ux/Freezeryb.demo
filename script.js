// Mobile Menu Toggle (Side Menu)
var sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

// Tab Navigation for Skills, Experience, Education Sections
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    // Remove active link and active tab classes from all
    for (let link of tabLinks) {
        link.classList.remove("active-link");
    }
    for (let content of tabContents) {
        content.classList.remove("active-tab");
    }

    // Add active link and active tab classes for the clicked tab
    document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// Optional: Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Google Form Submission (Consolidated)
const scriptURL = 'https://script.google.com/macros/s/AKfycbyTtwpq5DdGRA8yBIjRfZ4o9zNl4INVR47RsA4h-STyOfW88MwuXc3hfsdHjGmLtEwU/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();

    // Show loading message or visual feedback while sending data
    msg.innerHTML = "Sending your message...";

    // Send form data to Google Sheets
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";  // Success message
            setTimeout(() => msg.innerHTML = "", 5000);  // Clear message after 5 seconds
            form.reset();  // Reset form after submission
        })
        .catch(error => {
            msg.innerHTML = "Oops! Something went wrong.";  // Error message
            console.error('Error!', error.message);
        });
});

// Scroll Reveal Effect (basic)
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
});

// Services Hover Animation (Optional - already styled in CSS, but added for JS interaction)
const serviceItems = document.querySelectorAll('.services-list div');

serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
        item.style.background = '#ff004f';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.background = '#262626';
    });
});

// Portfolio Hover Animation for Image and Layer
const workItems = document.querySelectorAll('.work');

workItems.forEach(work => {
    work.addEventListener('mouseenter', () => {
        const img = work.querySelector('img');
        const layer = work.querySelector('.layer');
        img.style.transform = 'scale(1.1)';
        layer.style.height = '100%';
    });

    work.addEventListener('mouseleave', () => {
        const img = work.querySelector('img');
        const layer = work.querySelector('.layer');
        img.style.transform = 'scale(1)';
        layer.style.height = '0';
    });
});

// "See More" Button Smooth Scroll (Optional, if you want to scroll to portfolio section when clicked)
const seeMoreButton = document.querySelector('.btn');
seeMoreButton.addEventListener('click', () => {
    document.getElementById('portfolio').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Social Icons Hover Effect
const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-5px)';
        icon.style.color = '#ff004f';  // Hover color change
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0)';
        icon.style.color = '#ababab';  // Reset to original color
    });
});

// Smooth Scroll for "Download CV" Button (optional)
const downloadCVButton = document.querySelector('.btn2');

downloadCVButton.addEventListener('click', (e) => {
    // You can add logic to track the download click here if necessary.
    window.location.href = downloadCVButton.href;  // Directing to the file
});

// Optional: Handle form field validation (built-in HTML5 'required' is used, but you can extend validation logic here)
form.addEventListener('submit', (e) => {
    const name = form.querySelector('[name="Name"]').value;
    const email = form.querySelector('[name="Email"]').value;
    const message = form.querySelector('[name="Message"]').value;

    if (!name || !email || !message) {
        e.preventDefault();
        msg.innerHTML = "Please fill all fields!";
        msg.style.color = "#e74c3c";  // Error message color
        setTimeout(() => msg.innerHTML = "", 5000);
    }
});
