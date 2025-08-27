// Dynamic Skills (تقدري تضيفي/تشلي Skills من هنا)
const skills = [
  { name: "Python", icon: "fab fa-python" },
  { name: "C#", icon: "fas fa-code" },
  { name: "OOP", icon: "fas fa-project-diagram" },
  { name: "HTML", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },
  { name: "PHP", icon: "fab fa-php" },
  { name: "SQL Server", icon: "fas fa-database" }
];

// حط الـ Skills جوه الـ container
const container = document.getElementById("skills-container");
skills.forEach((skill, index) => {
  const div = document.createElement("div");
  div.className = "skill-card";
  div.setAttribute("data-aos", "zoom-in");
  div.setAttribute("data-aos-delay", index * 100);
  div.innerHTML = `<i class="${skill.icon}"></i><span>${skill.name}</span>`;
  container.appendChild(div);
});

// Social Icons Animation
document.querySelectorAll(".social-icon").forEach(icon => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.2)";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)";
  });
});

// Year Auto Update
document.getElementById("year").textContent = new Date().getFullYear();
