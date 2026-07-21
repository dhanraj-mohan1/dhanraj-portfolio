new Typed("#typing", {
    strings: [
        "Digital Marketing Expert",
        "SEO Analyst",
        "Technical SEO Specialist",
        "Content Writer",
        "Meta Ads",
        "Google Ads",
        "Freelancer",
        "HTML & CSS"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1200,
    loop: true,
    showCursor: true,
    cursorChar: "|"
});
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";

    }

});
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
window.addEventListener("load", function () {

    document.getElementById("preloader").style.display = "none";

});
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_he02azg",
        "template_y2ge2vv",
        this
    )
        .then(function () {
            alert("✅ Message Sent Successfully!");
            document.getElementById("contact-form").reset();
        })
        .catch(function (error) {
            alert("❌ Failed to send message!");
            console.log(error);
        });
});