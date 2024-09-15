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
    resumeDiv.innerHTML = "\n        <h2>".concat(userDetails.name, "</h2>\n        \n        \n          <section id=\"personal details\">\n       <h2>Personal Details:</h2>\n        <ul>\n        <li><strong>Phone:</strong> <br>").concat(userDetails.phone, "  </li>\n        <li><strong>WhatsApp:</strong><br> ").concat(userDetails.whatsapp, "</li>\n        <li><strong>Email:</strong><br> ").concat(userDetails.email, "</li>\n <li><strong>LinkedIn:</strong> <br><a href=\"").concat(userDetails.linkdin, "\" target=\"_blank\">").concat(userDetails.linkdin, "</a></li>\n\n        </ul>\n         \n        </section>\n      <section id=\"education\">\n        <h2>Education:</h2>\n       <ul>\n        <li><strong>Qualification:</strong> <br>").concat(userDetails.qualifications, "</li>\n        <li><strong>Courses:</strong> <br> ").concat(userDetails.courses, "</li>\n       </ul>\n\n       </section>\n        <section id=\"education\">\n        <h2>Technical Qualification:</h2>\n         <ul>\n        <li><strong>Courses:</strong> <br> ").concat(userDetails.courses, "</li>\n       </ul>\n\n       </section>\n\n       <section id=\"work-experience\">\n        <h2>Work Experience:</h2>\n           ").concat(userDetails.experience, "\n       </Section>\n         <section id=\"skills\">\n        <h2>Technical Skills:</h2>\n        <ul>\n        <li>\n ").concat(userDetails.skills, "\n        </li>\n    </ul>\n    </section>\n    <button id=\"skills-section\">Toggle Skills Section</button>\n\n      \n         <Section>\n      <h1>Profession:</h1>\n      <ul><li> ").concat(userDetails.profession, " </li></ul>\n       </Section>\n       \n       \n       \n        <Section>\n      <h1>Summary:</h1>\n      <ul><li>").concat(userDetails.summary, "</li></ul>\n       </Section>\n          </div>\n</div>\n    ");
}
// Event listener for form submission
var form = document.getElementById("resumeForm");
form.addEventListener("submit", generateResume);
