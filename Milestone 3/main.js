// Function to handle form submission and generate resume
function generateResume(event) {
    event.preventDefault();
    var userDetails = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        whatsapp: document.getElementById("whatsapp").value,
        email: document.getElementById("email").value,
        linkdin: document.getElementById("linkdin").value,
        qualifications: document.getElementById("qualifications").value,
        courses: document.getElementById("courses").value,
        skills: document.getElementById("skills").value,
        profession: document.getElementById("profession").value,
        experience: document.getElementById("experience").value,
        summary: document.getElementById("summary").value,
    };
    var resumeDiv = document.getElementById("resume");
    // Create HTML structure for the resume
    resumeDiv.innerHTML = "\n        <h2>".concat(userDetails.name, "</h2>\n        <p><strong>Phone:</strong> ").concat(userDetails.phone, "</p>\n        <p><strong>WhatsApp:</strong> ").concat(userDetails.whatsapp, "</p>\n        <p><strong>Email:</strong> ").concat(userDetails.email, "</p>\n        <p><strong>LinkedIn:</strong> <a href=\"").concat(userDetails.linkdin, "\" target=\"_blank\">").concat(userDetails.linkdin, "</a></p>\n        <p><strong>Qualification:</strong> ").concat(userDetails.qualifications, "</p>\n        <p><strong>Courses:</strong> ").concat(userDetails.courses, "</p>\n        <p><strong>Skills:</strong> ").concat(userDetails.skills, "</p>\n        <p><strong>Profession:</strong> ").concat(userDetails.profession, "</p>\n        <p><strong>Experience:</strong> ").concat(userDetails.experience, "</p>\n        <p><strong>Summary:</strong> ").concat(userDetails.summary, "</p>\n    ");
    resumeDiv.className = "body resumeForm .sections ";
}
// Event listener for form submission
var form = document.getElementById("resumeForm");
form.addEventListener("submit", generateResume);
