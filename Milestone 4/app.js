var resumeForm = document.getElementById('resumeForm');
var resumeSection = document.getElementById('resume');
var editButton = document.getElementById('editButton');
var isEditing = false;
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!isEditing) {
        // Generate resume
        var resumeData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            whatsapp: document.getElementById('whatsapp').value,
            email: document.getElementById('email').value,
            linkdin: document.getElementById('linkdin').value,
            qualifications: document.getElementById('qualifications').value,
            courses: document.getElementById('courses').value,
            skills: document.getElementById('skills').value,
            profession: document.getElementById('profession').value,
            experience: document.getElementById('experience').value,
            summary: document.getElementById('summary').value,
        };
        displayResume(resumeData);
    }
});
function displayResume(data) {
    var resumeHTML = "\n      <div class=\"maindetails\">\n        <h2>Personal Details</h2>\n        <p><strong>Name:</strong> <span>".concat(data.name, "</span></p>\n        <p><strong>Contact Number:</strong> <span>").concat(data.phone, "</span></p>\n        <p><strong>WhatsApp:</strong> <span>").concat(data.whatsapp, "</span></p>\n        <p><strong>Email:</strong> <span>").concat(data.email, "</span></p>\n        <p><strong>LinkedIn:</strong> <span>").concat(data.linkdin, "</span></p>\n      </div>\n  \n      <div class=\"other-details\">\n        <h2>Education</h2>\n        <p><strong>Qualification:</strong> <span>").concat(data.qualifications, "</span></p>\n        <p><strong>Courses:</strong> <span>").concat(data.courses, "</span></p>\n  \n        <h2>Skills</h2>\n        <p><strong>Your Skills:</strong> <span>").concat(data.skills, "</span></p>\n  \n        <h2>Profession</h2>\n        <p><strong>Profession:</strong> <span>").concat(data.profession, "</span></p>\n  \n        <h2>Work Experience</h2>\n        <p><strong>Experience:</strong> <span>").concat(data.experience, "</span></p>\n  \n        <h2>Summary</h2>\n        <p><strong>Summary:</strong> <span>").concat(data.summary, "</span></p>\n      </div>\n    ");
    resumeSection.innerHTML = resumeHTML;
    toggleFormElements(true); // Disable form elements when the resume is displayed
}
function toggleFormElements(disable) {
    var inputs = resumeForm.querySelectorAll('input, select, textarea');
    inputs.forEach(function (input) {
        input.disabled = disable;
    });
}
function saveChanges() {
    toggleFormElements(true); // Disable form elements after saving
    editButton.textContent = 'Edit';
    isEditing = false;
}
editButton.addEventListener('click', function () {
    isEditing = !isEditing;
    if (isEditing) {
        // Enable editing mode
        toggleFormElements(false);
        editButton.textContent = 'Save';
    }
    else {
        // Save the changes
        resumeForm.dispatchEvent(new Event('submit'));
        saveChanges();
    }
});
function displayResume(data) {
    var resumeHTML = "\n      <div class=\"maindetails\">\n        <h2>Personal Details</h2>\n        <p><strong>Name:</strong> <span>".concat(data.name, "</span></p>\n        <p><strong>Contact Number:</strong> <span>").concat(data.phone, "</span></p>\n        <p><strong>WhatsApp:</strong> <span>").concat(data.whatsapp, "</span></p>\n        <p><strong>Email:</strong> <span>").concat(data.email, "</span></p>\n        <p><strong>LinkedIn:</strong> <span>").concat(data.linkdin, "</span></p>\n      </div>\n  \n      <div class=\"other-details\">\n        <h2>Education</h2>\n        <p><strong>Qualification:</strong> <span>").concat(data.qualifications, "</span></p>\n        <p><strong>Courses:</strong> <span>").concat(data.courses, "</span></p>\n  \n        <h2>Skills</h2>\n        <p><strong>Your Skills:</strong> <span>").concat(data.skills, "</span></p>\n  \n        <h2>Profession</h2>\n        <p><strong>Profession:</strong> <span>").concat(data.profession, "</span></p>\n  \n        <h2>Work Experience</h2>\n        <p><strong>Experience:</strong> <span>").concat(data.experience, "</span></p>\n  \n        <h2>Summary</h2>\n        <p><strong>Summary:</strong> <span>").concat(data.summary, "</span></p>\n      </div>\n    ");
    resumeSection.classList.add('generated-resume');
    resumeSection.innerHTML = resumeHTML;
    toggleFormElements(true); // Disable form elements when the resume is displayed
}
