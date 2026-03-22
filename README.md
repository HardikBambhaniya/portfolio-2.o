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
    → Project documentation and setup instructions.
```
