// ─────────────────────────────────────────────────────────────
// Tout le contenu du site est ici. Modifiez ce fichier, faites
// "git push", le site se met à jour. Les composants ne changent pas.
// ─────────────────────────────────────────────────────────────

const profile = {
  name: "Mitia Razafimahefa",
  role: "Data Scientist · Machine Learning / Big Data",

  // Chemin d'une photo placée dans public/ (ex. "/photo.jpg"). Vide = initiales.
  photo: "",

  intro: [
    "Bonjour, je suis Mitia, data scientist spécialisé en machine learning et en IA générative. Je viens du génie logiciel (Java, Spring, .NET, React), ce qui m’évite de m’arrêter au notebook.",
    "Je pars du besoin métier, j’explore les données, je teste et j’itère, puis je mets le modèle en production : API, conteneurs, tests automatisés. Mes projets récents portent sur le RAG et la prédiction de churn.",
  ],

  start: [
    { label: "Assistant documentaire RAG", href: "#projets", note: "réponses sourcées avec LangChain" },
    { label: "Prédiction du churn, jusqu’à la production", href: "#projets", note: "modèle, API, Docker, CI/CD" },
    { label: "Mon parcours", href: "#parcours", note: "stages et formation" },
  ],

  skills: [
    {
      title: "Cadrage et relation client",
      items: ["Recueil de besoin", "Reformulation en problème data", "Restitution à des non-techniques"],
    },
    {
      title: "Data science et ML",
      items: ["Machine learning", "LLM et RAG (LangChain)", "Systèmes de recommandation", "Analyse exploratoire, prétraitement"],
    },
    {
      title: "Langages",
      items: ["Python (Pandas, NumPy, Scikit-learn)", "SQL", "Java", "JavaScript", "C#"],
    },
    {
      title: "Données et bases",
      items: ["ETL, structuration, extraction", "PostgreSQL, MySQL, Oracle", "MongoDB (NoSQL)"],
    },
    {
      title: "Frameworks",
      items: ["Spring (Boot, MVC, Hibernate)", ".NET", "Django", "React, Angular"],
    },
    {
      title: "Outils et qualité",
      items: ["Jupyter, Docker, Git", "Azure DevOps, GitHub CI/CD", "Clean code, TDD", "N-tiers, microservices"],
    },
  ],
  languages: "Français (avancé) · Anglais (intermédiaire) · Malagasy (natif)",

  projects: [
    {
      title: "Assistant documentaire RAG",
      type: "Projet personnel",
      problem: "Obtenir des réponses fiables sur une base documentaire, avec leurs sources, plutôt que de se reposer sur les seules connaissances d’un LLM.",
      approach:
        "Chunking des documents, embeddings, base vectorielle (FAISS / ChromaDB) et recherche par similarité. Génération orchestrée avec LangChain et citation des sources. Hallucinations réduites en itérant sur le chunking et le prompt système.",
      limit: "", // ex. "Qualité dépendante du découpage des documents longs."
      demo: "", // ex. lien Streamlit / Hugging Face Spaces
      stack: ["Python", "LangChain", "FAISS / ChromaDB", "API LLM", "Streamlit"],
      result: { value: "Sourcé", label: "chaque réponse cite les passages utilisés" },
      link: "", // ex. "https://github.com/votre-compte/rag-assistant"
    },
    {
      title: "Prédiction du churn client, de l’ingestion à la production",
      type: "Projet personnel",
      problem: "Repérer les clients télécom susceptibles de se désabonner et comprendre pourquoi, pour que le métier puisse agir.",
      approach:
        "Feature engineering et SMOTE pour les classes déséquilibrées. Régression logistique, Random Forest et XGBoost comparés en validation croisée. Facteurs clés expliqués avec SHAP. Modèle exposé par FastAPI, conteneurisé avec Docker et testé en CI/CD.",
      limit: "",
      demo: "",
      stack: ["Scikit-learn", "XGBoost", "SHAP", "FastAPI", "Docker", "GitHub Actions"],
      result: { value: "SHAP", label: "facteurs de résiliation expliqués pour le métier" },
      link: "",
    },
  ],

  experience: [
    {
      title: "Fullstack Developer Intern (.NET et React)",
      org: "Versumind",
      period: "Décembre 2024 – Mai 2025",
      points: [
        "Analyse et structuration des données applicatives pendant le développement de l’API REST.",
        "Scripts E2E Playwright pour fiabiliser le parcours utilisateur et la qualité des données.",
        "Tests intégrés aux pipelines Azure DevOps, exécutés toutes les 48 h avec rapport d’état.",
      ],
      stack: ".NET 6, Next.js 13.4, TypeScript 5, Playwright, Azure DevOps",
    },
    {
      title: "Software Engineering Intern",
      org: "EQIMA Solutions",
      period: "Juillet 2024 – Septembre 2024",
      points: [
        "Audit des besoins métier et prototypage d’interfaces (créances, recharge de portefeuilles numériques).",
        "Structuration des historiques de transactions et intégration de l’API MVola pour le paiement sécurisé.",
      ],
      stack: "Java 17, Android SDK, API MVola, SQLite",
    },
  ],

  education: [
    {
      title: "Master 1 en Informatique (validé)",
      org: "IT University Madagascar",
      period: "Novembre 2025 – Aout 2026",
      points: [],
    },
    {
      title: "Licence en Informatique, option Développement",
      org: "IT University Madagascar",
      period: "Octobre 2021 – Juin 2025",
      points: [],
    },
  ],

  contact: {
    text: "Un poste de data scientist, une mission ML ou un projet d’IA à intégrer dans un système existant ? Écrivez-moi.",
    // Les liens vides ne sont pas affichés.
    email: "mitia.pro@outlook.fr",
    linkedin: "https://www.linkedin.com/in/mitia-razafimahefa",
    github: "", // ex. "https://github.com/votre-compte"
  },
};

export default profile;
