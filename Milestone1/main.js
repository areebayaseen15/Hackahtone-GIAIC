var skillsSection = document.getElementById('skills');
var toggleButton = document.getElementById("skills-section");
toggleButton.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
});
