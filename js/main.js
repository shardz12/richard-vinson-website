const components = [
"navigation",
"hero",
"about",
"skills",
"projects",
"experience",
"contact",
"footer"
];

async function loadComponents() {

for (const component of components) {

    const container =
        document.getElementById(component);

    if (!container) continue;


    try {

        const response = await fetch(
            `components/${component}.html`
        );

        if (!response.ok) {
            throw new Error(
                `Failed to load ${component}.html`
            );
        }

        container.innerHTML =
            await response.text();

    } catch (error) {

        console.error(error);

    }

}


/*
    IMPORTANT:

    All HTML components are now loaded.

    Now we can safely run script.js.
*/

initializeWebsite();


}

function initializeWebsite() {

// Run the website functionality
// after all components exist.

if (typeof initializeNavigation === "function") {
    initializeNavigation();
}

if (typeof initializeCurrentYear === "function") {
    initializeCurrentYear();
}

if (typeof initializeContactForm === "function") {
    initializeContactForm();
}


}

loadComponents();