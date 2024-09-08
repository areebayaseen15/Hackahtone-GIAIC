

// TypeScript interface to structure user data
interface UserDetails {
    name: string;
    phone: string;
    whatsapp: string;
    email: string;
    linkdin: string;
    qualifications: string;
    courses: string;
    skills: string;
    profession: string;
    experience: string;
    summary: string;
}

// Function to handle form submission and generate resume
function generateResume(event: Event) {
    event.preventDefault();


    const userDetails: UserDetails = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        whatsapp: (document.getElementById("whatsapp") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        linkdin: (document.getElementById("linkdin") as HTMLInputElement).value,
        qualifications: (document.getElementById("qualifications") as HTMLSelectElement).value,
        courses: (document.getElementById("courses") as HTMLInputElement).value,
        skills: (document.getElementById("skills") as HTMLInputElement).value,
        profession: (document.getElementById("profession") as HTMLInputElement).value,
        experience: (document.getElementById("experience") as HTMLTextAreaElement).value,
        summary: (document.getElementById("summary") as HTMLTextAreaElement).value,
    };

    const resumeDiv = document.getElementById("resume") as HTMLElement;

    // Create HTML structure for the resume
    resumeDiv.innerHTML = `
        <h2>${userDetails.name}</h2>
        <p><strong>Phone:</strong> ${userDetails.phone}</p>
        <p><strong>WhatsApp:</strong> ${userDetails.whatsapp}</p>
        <p><strong>Email:</strong> ${userDetails.email}</p>
        <p><strong>LinkedIn:</strong> <a href="${userDetails.linkdin}" target="_blank">${userDetails.linkdin}</a></p>
        <p><strong>Qualification:</strong> ${userDetails.qualifications}</p>
        <p><strong>Courses:</strong> ${userDetails.courses}</p>
        <p><strong>Skills:</strong> ${userDetails.skills}</p>
        <p><strong>Profession:</strong> ${userDetails.profession}</p>
        <p><strong>Experience:</strong> ${userDetails.experience}</p>
        <p><strong>Summary:</strong> ${userDetails.summary}</p>
    `;
}


// Event listener for form submission
const form = document.getElementById("resumeForm") as HTMLFormElement;
form.addEventListener("submit", generateResume);


