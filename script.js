document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function showTimelineItems() {
        timelineItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 50) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showTimelineItems);
    showTimelineItems(); // Run once on page load
});

document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll(".skill");

    function showSkills() {
        skillItems.forEach((skill) => {
            const skillTop = skill.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (skillTop < windowHeight - 50) {
                skill.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showSkills);
    showSkills(); // Run once on page load
});

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    function showProjects() {
        projectCards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 50) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showProjects);
    showProjects(); // Run once on page load
});