

// TypeScript interface to structure user data
interface UserDetails {
    name: string;
    phone: string;
    address: string;
    email: string;
    linkdin: string;
    qualifications: string;
    courses: string;
    skills: string;
    profession: string;
    experience: string;
    profile: string;
    github:string;
    profileImage: string;
}

// Function to handle form submission and generate resume
function generateResume(event: Event) {
    event.preventDefault();


    const userDetails: UserDetails = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        address: (document.getElementById("address") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        linkdin: (document.getElementById("linkdin") as HTMLInputElement).value,
        github: (document.getElementById("github") as HTMLInputElement).value,
        qualifications: (document.getElementById("qualifications") as HTMLSelectElement).value,
        courses: (document.getElementById("courses") as HTMLInputElement).value,
        skills: (document.getElementById("skills") as HTMLInputElement).value,
        profession: (document.getElementById("profession") as HTMLInputElement).value,
        experience: (document.getElementById("experience") as HTMLTextAreaElement).value,
        profile: (document.getElementById("profile") as HTMLTextAreaElement).value,
        profileImage: (document.getElementById("profile-image") as HTMLTextAreaElement).value,
    };

    const resumeDiv = document.getElementById("resume") as HTMLElement;

    // Create HTML structure for the resume
    resumeDiv.innerHTML = `
        <div class="container">
        <!-- sidebar -->
        <div class="sidebar">
            <div class="profile-image">
         <img src="${userDetails.profileImage }" alt="${userDetails.name}">
                </div>
            
            <div class="profile-info">
                <h3>Profile</h3>
                <ul>
                    <p>${userDetails.profile}</p>
                   
                </ul>
              
            </div>

            <div class="contact-info">
                <h3>Contact Me</h3>
                
                <p><i class="fa fa-phone"></i>${userDetails.phone}</p>
                <p><i class="fa fa-envelope"></i>${userDetails.email}</p>
                <p><i class="fa fa-map-marker"></i>${userDetails.linkdin}</p>
                
            </div>
            <div class="social-info">
                <h3>Professional Accounts</h3>
                <p><strong>Github Account:</strong><br><a href="">${userDetails.github}</a> </p>
                <p><strong>LinkedIn Profile:</strong><br><a href="">${userDetails.linkdin}</a> </p>
            </div>
        </div>
        <!-- Main section -->
            <div class="main">
                <div class="name">
            <h1>${userDetails.name}</h1>
            <p>${userDetails.profession}</p>

                </div>
                <div class="education">
                <h2>Education</h2>
                    <ul>
                <li>${userDetails.qualifications}</li>
              
            </ul>
                </div>

                <div class="Technical-courses">
                    <h2>Technical Courses</h2>
                    <ul>
                        <li>${userDetails.courses}</li>
                    </ul>
                
                </div>

                <div class="skills" id="skills">
                    <h2>Technical Skills</h2>
                    <ul>
                        <li> ${userDetails.skills}</li>
                       
                    </ul>
                </div>

                <div class="experiece">
                    <h2>Work Experience</h2>
                    <ul>
                     <li> ${userDetails.experience}</li></ul>
                   
                    
                </div>

                <div class="Reference">
                    <h2>Reference</h2>
                    <p>Will be furnished upon request.</p>
                </div>
            </div>
        
    </div>
    `;
}


// Event listener for form submission
const form = document.getElementById("resumeForm") as HTMLFormElement;
form.addEventListener("submit", generateResume);


//Toggle Effect
const skillsSection  = document.getElementById('skills') as HTMLElement 
const toggleButton = document.getElementById("skills-section")as HTMLButtonElement 
toggleButton.addEventListener("click" , ()=>{
 if(skillsSection.style.display === "none"){
    skillsSection.style.display = "block";
 }else{
    skillsSection.style.display = "none";
 }
})
