/* =========================
MOBILE MENU
========================= */

function initializeNavigation() {

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


// Stop if navigation doesn't exist

if (!menuButton || !navLinks) {
    console.error("Navigation not found.");
    return;
}


menuButton.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");


        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );


        menuButton.textContent =
            isOpen ? "✕" : "☰";

    }
);


/* =========================
   CLOSE MENU AFTER CLICK
========================== */

const navigationLinks =
    navLinks.querySelectorAll("a");


navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "active"
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuButton.textContent =
                    "☰";

            }
        );

    }
);


}

/* =========================
CURRENT YEAR
========================= */

function initializeCurrentYear() {

const year =
    document.getElementById("year");


if (!year) return;


year.textContent =
    new Date().getFullYear();


}

/* =========================
CONTACT FORM
========================= */

function initializeContactForm() {

const contactForm =
    document.getElementById("contactForm");


if (!contactForm) return;


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            this.elements["name"]
                .value
                .trim();


        const email =
            this.elements["email"]
                .value
                .trim();


        const subject =
            this.elements["subject"]
                .value
                .trim();


        const message =
            this.elements["message"]
                .value
                .trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            alert(
                "Please complete all fields."
            );

            return;

        }


        alert(
            "Thank you, " +
            name +
            "! Your message has been prepared successfully."
        );


        this.reset();

    }
);


}