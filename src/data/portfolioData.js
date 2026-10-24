export const personalInfo = {
  name: "Mansi Zinjad",
  firstName: "Mansi",
  lastName: "Zinjad",
  initials: "MZ",
  title: "Data Science & Big Data Analytics | Full-Stack & AI Developer",
  roles: [
    "B.Sc. Data Science & Big Data Student",
    "SQL & Database Performance Engineer",
    "Vector Search & AI Systems Developer",
    "Interactive Dashboards & Python Specialist",
    "Frontend & React.js Developer"
  ],
  bio: "Passionate Data Science student at MIT-WPU Pune with proven expertise in MySQL optimization (35% query speedup), high-dimensional vector search (45% retrieval boost), and full-stack interactive applications. Combines deep analytical rigor with creative problem solving.",
  phone: "+91 8329789906",
  phoneRaw: "8329789906",
  email: "mansi.zinjad06@gmail.com",
  location: "Pune, Maharashtra, India",
  university: "MIT World Peace University (MIT-WPU), Pune",
  currentDegree: "B.Sc. Data Science and Big Data Analytics (2024 - 2027)",
  currentCGPA: "8.39",
  cgpaTrend: ["7.95 (Sem 1)", "7.98 (Sem 2)", "8.27 (Sem 3)", "8.39 (Sem 4)"],
  linkedin: "https://linkedin.com/in/mansi-zinjad",
  github: "https://github.com/mansi-zinjad",
  photo: "/mansi.jpg",
  statusBadge: "Available for Internships & Projects",
  stats: [
    { label: "Current CGPA", value: "8.39", helper: "Top tier academic growth" },
    { label: "Query Speed Boost", value: "+35%", helper: "Optimized MySQL joins & CTEs" },
    { label: "Semantic Search Accuracy", value: "+45%", helper: "Cosine embeddings & Vector DB" },
    { label: "Relevant Recall Rate", value: "95%", helper: "Tested across 200+ queries" }
  ]
};

export const education = [
  {
    institution: "MIT World Peace University (MIT WPU)",
    location: "Pune, Maharashtra",
    degree: "B.Sc. Data Science and Big Data Analytics",
    period: "2024 – 2027",
    status: "In Progress",
    gradeType: "CGPA",
    grade: "8.39",
    highlight: "Consistent upward academic progression across 4 consecutive semesters: 7.95 → 7.98 → 8.27 → 8.39",
    description: "Rigorous coursework focusing on Big Data architectures, Statistical Computing, Machine Learning, Database Management Systems, and Predictive Analytics.",
    badges: ["Big Data Analytics", "Data Structures", "Advanced SQL", "Python & R Modeling", "Statistics"]
  },
  {
    institution: "Sarhad Junior College",
    location: "Pune, Maharashtra",
    degree: "Higher Secondary Certificate (HSC) – Science",
    period: "2023 – 2024",
    status: "Completed",
    gradeType: "Percentage",
    grade: "60.17%",
    highlight: "Strong science and mathematical foundation supporting computational thinking.",
    description: "Specialized in Mathematics, Physics, and foundational computing skills.",
    badges: ["Higher Mathematics", "Physics", "Computer Science Basics"]
  },
  {
    institution: "Vidya Niketan English Medium School",
    location: "Pune, Maharashtra",
    degree: "Secondary School Certificate (SSC)",
    period: "2021 – 2022",
    status: "Completed with Distinction",
    gradeType: "Percentage",
    grade: "86.40%",
    highlight: "Merit Holder in School Level English Marathon Exam & Multi-time Creative Arts Champion.",
    description: "Well-rounded academic and extracurricular achievements with leadership in drawing competitions and sports.",
    badges: ["Academic Distinction", "English Marathon Merit", "Arts & Sports Champion"]
  }
];

export const projects = [
  {
    id: "job-market-intelligence",
    title: "Job Market Intelligence & Skill Gap Analysis System",
    subtitle: "Self Project | End-to-End Data Pipeline & Analytics",
    period: "2026",
    role: "Data Analyst & Database Architect",
    summary: "Engineered a scalable SQL data warehouse and Python pipeline analyzing 1000+ job postings and candidate pipelines to pinpoint high-value tech skills.",
    description: "Designed 5 normalized relational tables in MySQL to orchestrate 1,000+ job postings, candidate applications, and interview funnels. Authored 20+ intricate SQL queries leveraging recursive CTEs, window functions, and multi-table JOINs, slashing query execution latency by 35%. Developed 3 dynamic Power BI dashboards synthesizing 500+ listings to forecast industry skill demands.",
    techStack: [
      "MySQL",
      "SQL",
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Streamlit",
      "mysql-connector-python",
      "Power BI",
      "VS Code",
      "Jupyter Notebook",
      "GitHub"
    ],
    metrics: [
      { label: "Query Speedup", value: "35%", note: "via CTEs & window functions" },
      { label: "Managed Records", value: "1,000+", note: "Job postings & applications" },
      { label: "BI Dashboards", value: "3", note: "Real-time market insights" },
      { label: "Listings Analyzed", value: "500+", note: "High demand skills mapped" }
    ],
    highlights: [
      "Designed 5 relational tables in MySQL to manage 1000+ job postings, applications and interviews",
      "Wrote 20+ SQL queries using JOINS, CTEs, CASE and window functions, improved query speed by 35%",
      "Built 3 Power BI dashboards analyzing 500+ listings to identify top 10 in-demand skills",
      "Streamlit & Python automation for automated ETL and dataset normalization"
    ],
    github: "https://github.com/mansi-zinjad",
    category: "Data Engineering & Analytics",
    accentColor: "from-purple-500 to-indigo-600",
    glowColor: "rgba(168, 85, 247, 0.4)"
  },
  {
    id: "ai-memory-vault",
    title: "AI Memory Vault 2.0 – Personal Memory Management System",
    subtitle: "Student Group Project | Frontend & Vector AI Integration",
    period: "2026",
    role: "Frontend Developer & AI Module Specialist",
    summary: "Intelligent vector-powered memory curation platform featuring semantic context search, auto-summarization, and responsive PWA interface.",
    description: "Engineered the frontend and AI retrieval layer for AI Memory Vault 2.0 to index and retrieve 1,000+ user memories and multi-turn conversations. Implemented high-dimensional vector embeddings and cosine similarity search, reducing query response times by 30% while lifting semantic accuracy by 45%. Built two automated summarization & categorization modules tested on 200+ edge test queries with 95% relevant recall.",
    techStack: [
      "React.js",
      "JavaScript",
      "Vector DB",
      "Python",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Vite",
      "Chart.js",
      "Progressive Web App (PWA)",
      "Tailwind CSS",
      "GitHub",
      "VS Code"
    ],
    metrics: [
      { label: "Context Retrieval", value: "+45%", note: "Accuracy improvement" },
      { label: "Response Latency", value: "-30%", note: "Faster search execution" },
      { label: "Relevant Recall", value: "95%", note: "Across 200+ test queries" },
      { label: "Indexed Memories", value: "1,000+", note: "Conversations & personal notes" }
    ],
    highlights: [
      "Developed AI Memory Vault 2.0 to store and retrieve 1000+ user memories and conversations using Python and Vector DB",
      "Implemented semantic search with embeddings and cosine similarity, improving context retrieval accuracy by 45% and response time by 30%",
      "Built 2 AI modules for auto-summarization and memory tagging, tested on 200+ queries to ensure 95% relevant recall",
      "Modern responsive PWA frontend with JWT-secured authentication, dark theme, and Chart.js analytics"
    ],
    github: "https://github.com/mansi-zinjad",
    category: "Full-Stack AI & Web",
    accentColor: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.4)"
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 90, tag: "Primary Language", note: "Data science, scripting, ML, backend" },
      { name: "SQL", level: 95, tag: "Expert Querying", note: "CTEs, Window Functions, Indexing, Joins" },
      { name: "Java", level: 75, tag: "OOP & Algorithms", note: "Object-oriented structures & logic" },
      { name: "C", level: 78, tag: "Systems & Memory", note: "Core programming fundamentals" },
      { name: "R", level: 80, tag: "Statistical Modeling", note: "Data analysis & statistical tests" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: "Boxes",
    skills: [
      { name: "Pandas", level: 92, tag: "Data Wrangling", note: "High performance tabular data transformation" },
      { name: "NumPy", level: 90, tag: "Vector Math", note: "Multidimensional arrays & matrices" },
      { name: "Matplotlib", level: 88, tag: "Data Viz", note: "Statistical plots & charts" },
      { name: "Chart.js", level: 85, tag: "Interactive Charts", note: "Frontend data visualization" },
      { name: "React.js", level: 88, tag: "UI Development", note: "Components, hooks, responsive web apps" },
      { name: "Node.js & Express.js", level: 80, tag: "Backend APIs", note: "RESTful services & middleware" },
      { name: "Streamlit", level: 86, tag: "Data Apps", note: "Rapid prototype deployment" }
    ]
  },
  {
    category: "Databases & Vector Storage",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 95, tag: "Relational DB", note: "Schema design, normalization, stored procedures" },
      { name: "Vector DB", level: 85, tag: "AI Search", note: "Embeddings, semantic similarity, retrieval" },
      { name: "MongoDB", level: 82, tag: "NoSQL Document", note: "JSON collections, indexing & aggregation" },
      { name: "MySQL Workbench", level: 90, tag: "DB Admin", note: "EER modeling & query execution plans" }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "GitHub / Git", level: 88, tag: "Version Control", note: "Branching, PRs, collaborative workflows" },
      { name: "VS Code", level: 92, tag: "Primary IDE", note: "Custom debugging, linting, extensions" },
      { name: "Jupyter Notebook", level: 92, tag: "Exploratory EDA", note: "Data storytelling & model iteration" },
      { name: "Power BI", level: 88, tag: "Business Intelligence", note: "Interactive dashboards & DAX metrics" },
      { name: "Microsoft Excel", level: 86, tag: "Data Analysis", note: "Pivot tables, lookups, statistical formulas" }
    ]
  },
  {
    category: "Soft Skills & Leadership",
    icon: "BrainCircuit",
    skills: [
      { name: "Problem Solving", level: 95, tag: "Analytical Mindset", note: "Algorithmic thinking & root-cause diagnosis" },
      { name: "Communication", level: 90, tag: "Technical Presentation", note: "Translating data insights to stakeholders" },
      { name: "Teamwork", level: 92, tag: "Cross-functional", note: "Collaborative project delivery" },
      { name: "Time Management", level: 88, tag: "Prioritization", note: "Sprint milestones & academic deadlines" },
      { name: "Decision Making", level: 87, tag: "Data-Driven", note: "Evidence-backed problem resolution" }
    ]
  },
  {
    category: "Spoken Languages",
    icon: "Globe2",
    skills: [
      { name: "English", level: 95, tag: "Professional & Fluent", note: "School Level English Marathon Merit Holder" },
      { name: "Hindi", level: 95, tag: "Native / Fluent", note: "Conversational & professional fluency" },
      { name: "Marathi", level: 95, tag: "Native / Fluent", note: "Mother tongue, native fluency" }
    ]
  }
];

export const awards = [
  {
    id: 1,
    title: "Continuous Academic Growth & Dean's Merit Trajectory",
    issuer: "MIT World Peace University (MIT-WPU), Pune",
    type: "Academic Excellence",
    badge: "Top 5% Trajectory",
    date: "2024 – Present",
    icon: "TrendingUp",
    gradient: "from-purple-500/20 to-cyan-500/20",
    borderGlow: "group-hover:border-purple-400/50",
    description: "Demonstrated consistent upward academic growth with a remarkable CGPA progression of 7.95, 7.98, 8.27, and 8.39 across 4 consecutive semesters at MIT WPU.",
    metrics: "7.95 → 7.98 → 8.27 → 8.39 CGPA"
  },
  {
    id: 2,
    title: "Creative Arts Distinction & English Marathon Merit",
    issuer: "Vidya Niketan & State Examination Boards",
    type: "Creativity & Linguistics",
    badge: "Merit Holder",
    date: "School Distinction",
    icon: "Award",
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderGlow: "group-hover:border-cyan-400/50",
    description: "Secured 1st, 2nd, and 3rd ranks in Creative Drawing competitions at the school level and achieved prestigious Merit Holder honors in the School Level English Marathon Exam.",
    metrics: "Triple Rank Winner & Merit Awardee"
  },
  {
    id: 3,
    title: "Competitive Sports Leadership & Podiums",
    issuer: "Inter-School & Junior College Athletics",
    type: "Athletics & Leadership",
    badge: "Multi-Champion",
    date: "Consistent 1st – 12th Std",
    icon: "Trophy",
    gradient: "from-indigo-500/20 to-pink-500/20",
    borderGlow: "group-hover:border-indigo-400/50",
    description: "Achieved top ranks in sports competitions consistently from 1st to 10th standard; secured 1st and 2nd ranks in Dodgeball and Tug of War during 11th and 12th standard.",
    metrics: "1st & 2nd Ranks in High-Intensity Athletics"
  },
  {
    id: 4,
    title: "Certified Badminton Sports Training (30 Hours)",
    issuer: "MIT EPU, MIT World Peace University, Pune",
    type: "Certified Discipline",
    badge: "Certified Athlete",
    date: "MIT EPU Certification",
    icon: "Flame",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    borderGlow: "group-hover:border-emerald-400/50",
    description: "Successfully completed an intensive 30-hour certified Sports Course in Badminton conducted by MIT EPU, reinforcing physical stamina, agility, and competitive strategic focus.",
    metrics: "30-Hour Intensive Program Completed"
  }
];
