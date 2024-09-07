var _a;
(_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('Skills').value;
    var resumeContent = "\n        <h4>Name:</h4>\n        <p>".concat(name, "</p>\n        <h4>Email:</h4>\n        <p>").concat(email, "</p>\n        <h4>Phone:</h4>\n        <p> ").concat(phone, "</p>\n        <h4>Experience:</h4>\n        <p>").concat(experience, "</p>\n        <h4>Education:</h4>\n        <p>").concat(education, "</p>\n        <h4>Skills:</h4>\n        <p>").concat(skills, "</p>\n\n        ");
    var resumeOutput = document.getElementById('resume-output');
    var resumeContentDiv = document.getElementById('resume-content');
    resumeContentDiv.innerHTML = resumeContent;
    resumeOutput.style.display = 'block';
});
