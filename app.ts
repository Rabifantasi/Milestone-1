document.getElementById('generate-resume')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;

    const resumeContent = `
        <h4>Name:</h4>
        <p>${name}</p>
        <h4>Email:</h4>
        <p>${email}</p>
        <h4>Phone:</h4>
        <p> ${phone}</p>
        <h4>Experience:</h4>
        <p>${experience}</p>
        <h4>Education:</h4>
        <p>${education}</p>
        <h4>Skills:</h4>
        <p>${skills}</p>

        `;

    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
    const resumeContentDiv = document.getElementById('resume-content') as HTMLDivElement;

    resumeContentDiv.innerHTML = resumeContent;
    resumeOutput.style.display = 'block';
});
