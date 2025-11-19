const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        navToggle.classList.toggle("open", isOpen);
        navToggle.setAttribute("aria-expanded", isOpen);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("open");
            navToggle.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        }
    });
}

const counters = document.querySelectorAll(".counter");
const counterSection = document.querySelector(".counter-section");
let started = false; // لمنع تكرار الأنيماشن

function startCount() {
    counters.forEach(counter => {
        let target = +counter.getAttribute("data-target");
        let count = 0;

        let step = target / 100;

        let update = setInterval(() => {
            count += step;
            counter.textContent = Math.floor(count);

            if (count >= target) {
                counter.textContent = target;
                clearInterval(update);
            }
        }, 20);
    });
}

if (counterSection && counters.length) {
    window.addEventListener("scroll", () => {
        let sectionTop = counterSection.offsetTop;
        let scrollPos = window.scrollY + window.innerHeight;

        if (scrollPos > sectionTop && !started) {
            startCount();
            started = true;
        }
    });
}

const whatsappForm = document.getElementById("whatsappForm");

if (whatsappForm) {
    whatsappForm.addEventListener("submit", function(e){
        e.preventDefault();

        // رقم الواتساب المطلوب إرسال الرسالة له
        let phoneNumber = "201557857739"; 

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let message = document.getElementById("message").value;

        let finalMessage =
            `الاسم: ${name}%0A` +
            `رقم الهاتف: ${phone}%0A` +
            `الرسالة: ${message}`;

        // فتح واتساب بالرابط
        let url = `https://wa.me/${phoneNumber}?text=${finalMessage}`;

        window.open(url, "_blank");
    });
}