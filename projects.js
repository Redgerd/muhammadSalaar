const projects = [
  {
    name: "Superstore Data Warehouse",
    link: "https://github.com/Redgerd/ADW-2017",
    rating: 7,
    description: "Data Warehouse made in teradata ecosystem",
    technologies: ["sql", "etl", "data engineering"],
    imageAlt: "📐",
  },
  {
    name: "This website!",
    link: "https://github.com/Redgerd/muhammadSalaar",
    rating: 10,
    description: "My online resume created with CSS, and JavaScript.",
    technologies: ["css", "javascript"],
    imageAlt: "🌐",
  },
  {
    name: "Scuffed Spotify",
    link: "https://github.com/Redgerd/ScuffeSpotify",
    rating: 3,
    description: "Spotify for Scuffed People",
    technologies: ["MySQL", "Node.js", "flutter", "Ngrok"],
    imageAlt: "📄",
  },
  {
    name: "Real Estate Website",
    link: "https://github.com/hba777/Real-Estate-Website",
    rating: 6,
    description: "Web application for browsing and searching rental properties",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "GCP"],
    imageAlt: "🏠",
  },
  {
    name: "Reddit Post Analysis Workflow",
    link: "https://github.com/hba777/Real-Estate-Website",
    rating: 8,
    description:
      "Real-time data pipeline to ingest, process, and enrich Reddit data",
    technologies: ["PySpark", "Azure Databricks", "SparkSQL"],
    imageAlt: "🔀",
  },
  {
    name: "SmartCampus Surveillance System",
    rating: 10,
    description: "Surveillance  System built ontop of YOLO",
    technologies: ["FastAPI", "Celery", "Redis", "Docker"],
    imageAlt: "📷",
  },
];

const projectList = document.getElementById("projects-list");

// Function to create project list items dynamically
projects.forEach((project) => {
  const listItem = document.createElement("li");
  listItem.className = "project-wrapper";

  const article = document.createElement("article");
  article.className = "card project";

  // Header Section
  const header = document.createElement("header");
  header.className = "repel";

  const divFlex = document.createElement("div");
  divFlex.className = "flex align-center gap--3";

  const projectIcon = document.createElement("div");
  projectIcon.className = "project-icon size-font-xs";
  projectIcon.setAttribute("aria-hidden", "true");

  // Always show the emoji (imageAlt)
  projectIcon.textContent = project.imageAlt;

  const h3 = document.createElement("h3");
  h3.className = "project-name size-font-base";

  const a = document.createElement("a");
  a.href = project.link;
  a.target = "_blank";
  a.rel = "noreferrer noopener";
  a.className = "project-link";
  a.textContent = project.name;

  h3.appendChild(a);

  divFlex.appendChild(projectIcon);
  divFlex.appendChild(h3);

  const rating = document.createElement("p");
  rating.className = "project-rating size-font-sm";
  rating.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
    <span class="screen-reader-only">Rated </span>${project.rating}
    <span class="screen-reader-only"> stars on GitHub</span>
  `;

  header.appendChild(divFlex);
  header.appendChild(rating);

  // Project Description
  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  // Technologies List
  const technologies = document.createElement("ul");
  technologies.className = "project-technologies size-font-sm";
  technologies.setAttribute("aria-label", "Technologies used");

  project.technologies.forEach((tech) => {
    const techItem = document.createElement("li");
    techItem.className = "project-technology";
    techItem.textContent = tech;
    technologies.appendChild(techItem);
  });

  // Append elements to article
  article.appendChild(header);
  article.appendChild(description);
  article.appendChild(technologies);

  // Append article to list item
  listItem.appendChild(article);

  // Append list item to project list
  projectList.appendChild(listItem);
});
