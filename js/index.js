// =====================
// Footer Section
// =====================
// Creates a footer with my name and social media links.

const footer = document.createElement("footer");

const heading = document.createElement("h2");
heading.innerHTML = "William Solan &middot; Web Developer";
footer.appendChild(heading);

const socialList = document.createElement("ul");

// Defines my social media links dynamically.

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/william-solan-814408336/",
    icon: "fab fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/williamsolan",
    icon: "fab fa-github",
    label: "GitHub",
  },
  {
    href: "mailto:williamsolan13@gmail.com",
    icon: "fa fa-envelope",
    label: "Email",
  },
];

// Loops through the social links and generates list items.

socialLinks.forEach((link) => {
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

// Appends the social list to the footer.

footer.appendChild(socialList);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
const smallText = document.createElement("small");
smallText.innerHTML = `&copy; ${thisYear} William Solan. All rights reserved.`;
copyright.appendChild(smallText);
footer.appendChild(copyright);

document.body.appendChild(footer);

// =====================
// Skills Section
// =====================
// Creates a section for skills and experience.

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
  { name: "Affinity Designer", icon: "fas fa-paint-brush" },
];

const skillsList = document.createElement("ul");

skillsData.forEach((skill) => {
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
      "Created functioning JavaScript applications.",
    ],
  },
  {
    title: "Alumni",
    place: "The Last Mile (2024 - Present)",
    details: [
      "Learned best practices in front-end development.",
      "Developed responsive web applications using HTML, CSS, and JavaScript.",
      "Collaborated with colleagues on various projects to enhance coding skills.",
    ],
  },
];

experiences.forEach((exp) => {
  const experienceItem = document.createElement("li");

  const experienceTitle = document.createElement("strong");
  experienceTitle.textContent = exp.title;

  experienceItem.appendChild(experienceTitle);
  experienceItem.innerHTML += ` at ${exp.place}`;

  const detailsList = document.createElement("ul");

  exp.details.forEach((detail) => {
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

// Custom Repo Data for Titles, Images, & Descriptions

const customRepoData = {
  "Mystic-Oracle": {
    title: "Mystic Oracle",
    image: "images/mysticoracle-ss.png",
    description:
      "Mystic Oraacle is an evolving online sancturary the brings my passion for tarot reading to a global audience, offering insight and connection to those seeking guidance. Designed with inclusiity and accessibility at its core, the platform ensures that anyone, regardless of location, can engage with the mystical world of tarot. While still in its early stages, Mystic Oracle embodies my vision of creating an immersive, user-friendly experience where individuals can explore tarot’s wisdom in a personal and meaningful way. Soon, visitors will be able to receive readings directly through the site, unlocking new paths of self-discovery and enlightenment.",
  },
  "william-solan-kepler": {
    title: "My Portfolio",
    image: "images/portfolio.png",
    description:
      "My Portfolio is a personal showcase of my web development journey, featuring projects that highlight my skills in HTML, CSS, and JavaScript. The site is designed to be visually appealing and user-friendly, with a clean layout that emphasizes my work. Each project is presented with a brief description and a link to view the code on GitHub. The portfolio also includes sections for my skills, experience, and contact information, making it easy for potential employers or collaborators to learn more about me and my work.",
  },
  "tlm-website-redesign": {
    title: "TLM Website Redesign",
    image: "images/tlm-redesign.png",
    description:
      "The TLM Website Redesign is a streamlined and visually compelling front-end project that enhances user experience while staying true to The Last Mile’s brand identity. Using HTML, CSS, Bootstrap, and Font Awesome, the site ensures clean structuring, responsive styling, dynamic interactivity, and intuitive iconography for seamless navigation. A carefully selected color palette, featuring gold, black, and electric blue, reinforces the brand’s energy, while an original Affinity Designer-crafted logo symbolizes determination and progress. The result is an accessible, engaging website where users can explore TLM’s mission, available courses, and direct contact options with ease.",
  },
  "william-solan-open-api": {
    title: "My Weather App",
    image: "images/open-api.png",
    description:
      "My Weather API Project is a dynamic web application that provides real-time weather information for any location worldwide. Built with HTML, CSS, and JavaScript, the site fetches data from a public weather API to deliver current conditions, forecasts, and more. The user-friendly interface allows visitors to easily search for their desired location and view detailed weather reports. This project showcases my ability to integrate APIs into web applications, enhancing user experience with interactive and informative content.",
  },
};

// GitHub API Integration for Projects Section

async function fetchGitHubRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/williamsolan/repos"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const repos = await response.json();

    const projectsSection = document.getElementById("projects");

    repos.forEach((repo, index) => {
      const projectArticle = document.createElement("article");
      if (index % 2 !== 0) projectArticle.classList.add("reverse");

      const textBlock = document.createElement("div");
      textBlock.classList.add("text");

      const headingDiv = document.createElement("div");
      headingDiv.classList.add("heading", "text");

      const projectTitle = document.createElement("h3");
      projectTitle.textContent = customRepoData[repo.name]?.title || repo.name; // Uses custom title if available
      headingDiv.appendChild(projectTitle);

      const projectImage = document.createElement("img");
      projectImage.src =
        customRepoData[repo.name]?.image || "images/placeholder.png"; // Targets specific repos

      const description = document.createElement("p");
      description.classList.add("transparent");
      description.textContent =
        customRepoData[repo.name]?.description || "No description available."; // Uses custom text

      const repoLink = document.createElement("a");
      repoLink.href = repo.html_url;
      repoLink.target = "_blank";
      repoLink.textContent = "View Repo";
      repoLink.classList.add("repo-link");

      textBlock.appendChild(description);
      textBlock.appendChild(repoLink);

      projectArticle.appendChild(headingDiv);
      projectArticle.appendChild(projectImage);
      projectArticle.appendChild(textBlock);

      projectsSection.appendChild(projectArticle);
    });
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
}

fetchGitHubRepos();

// Leave a Message Section
const messageForm = document.forms.leave_message;

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log(userName, userEmail, userMessage);

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.classList.add("message-item"); // Adds styling class

    // Create a wrapper div for message text & button
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-content"); 

    // Username link
    const usernameLink = document.createElement("a");
    usernameLink.href = `mailto:${userEmail}`;
    usernameLink.textContent = userName;
    usernameLink.classList.add("username-link");

    // Message text
    const messageText = document.createElement("span");
    messageText.textContent = userMessage;
    messageText.classList.add("message-text");

    // Remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";
    removeButton.classList.add("button-2");
    removeButton.addEventListener("click", () => newMessage.remove());

    // Append elements properly
    messageContainer.appendChild(messageText); // Keeps text separate
    messageContainer.appendChild(removeButton); // Aligns to the right
    newMessage.appendChild(usernameLink);
    newMessage.appendChild(messageContainer);
    messageList.appendChild(newMessage);

    messageForm.reset();
});