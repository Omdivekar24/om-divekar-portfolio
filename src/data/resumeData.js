export const resumeData = {
  personal: {
    name: "OM DIVEKAR",
    title: "Full Stack Developer & AI Engineer",
    subtitles: [
      "Full Stack Developer",
      "AI Engineer",
      "Cloud Architect",
      "Problem Solver"
    ],
    email: "omdivekar270@gmail.com",
    phone: "+91-9834879429",
    location: "Pune, Maharashtra, India",
    linkedin: "https://www.linkedin.com/in/om-divekar-4047a8275",
    github: "https://github.com/omdivekar",
    driveLink: "https://drive.google.com/drive/folders/1P4ujPH2rIeLarZVWYy94mhDG-8o8M9jO?usp=sharing",
    summary: "Final-year Computer Engineering student with demonstrated expertise in backend development, MERN stack, Python Django, and AI systems. Passionate about building enterprise-grade applications, optimizing data pipelines, and creating intuitive digital experiences.",
    shortBio: "I build intelligent software using MERN, AI, cloud technologies, and modern web experiences. Passionate about creating products that solve real-world problems through scalable engineering and thoughtful design."
  },
  
  stats: [
    { label: "CGPA", value: "7.92", suffix: "/10" },
    { label: "Graduation", value: "2026", suffix: "" },
    { label: "API Speedup", value: "90", suffix: "%" },
    { label: "DSA Solved", value: "100", suffix: "+" }
  ],

  skills: [
    // Frontend
    { name: "React.js", category: "Frontend", level: 92, icon: "Code2" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: 90, icon: "FileCode" },
    { name: "HTML5 / CSS3", category: "Frontend", level: 95, icon: "Layout" },
    { name: "TailwindCSS", category: "Frontend", level: 88, icon: "Palette" },
    
    // Backend
    { name: "Node.js", category: "Backend", level: 90, icon: "Server" },
    { name: "Express.js", category: "Backend", level: 88, icon: "Cpu" },
    { name: "Python", category: "Backend", level: 85, icon: "Terminal" },
    { name: "Django", category: "Backend", level: 82, icon: "Layers" },
    { name: "RESTful APIs", category: "Backend", level: 94, icon: "Network" },
    { name: "C++ / Java", category: "Backend", level: 80, icon: "Code" },

    // Database
    { name: "MongoDB", category: "Database", level: 90, icon: "Database" },
    { name: "MySQL", category: "Database", level: 85, icon: "Table" },

    // AI & Data
    { name: "AI & ML Integration", category: "AI", level: 84, icon: "Brain" },
    { name: "Medical Report AI", category: "AI", level: 88, icon: "Activity" },
    { name: "Data Analytics & Cleaning", category: "AI", level: 82, icon: "BarChart3" },

    // Cloud & Tools
    { name: "AWS (EC2, S3)", category: "Cloud & Tools", level: 82, icon: "Cloud" },
    { name: "Git & GitHub", category: "Cloud & Tools", level: 90, icon: "GitBranch" },
    { name: "Postman", category: "Cloud & Tools", level: 92, icon: "Send" },
    { name: "VS Code / Jupyter", category: "Cloud & Tools", level: 95, icon: "Monitor" }
  ],

  projects: [
    {
      id: "gymhub-ecommerce",
      title: "GYMHUB E-Commerce Platform",
      badge: "MERN Stack",
      tagline: "Full-Stack Fitness Apparel & Equipment E-Commerce Ecosystem",
      description: "GYMHUB is a modern full-stack e-commerce platform built for fitness enthusiasts to browse and purchase premium gym apparel and accessories. Developed using the MERN stack, it features secure user authentication, product categorization, shopping cart functionality, and a responsive user interface. The platform emphasizes a premium shopping experience with a sleek dark theme, interactive animations, and optimized performance. It also includes scalable backend architecture, RESTful APIs, and MongoDB integration for efficient product and user management. This project strengthened my skills in full-stack development, UI/UX design, and building production-ready web applications.",
      highlights: [
        "Secure User Authentication & Profile Management",
        "Interactive Product Categorization & Shopping Cart Workflow",
        "Scalable RESTful Backend API Architecture with Express & Node.js",
        "Optimized MongoDB indexing for fast product query responses",
        "Sleek dark mode UI with responsive design & micro-animations"
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs", "TailwindCSS"],
      github: "https://github.com/omdivekar/gymhub-ecommerce",
      demo: "https://gymhub-ecommerce.demo.app",
      featured: true,
      imageGradient: "from-[#00E5FF]/20 via-[#8A5CFF]/20 to-blue-600/20",
      accentColor: "#00E5FF"
    },
    {
      id: "urban-intel",
      title: "Urban Intel System",
      badge: "Final Year Project",
      tagline: "Data-Driven Smart City Intelligence & Analytics Platform",
      description: "Developed a comprehensive data analytics and visualization system to analyze urban datasets and generate actionable insights for smart city governance. Built algorithms to detect and manage urban emergencies (fire incidents, accidents, natural disasters), delivering measurable improvements in operational response.",
      highlights: [
        "Data-driven analytics pipeline for real-time urban datasets",
        "Interactive dashboard for emergency event mapping (fire, crash, disasters)",
        "Backend logic optimization for high-throughput data streams",
        "Measurable operational efficiency gains for city planning"
      ],
      tech: ["Python", "React.js", "Node.js", "MongoDB", "Data Analytics", "Express.js"],
      github: "https://github.com/omdivekar/urban-intel-system",
      demo: "https://urban-intel.demo.app",
      featured: true,
      imageGradient: "from-cyan-500/20 via-blue-600/20 to-purple-600/20",
      accentColor: "#00E5FF"
    },
    {
      id: "medi-assist",
      title: "Medi-Assist AI",
      badge: "AI Healthcare",
      tagline: "AI-Powered Medical Report Analysis & Symptom Assessor",
      description: "Architected an intelligent healthcare application designed to evaluate patient symptoms, analyze uploaded medical PDF reports using AI techniques, and produce simplified summaries with actionable health insights.",
      highlights: [
        "Medical Input module for secure symptom collection & validation",
        "AI Medical Report Analysis module extracting key diagnostic insights",
        "End-to-end REST API architecture tested & validated via Postman",
        "User-centric dashboard for preliminary health self-assessments"
      ],
      tech: ["Python", "AI/ML", "React.js", "Node.js", "REST APIs", "Express.js"],
      github: "https://github.com/omdivekar/medi-assist-ai",
      demo: "https://medi-assist.demo.app",
      featured: true,
      imageGradient: "from-purple-500/20 via-pink-600/20 to-indigo-600/20",
      accentColor: "#8A5CFF"
    },
    {
      id: "recipe-sharing",
      title: "Recipe Sharing Platform",
      badge: "MERN Stack",
      tagline: "Community Recipe Ecosystem with Dynamic Search & Auth",
      description: "A full-stack web application enabling users to publish, discover, and discuss recipes. Features JWT authentication, multi-criteria search/filtering, interactive commenting, and optimized MongoDB query indexing.",
      highlights: [
        "80-90% API data retrieval speedup using optimized query pipelines",
        "Secure User Authentication & Profile Management",
        "Real-time commenting & community engagement features",
        "Fully responsive UI styled with modern CSS & React"
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Postman", "JWT"],
      github: "https://github.com/omdivekar/recipe-platform",
      demo: "https://recipe-share.demo.app",
      featured: true,
      imageGradient: "from-emerald-500/20 via-teal-600/20 to-cyan-600/20",
      accentColor: "#10B981"
    }
  ],

  portfolioEngineering: {
    title: "Ultra-Modern Portfolio Engineering",
    tagline: "Built with React 19, Vite 6, HTML5 Canvas & Framer Motion",
    description: "Designed and engineered as a high-performance, 60 FPS dark-mode web experience. Avoids generic templates and boilerplate designs in favor of custom GPU-accelerated canvas animations, 3D mouse parallax dynamics, and modular React components.",
    techDetails: [
      { name: "LetterGlitch Engine", desc: "Custom HTML5 Canvas matrix renderer with cyan/purple vignettes & mouse proximity glow." },
      { name: "Motion & Parallax", desc: "Smooth scroll-triggered animations powered by Framer Motion and Anime.js." },
      { name: "Tailwind Architecture", desc: "Zero runtime overhead styling with custom glassmorphism and ambient glow tokens." },
      { name: "Performance Optimization", desc: "Maintains 60 FPS with hardware-accelerated transforms and zero layout shifts." }
    ]
  },

  experience: [
    {
      company: "EduNet Foundation",
      role: "MERN Stack Development Intern",
      period: "Jan 2025 – Feb 2025",
      location: "Pune, India",
      type: "Internship",
      details: [
        "Engineered responsive full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Designed and integrated 5+ RESTful API endpoints, achieving an 80-90% improvement in frontend-backend data retrieval efficiency.",
        "Optimized MongoDB database queries and conducted complete CRUD testing via Postman to guarantee data integrity.",
        "Collaborated in a 4-member Agile development team using Git version control, delivering project milestones on time."
      ]
    },
    {
      company: "GYMHUB E-Commerce Project",
      role: "Full-Stack MERN Architect",
      period: "2025",
      location: "Pune, India",
      type: "Featured Project",
      details: [
        "Architected full-stack e-commerce solution for fitness apparel with secure user auth, cart management, and REST APIs.",
        "Designed dark-mode UI/UX with smooth micro-interactions and optimized MongoDB data schema for high scalability."
      ]
    },
    {
      company: "Ultra-Modern Developer Portfolio",
      role: "Frontend & Canvas Engineer",
      period: "2026",
      location: "Pune, India",
      type: "Engineering Portfolio",
      details: [
        "Created an ultra-modern, 60 FPS dark-mode portfolio powered by React 19, Vite 6, TailwindCSS, and HTML5 Canvas LetterGlitch background.",
        "Engineered 3D tilt card interactions, interactive orbiting skill matrix, and high-fidelity printable resume exporter."
      ]
    }
  ],

  trainings: [
    {
      title: "AWS with Python Training",
      organization: "Capgemini & Symbiosis Skills University",
      period: "March 2026",
      details: "Placement-linked industry program covering cloud fundamentals, EC2, S3, and python-driven cloud architecture deployment."
    },
    {
      title: "Python Django Training",
      organization: "Rubicon Foundation",
      period: "Feb 2025",
      details: "Built dynamic web applications, mastering Django ORM, model-view-template architecture, and authentication systems."
    }
  ],

  certifications: [
    { name: "IBM Job Application Essentials", issuer: "IBM" },
    { name: "IBM Project Management Fundamentals", issuer: "IBM" },
    { name: "IBM Cloud Computing Fundamentals", issuer: "IBM" },
    { name: "IBM Artificial Intelligence Fundamentals", issuer: "IBM" },
    { name: "EduNet Foundations Completion Certificate", issuer: "EduNet Foundation" },
    { name: "Rubicon Foundation Completion Certificate", issuer: "Rubicon Foundation" },
    { name: "Icat Participation Certificate", issuer: "Icat" }
  ],

  education: [
    {
      degree: "Bachelor of Engineering (Computer Engineering)",
      institution: "Zeal College of Engineering & Research, Pune",
      period: "2022 – 2026",
      score: "CGPA: 7.92 / 10"
    },
    {
      degree: "HSC (Science)",
      institution: "Laxman Rao Apte Junior College, Pune",
      period: "2022",
      score: "67%"
    },
    {
      degree: "SSC (ICSE)",
      institution: "Kline Memorial School, Pune",
      period: "2020",
      score: "88%"
    }
  ],

  achievements: [
    { title: "1st Prize in Aptitude Level Test", icon: "Trophy", color: "#00E5FF" },
    { title: "3rd Prize in Talent Hunt Competition", icon: "Award", color: "#8A5CFF" },
    { title: "Solved 100+ DSA Problems", icon: "Code", color: "#10B981" },
    { title: "1st Place Interdepartmental Basketball", icon: "Flame", color: "#F59E0B" },
    { title: "Technical Events Committee Member", icon: "Users", color: "#EC4899" }
  ]
};
