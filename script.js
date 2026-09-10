console.log("JavaScript is working!");



/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");


    if (navLinks.classList.contains("active")) {

        menuToggle.textContent = "✕";

    } else {

        menuToggle.textContent = "☰";

    }

});




/* =========================
   SCROLL REVEAL
========================= */

const reveals =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    });


reveals.forEach(function (section) {

    observer.observe(section);

});



/* =========================
   STATISTICS COUNTER
========================= */

const statNumbers =
    document.querySelectorAll(".stat-number");


const statsObserver =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const number =
                    entry.target;

                const target =
                    Number(number.dataset.target);

                let current =
                    0;


                const increment =
                    target / 100;


                const counter =
                    setInterval(function () {

                        current += increment;


                        if (current >= target) {

                            current = target;

                            clearInterval(counter);

                        }


                        number.textContent =
                            Math.floor(current);

                    }, 20);


                statsObserver.unobserve(
                    entry.target
                );

            }

        });

    });


statNumbers.forEach(function (number) {

    statsObserver.observe(number);

});

/* =========================
   FAQ ACCORDION
========================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const faqItem =
            question.parentElement;

        faqItem.classList.toggle("active");

    });

});

/* =========================
   DARK MODE
========================= */

const themeToggle =
    document.querySelector(".theme-toggle");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

}


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});