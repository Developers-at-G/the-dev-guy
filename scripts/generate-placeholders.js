const fs = require('fs');
const path = require('path');

// Create the projects directory if it doesn't exist
const projectsDir = path.join(__dirname, '../public/images/projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Create placeholder images
const projects = [
  'portfolio',
  'ecommerce',
  'taskmanager',
  'aichat'
];

projects.forEach(project => {
  const svgContent = `
    <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#f3f4f6"/>
      <text x="400" y="200" font-family="Arial" font-size="24" fill="#4b5563" text-anchor="middle">
        ${project.toUpperCase()} Project Image
      </text>
    </svg>
  `;
  
  fs.writeFileSync(path.join(projectsDir, `${project}.svg`), svgContent);
}); 