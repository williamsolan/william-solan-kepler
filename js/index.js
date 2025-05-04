// Footer Section

const footer = document.createElement("footer");

const heading = document.createElement("h2");
heading.innerHTML = "William Solan &middot; Web Developer";
footer.appendChild(heading);

const socialList = document.createElement("ul");

const socialLinks = [
    { href: "https://www.linkedin.com/in/william-solan-814408336/", icon: "fab fa-linkedin", label: "LinkedIn" },
    { href: "https://github.com/williamsolan", icon: "fab fa-github", label: "GitHub" },
    { href: "mailto:williamsolan13@gmail.com", icon: "fa fa-envelope", label: "Email" }
];

socialLinks.forEach(link => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.className = "button-3";
    
    const iconSpan = document.createElement("span");
    iconSpan.className = link.icon;
    iconSpan.setAttribute("aria-hidden", "true");

    const labelSpan = document.createElement("span");
    labelSpan.className = "sr-only";
    labelSpan.textContent = link.label;

    anchor.appendChild(iconSpan);
    anchor.appendChild(labelSpan);
    listItem.appendChild(anchor);
    socialList.appendChild(listItem);
});

footer.appendChild(socialList);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
const smallText = document.createElement("small");
smallText.innerHTML = `&copy; ${thisYear} William Solan. All rights reserved.`;
copyright.appendChild(smallText);
footer.appendChild(copyright);

document.body.appendChild(footer);

// Skills Section

const skillsSection = document.createElement("section");
skillsSection.id = "skills";

const skillsDiv = document.createElement("div");

const skillsHeading = document.createElement("h2");
skillsHeading.textContent = "Skills";
skillsDiv.appendChild(skillsHeading);

const skillsData = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Visual Studio Code", icon: "fas fa-code" },
    { name: "GitLab", icon: "fab fa-gitlab" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" },
    { name: "Affinity Designer", icon: "fas fa-paint-brush" }
];

const skillsList = document.createElement("ul");

skillsData.forEach(skill => {
    const skillItem = document.createElement("li");

    const iconSpan = document.createElement("span");
    iconSpan.className = skill.icon;
    iconSpan.setAttribute("aria-hidden", "true");

    skillItem.appendChild(iconSpan);
    skillItem.append(` ${skill.name}`);

    skillsList.appendChild(skillItem);
});

skillsDiv.appendChild(skillsList);
skillsSection.appendChild(skillsDiv);

const experienceDiv = document.createElement("div");

const experienceHeading = document.createElement("h2");
experienceHeading.textContent = "Experience";
experienceDiv.appendChild(experienceHeading);

const experienceList = document.createElement("ul");

const experiences = [
    {
        title: "Student",
        place: "Code the Dream (2025 - Present)",
        details: [
            "Furthering knowledge in HTML, CSS, and JavaScript",
            "Created a functioning JavaScript application."
        ]
    },
    {
        title: "Alumni",
        place: "The Last Mile (2024 - Present)",
        details: [
            "Learned best practices in front-end development.",
            "Developed responsive web applications using HTML, CSS, and JavaScript.",
            "Collaborated with colleagues on various projects to enhance coding skills."
        ]
    }
];

experiences.forEach(exp => {
    const experienceItem = document.createElement("li");
    
    const experienceTitle = document.createElement("strong");
    experienceTitle.textContent = exp.title;
    
    experienceItem.appendChild(experienceTitle);
    experienceItem.innerHTML += ` at ${exp.place}`;
    
    const detailsList = document.createElement("ul");
    
    exp.details.forEach(detail => {
        const detailItem = document.createElement("li");
        detailItem.textContent = detail;
        detailsList.appendChild(detailItem);
    });
    
    experienceItem.appendChild(detailsList);
    experienceList.appendChild(experienceItem);
});

experienceDiv.appendChild(experienceList);
skillsSection.appendChild(experienceDiv);

const sectionImage = document.querySelector(".section-image");
sectionImage.insertAdjacentElement("afterend", skillsSection);