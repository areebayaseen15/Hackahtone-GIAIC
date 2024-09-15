

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
        
        
          <section id="personal details">
       <h2>Personal Details:</h2>
        <ul>
        <li><strong>Phone:</strong> <br>${userDetails.phone}  </li>
        <li><strong>WhatsApp:</strong><br> ${userDetails.whatsapp}</li>
        <li><strong>Email:</strong><br> ${userDetails.email}</li>
 <li><strong>LinkedIn:</strong> <br><a href="${userDetails.linkdin}" target="_blank">${userDetails.linkdin}</a></li>

        </ul>
         
        </section>
      <section id="education">
        <h2>Education:</h2>
       <ul>
        <li><strong>Qualification:</strong> <br>${userDetails.qualifications}</li>
        <li><strong>Courses:</strong> <br> ${userDetails.courses}</li>
       </ul>

       </section>
        <section id="education">
        <h2>Technical Qualification:</h2>
         <ul>
        <li><strong>Courses:</strong> <br> ${userDetails.courses}</li>
       </ul>

       </section>

       <section id="work-experience">
        <h2>Work Experience:</h2>
           ${userDetails.experience}
       </Section>
         <section id="skills">
        <h2>Technical Skills:</h2>
        <ul>
        <li>
 ${userDetails.skills}
        </li>
    </ul>
    </section>
    <button id="skills-section">Toggle Skills Section</button>

      
         <Section>
      <h2>Profession:</h2>
      <ul><li> ${userDetails.profession} </li></ul>
       </Section>
       
       
       
        <Section>
      <h2>Summary:</h2>
      <ul><li>${userDetails.summary}</li></ul>
       </Section>
          </div>
</div>
    `;
}


// Event listener for form submission
const form = document.getElementById("resumeForm") as HTMLFormElement;
form.addEventListener("submit", generateResume);


