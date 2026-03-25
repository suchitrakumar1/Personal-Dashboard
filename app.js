
let para = document.querySelector(".section3 i");
let btn = document.querySelector(".refresh");
const greetingEl = document.querySelector(".box1 span");
const dateEl = document.querySelector(".box1 p");
const timeEl = document.querySelector(".section2 > span:last-child");

function updateDashboardDateTime() {
    let username = prompt("Enter Your Name");
    while (username === "") {
        username = prompt("Wtf! Bro Enter Your Name 😕");
    }
    console.log(username);
    if (username == null) {
        username = "";
    }
    const now = new Date();
    const hour = now.getHours();
    let greeting = "Evening";
    if (hour >= 5 && hour < 12) {
        greeting = "Morning";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Afternoon";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Evsening";
    } else {
        greeting = "Night";
    }

    greetingEl.innerText = `Good ${greeting} ${username}👋🏻`;

    dateEl.textContent = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    timeEl.textContent = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
}
const randomQuote = async () => {
    let url = "https://motivational-spark-api.vercel.app/api/quotes/random";
    let response = await fetch(url);
    let data = await response.json();
    let quote = data.quote;
    para.innerText = `" ${quote} "`;
    console.log("f");
}
btn.addEventListener("click", () => {
    randomQuote();
})
window.addEventListener("load", () => {
    updateDashboardDateTime();
    randomQuote();
})

