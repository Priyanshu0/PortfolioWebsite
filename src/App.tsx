import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  FolderGit2,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  MapPin,
  TerminalSquare,
  Wrench,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const links = {
  email: "mailto:priyanshu1tuli@gmail.com",
  linkedin: "https://www.linkedin.com/in/priyanshu-tuli/",
  github: "https://github.com/Priyanshu0",
  capstone: "https://www.youtube.com/watch?v=YPibb5IdCTY&t=23s",
};

const metrics = [
  { value: "+50 bps", label: "pSLA compliance" },
  { value: "10–30%", label: "ETA accuracy" },
  { value: "40%", label: "Dwell-time gain" },
  { value: "95%", label: "HAR accuracy" },
  { value: "+25%", label: "Vulnerability AUC" },
];

const heroProof = [
  "5 years in applied ML",
  "50+ production models shipped",
  "Forecasting · Graph ML · NLP",
];

interface Project {
  name: string;
  challenge: string;
  system: string;
  outcome: string;
}

interface CaseStudy {
  logo: string;
  title: string;
  context: string;
  summary: string;
  result: string;
  projects: Project[];
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    logo: `${BASE}logos/Swiggy.png`,
    title: "Instamart pSLA Compliance",
    context: "Swiggy",
    summary:
      "Cart-level features, learned embeddings, and model explainability for percentile-based targeting across delivery cohorts.",
    result: "+50 bps pSLA compliance",
    projects: [
      {
        name: "Instamart pSLA Compliance",
        challenge:
          "pSLA had to improve without shrinking serviceability — globally tightening the system wasn't viable; underperforming cohorts had to be identified and targeted surgically.",
        system:
          "Combined cart-level features and learned embeddings in a probabilistic multi-head neural network; used Deep SHAP and Integrated Gradients to identify underperforming cohorts and close the loop with percentile-based targeting.",
        outcome:
          "50 bps improvement in pSLA compliance with maintained serviceability across India, plus a repeatable feedback mechanism for cohort-level interventions.",
      },
    ],
    tags: ["Probabilistic ML", "Embeddings", "Explainability", "Targeting"],
  },
  {
    logo: `${BASE}logos/fourkites.png`,
    title: "Logistics Forecasting & Intelligence",
    context: "FourKites",
    summary:
      "Truck ETA prediction (single and multi-stop), dwell time estimation, and geospatial intelligence for supply chain operations.",
    result: "10–30% ETA uplift · 40% dwell-time gain",
    projects: [
      {
        name: "ETA Prediction Platform",
        challenge:
          "ETA needed to work across diverse customers with skewed distributions, volatile multi-stop updates, and late-delivery notifications that had to be trustworthy without over-alerting.",
        system:
          "Productionized LSTM pipelines with focal + ordinal loss; built 50+ customer-specific bucketized models with tailored class weights and Kalman filtering for stability; added Redis-backed real-time features; introduced isotonic calibration for notification thresholds.",
        outcome:
          "10–30% ETA accuracy uplift versus traditional regression, 5–10% improvement in late-delivery notification precision, and a scalable customer-model footprint across the product.",
      },
      {
        name: "Dwell Time Prediction",
        challenge:
          "Downstream ETA accuracy depended on knowing how long trucks would spend at loading and unloading facilities — a variable that had no reliable prior estimate.",
        system:
          "Developed a unified model estimating facility dwell time for TL multi-stop shipments; deployed independently on EKS cluster; integrated into the broader ETA pipeline.",
        outcome:
          "40% and 35% improvement in 15-min and 30-min accuracy thresholds respectively versus baseline; improved downstream multi-stop ETA quality and Late Reason Code reliability.",
      },
    ],
    tags: ["LSTM", "Kalman Filtering", "Redis", "EKS", "Geospatial"],
  },
  {
    logo: `${BASE}logos/sigmoid.png`,
    title: "Sensor ML & Retail Vision",
    context: "Sigmoid",
    summary:
      "Human activity recognition from wearable sensor signals and automated shelf KPI compliance for Fortune 500 clients.",
    result: "95% HAR accuracy · +25% product visibility",
    projects: [
      {
        name: "Human Activity Recognition",
        challenge:
          "Sensor signals from consumer-grade wearables are noisy and multi-dimensional; the client needed accurate sub-activity segmentation and quantification across full activity cycles.",
        system:
          "Led a team of 2 data scientists; built a hybrid DNN-LSTM-CNN architecture and handcrafted features via signal isolation and frequency-domain transformation techniques.",
        outcome:
          "95% test accuracy, delivered as a production-ready pipeline for a Fortune 500 client with clear sub-activity granularity across full activity cycles.",
      },
      {
        name: "Shelf Arrangement KPI Compliance",
        challenge:
          "Manually auditing shelf arrangement across retail stores for KPI compliance was slow, inconsistent, and couldn't scale — the client had no automated baseline.",
        system:
          "Built a pipeline using fine-tuned YOLO V8 for shelf and price-tag detection, Google Gemini Vision Pro for brand detection on cropped images, and OpenAI CLIP for image captioning probability scoring.",
        outcome:
          "25% increase in product visibility and 10% increase in sales; automated shelf KPI compliance assessment replaced the manual audit workflow.",
      },
    ],
    tags: ["DNN", "LSTM", "CNN", "YOLO V8", "CLIP", "Fortune 500"],
  },
  {
    logo: `${BASE}logos/blueoptima.png`,
    title: "Graph ML for Code Security",
    context: "BlueOptima",
    summary:
      "Graph modeling pipelines, GNNs with fine-tuned StarCoder embeddings, and Captum-based interpretability for detecting developer-induced vulnerabilities in Java codebases.",
    result: "85–95% precision · +25% AUC",
    projects: [
      {
        name: "Static Vulnerability Detection",
        challenge:
          "Static vulnerability detection needed high precision on real codebases across multiple CWEs while remaining interpretable enough for security engineers to trust and act on.",
        system:
          "Built end-to-end graph modeling for code repositories; fine-tuned StarCoder and Graph Transformer embeddings for node/edge features; trained GNNs for 5 Java CWEs with data augmentation; used Captum perturbation-based interpretation to drive a false-positive reduction feedback loop.",
        outcome:
          "85–95% precision on target vulnerability classes, 20% improvement in embedding quality, and 25% AUC increase — with actionable model explanations that engineers could inspect.",
      },
    ],
    tags: ["Graph Neural Nets", "StarCoder", "Captum", "Static Analysis"],
  },
];

const experience = [
  {
    company: "Swiggy",
    role: "Data Scientist II",
    period: "Nov 2025 – Present",
    location: "Bengaluru",
    summary:
      "Quick-commerce ML — promise compliance and delivery optimization for Instamart.",
  },
  {
    company: "FourKites",
    role: "Senior Data Scientist",
    period: "Jul 2024 – Nov 2025",
    location: "Chennai",
    summary:
      "Logistics and supply chain — truck ETA forecasting, dwell-time prediction, and geospatial intelligence.",
  },
  {
    company: "Sigmoid",
    role: "Senior Data Scientist",
    period: "Oct 2023 – Jul 2024",
    location: "Bengaluru",
    summary:
      "Enterprise AI consulting — computer vision, sensor ML, RAG assistants, and LLM evaluation for Fortune 500 clients.",
  },
  {
    company: "BlueOptima",
    role: "Associate / Graduate ML Engineer",
    period: "Jul 2021 – Oct 2023",
    location: "Bengaluru",
    summary:
      "Code intelligence — graph ML for vulnerability detection, developer productivity modeling, and forecasting microservices.",
  },
];

const skillGroups = [
  {
    title: "ML and AI",
    skills: [
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Graph Neural Networks",
      "LLMs",
      "Time Series",
      "Feature Engineering",
    ],
  },
  {
    title: "Frameworks",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "LangChain",
      "LlamaIndex",
      "XGBoost",
      "LightGBM",
    ],
  },
  {
    title: "Production Systems",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS EKS",
      "AWS EC2",
      "Redis",
      "Kafka",
      "Airflow",
      "FastAPI",
      "Flask",
    ],
  },
  {
    title: "Data Platforms",
    skills: [
      "Python",
      "SQL",
      "PostgreSQL",
      "Cassandra",
      "PySpark",
      "Vector DBs",
      "Dask",
      "Polars",
    ],
  },
];

const certifications = [
  {
    title: "Google TensorFlow Developer",
    href: "https://www.credential.net/abc8b098-0b9b-4bf2-95d3-3bbea275275b#gs.5r2j3o",
  },
  {
    title: "NPTEL: Design and Analysis of Algorithms",
    href: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL19CS47S51200165191006847",
  },
];

export function App() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home">
          <Home size={24} /> Home
        </a>
        <div className="nav-links">
          <a href="#work">
            <FolderGit2 size={22} /> Work
          </a>
          <a href="#experience">
            <BriefcaseBusiness size={22} /> Experience
          </a>
          <a href="#skills">
            <TerminalSquare size={22} /> Skills
          </a>
          <a href="#contact">
            <Mail size={22} /> Contact
          </a>
        </div>
      </nav>

      <section className="hero section-band" id="home">
        <div className="hero-copy">
          <h1>
            Hi! I'm <strong>Priyanshu Tuli</strong>
          </h1>
          <p className="hero-subtitle">Data Scientist II · Swiggy</p>
          <div className="terminal-card">
            <div className="terminal-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal-body">
              <p>
                I build applied ML systems end to end — from research and
                feature engineering to production deployment at scale.
              </p>
              <p>
                My work spans logistics forecasting, geospatial intelligence,
                computer vision, graph ML, and LLM evaluation.
              </p>
            </div>
          </div>
          <div className="hero-proof" aria-label="Immediate proof points">
            {heroProof.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-actions" aria-label="Contact links">
            <a className="button primary" href={links.email}>
              <Mail size={18} />
              Email
            </a>
            <a
              className="button secondary"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              className="button secondary"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Selected impact metrics">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Featured work</p>
          <h2>Selected projects</h2>
        </div>
        <div className="case-grid">
          {caseStudies.map((study) => (
            <article className="case-card" key={study.title}>
              <div className="case-topline">
                <img
                  src={study.logo}
                  alt={study.context}
                  className="company-logo"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <h3>{study.title}</h3>
              <p className="impact">{study.result}</p>
              <p>{study.summary}</p>
              <div className="tags">
                {study.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="case-detail">
                {study.projects.map((proj) => (
                  <div key={proj.name} className="sub-project">
                    {study.projects.length > 1 && (
                      <p className="sub-project-name">{proj.name}</p>
                    )}
                    <div className="case-detail-row">
                      <strong>Challenge</strong>
                      <p>{proj.challenge}</p>
                    </div>
                    <div className="case-detail-row">
                      <strong>System</strong>
                      <p>{proj.system}</p>
                    </div>
                    <div className="case-detail-row">
                      <strong>Outcome</strong>
                      <p>{proj.outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="experience">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">Experience</p>
          <h2>Career path</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article
              className="timeline-item"
              key={`${item.company}-${item.role}`}
            >
              <div>
                <span className="timeline-dot" />
                <p className="period">{item.period}</p>
              </div>
              <div>
                <h3>{item.company}</h3>
                <p className="role">
                  <BriefcaseBusiness size={16} /> {item.role}
                </p>
                <p className="location">
                  <MapPin size={16} /> {item.location}
                </p>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Technical stack</p>
          <h2>Main skills & tools</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <Wrench size={26} />
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section credentials" id="credentials">
        <div className="credentials-inner">
          <div className="edu-block">
            <p className="eyebrow">Education</p>
            <h2>Computer Engineering</h2>
            <p>
              B.E. from Thapar Institute of Engineering and Technology, Patiala.
              CGPA 8.45.
            </p>
            <a
              className="inline-link"
              href={links.capstone}
              target="_blank"
              rel="noreferrer"
            >
              Smart Glasses capstone <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="cert-block">
            <p className="eyebrow">Certifications</p>
            <div className="cert-list">
              {certifications.map((cert) => (
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  key={cert.title}
                  className="cert-item"
                >
                  <Award size={16} />
                  <span>{cert.title}</span>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Contact</p>
        <div className="contact-buttons">
          <a className="button primary" href={links.email}>
            <Mail size={18} /> priyanshu1tuli@gmail.com
          </a>
          <a
            className="button secondary"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            className="button secondary"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </section>

      <footer>
        <span>
          <GraduationCap size={16} /> Priyanshu Tuli
        </span>
        <span>Data science portfolio</span>
      </footer>
    </main>
  );
}
