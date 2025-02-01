const animateSections = () => {
    const sections = document.querySelectorAll("section")
    sections.forEach((section, index) => {
      motion.animate(
        section,
        {
          opacity: [0, 1],
          y: [50, 0],
        },
        {
          delay: index * 0.2,
          duration: 0.8,
          ease: "easeOut",
        },
      )
    })
  }
  
  document.addEventListener("DOMContentLoaded", animateSections)
  
  const skillCategories = [
    {
      id: "languages",
      skills: [
        { name: "HTML", icon: "fab fa-html5" },
        { name: "CSS", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Python", icon: "fab fa-python" },
      ],
    },
    {
      id: "frameworks",
      skills: [
        { name: "React", icon: "fab fa-react" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "Django", icon: "fab fa-python" },
        { name: "Flask", icon: "fab fa-python" },
      ],
    },
    {
      id: "tools",
      skills: [
        { name: "Linux", icon: "fab fa-linux" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "GitHub", icon: "fab fa-github" },
        { name: "Docker", icon: "fab fa-docker" },
      ],
    },
  ]
  
  function createSkillElement(skill) {
    const li = document.createElement("li")
    li.className = "group"
    li.innerHTML = `
          <div class="skill-circle">
              <i class="${skill.icon} skill-icon"></i>
          </div>
          <span class="skill-name">${skill.name}</span>
      `
    return li
  }
  
  function populateSkills() {
    skillCategories.forEach((category) => {
      const container = document.getElementById(category.id)
      category.skills.forEach((skill) => {
        container.appendChild(createSkillElement(skill))
      })
    })
  }
  
  document.addEventListener("DOMContentLoaded", populateSkills)
  
  const texts = [
    'console.log("FullStack Developer");',
    'console.log("Web Designer");'
  ];

  let index = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function typeEffect() {
    const speed = isDeleting ? 50 : 100; // Vitesse d'effacement et d'écriture
    const target = document.getElementById("typing-text");

    if (!isDeleting && charIndex <= texts[index].length) {
      currentText = texts[index].substring(0, charIndex++);
    } else if (isDeleting && charIndex >= 0) {
      currentText = texts[index].substring(0, charIndex--);
    }

    target.innerHTML = currentText;

    if (!isDeleting && charIndex === texts[index].length) {
      setTimeout(() => (isDeleting = true), 1000); // Pause avant effacement
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length; // Passe au texte suivant
    }

    setTimeout(typeEffect, speed);
  }

  document.addEventListener("DOMContentLoaded", typeEffect);