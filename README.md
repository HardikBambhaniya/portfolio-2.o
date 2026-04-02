🌟 Portfolio-2.0

A modern, responsive personal portfolio website built with React and Vite, showcasing projects, skills, education, and experience.
Includes a resume download feature, interactive sections, and reusable components for easy scalability.

📌 Table of Contents
Demo
Features
Tech Stack
Project Structure
Installation & Setup
Usage
Future Improvements
Author
🎬 Demo

Live Dem : https://www.hardikk.site/

✅ Features
Responsive design for mobile, tablet, and desktop
Hero section with profile image and introduction
About Me, Education, Experience, Projects, and Skills sections
Resume download directly from the website
Modular React component structure for scalability
Easy to update data through centralized data files (projects.js, skills.js)
🛠️ Tech Stack
Layer	Technology
Frontend	React, JSX
Styling	CSS
Build Tool	Vite
Deployment	Vercel (recommended)
Assets	Images (avif), SVG icons



## 📁 Project Structure

```
Portfolio-2.0/
│
├── public/ 📂
│   └── resume.pdf 📄
│       → Publicly accessible resume file used for download in the portfolio.
│
├── src/ 📂
│
│   ├── assets/ 📂
│   │   ├── Projectimg/ 🖼️
│   │   │   → Contains images used for showcasing projects.
│   │   │
│   │   ├── svgs/ 🎨
│   │   │   → SVG icons and vector graphics used across the website.
│   │   │
│   │   └── profilepic.avif 👤
│   │       → Profile image used in the hero/about section.
│   │
│   ├── components/ 📂
│   │   ├── common/ 🧩
│   │   │   → Reusable shared components used in multiple sections.
│   │   │
│   │   ├── project/ 🚀
│   │   │   → Components specifically related to displaying projects.
│   │   │
│   │   ├── ui/ 🎛️
│   │   │   → Small UI elements like buttons, cards, badges, etc.
│   │   │
│   │   ├── Navbar.jsx 🧭
│   │   │   → Navigation bar component for site navigation.
│   │   │
│   │   ├── Preview.jsx 👀
│   │   │   → Component used to preview project or content.
│   │   │
│   │   └── SkillBadge.jsx 🏷️
│   │       → Displays individual skill badges in the skills section.
│   │
│   ├── data/ 📂
│   │   ├── projects.js 📊
│   │   │   → Stores project information such as title, description, links, etc.
│   │   │
│   │   ├── projectstatus.js 📈
│   │   │   → Contains project status details (completed, ongoing, etc.).
│   │   │
│   │   └── skills.js 💡
│   │       → List of skills displayed in the portfolio.
│   │
│   ├── lib/ 📂
│   │   └── utils.js 🛠️
│   │       → Utility/helper functions used across the project.
│   │
│   ├── page/ 📂
│   │   └── LandingPage.jsx 🏠
│   │       → Main landing page that combines all portfolio sections.
│   │
│   ├── sections/ 📂
│   │   ├── Aboutme.jsx 🙋
│   │   │   → About me section of the portfolio.
│   │   │
│   │   ├── Education.jsx 🎓
│   │   │   → Displays educational background.
│   │   │
│   │   ├── Experience.jsx 💼
│   │   │   → Work or internship experience section.
│   │   │
│   │   ├── Hero.jsx 🌟
│   │   │   → Hero section shown at the top of the portfolio.
│   │   │
│   │   ├── Projects.jsx 🚀
│   │   │   → Section that displays portfolio projects.
│   │   │
│   │   └── SkillContainer.jsx 🧠
│   │       → Container component that organizes and displays skills.
│   │
│   ├── App.jsx ⚛️
│   │   → Root React component that handles routing and layout.
│   │
│   ├── index.css 🎨
│   │   → Global styles for the application.
│   │
│   └── main.jsx 🚀
│       → Entry point of the React application.
│
└── README.md 📘


This project follows a modular React architecture, separating reusable components, data, and sections for better maintainability.

⚙️ Installation & Setup
Clone the repository:
git clone https://github.com/<your-username>/Portfolio-2.0.git
Navigate into the project folder:
cd Portfolio-2.0
Install dependencies:
npm install
Run the development server:
npm run dev
Open in browser:
http://localhost:5173
🚀 Usage
Update project details in src/data/projects.js
Add skills in src/data/skills.js
Add new sections in src/sections if needed
Replace profile picture in src/assets/profilepic.avif
Replace or add project images in src/assets/Projectimg
🔮 Future Improvements
Add dark/light mode toggle
Add animations using Framer Motion
Add contact form integration
Optimize Lighthouse performance for faster loading
Add multi-language support
👤 Author

Hardik Bambhaniya

GitHub: [Your GitHub Profile]
Email: hardikb181@gmail.com
Portfolio: [Your Live Portfolio Link]






    → Project documentation and setup instructions.
```
