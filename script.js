// Typing Effect
let text = "B.Tech CSE (Data Science) | Java & Web Developer";
let i = 0;

function typeRole() {
    if (i < text.length) {
        document.getElementById("role").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeRole, 80);
    }
}
typeRole();

// Contact Info
function showContact() {
    alert("Email: abhinayareddyvatti17@gmail.com\nPhone: +91 6302996118");
}

// Glow Effect
function toggleGlow() {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.classList.toggle("glow");
    });
}

// Reveal Sections
let sections = document.querySelectorAll(".hidden");
let index = 0;

function reveal() {
    if (index < sections.length) {
        sections[index].classList.add("show");
        index++;
        setTimeout(reveal, 300);
    }
}
reveal();
