/**
 * ========================================
 * PORTFOLIO CONFIGURATION
 * ========================================
 * Edit this file to update all personal content.
 * The website will automatically reflect changes.
 */

export const CONFIG = {
  // ── Personal Info ──
  name: "Ahmad Elhamad",
  headline: "Cybersecurity Engineer & Developer",
  subheadline: "Nearly a Decade of Incident Response Excellence",
  bio: `Cybersecurity engineer leveraging deep incident response expertise to strengthen organizational security posture at scale. Application Security specialist driving DevSecOps through CI/CD automation to shift security left in the development lifecycle.`,

  // ── Profile Photo ──
  // Replace with a URL or local path to your headshot
  profilePhoto: null, // Set to a URL string, e.g., "/photo.jpg"
  profilePhotoAlt: "Ahmad Elhamad",

  // ── Education ──
  education: [
    {
      school: "Western Governors University",
      degree: "M.S. Cybersecurity & Information Assurance",
      years: "2024 – 2025",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/WGU-AcademicLogo_Seal-_transparent_II.png?_=20221103011114",
      description: "Advanced graduate program focused on cybersecurity strategy, incident response, and information assurance governance.",
    },
    {
      school: "San Diego State University",
      degree: "B.S. Computer Science",
      years: "2012 – 2016",
      logo: "https://www.lmsvschools.org/wp-content/uploads/2019/09/presidential-seal-912x1023.png",
      description: "Undergraduate program with a foundation in software engineering, algorithms, data structures, and systems architecture.",
    },
  ],

  // ── Work Experience ──
  experience: [
    {
      title: "Cyber Security Engineer III",
      company: "Viasat",
      industry: "Satellite Telecommunications",
      location: "San Diego, CA (Remote)",
      years: "Jan 2022 – Present",
      highlights: [
        "Primary incident responder securing satellite infrastructure across enterprise and defense networks",
        "Architected automated IR workflows using Azure Logic Apps, orchestrating detection, escalation, and resolution pipelines",
        "Built custom SOAR integrations and threat-hunting tools in Python/JavaScript, including an IR SlackBot for automated host containment",
        "Developed REST APIs and DMZ monitoring solutions with Shodan Monitor for real-time vulnerability alerting",
        "Created detection rules and operational dashboards in OpenSearch for threat hunting and health monitoring",
      ],
    },
    {
      title: "Security Operations Engineer II",
      company: "Allvue Systems",
      industry: "Financial Technology",
      location: "San Diego, CA (Remote)",
      years: "Sep 2019 – Jan 2022",
      highlights: [
        "Founded and architected the Application Security program, aligning cross-functional teams under a unified security strategy",
        "Embedded security into CI/CD pipelines, preventing credential leaks and enforcing secure development practices",
        "Authored Secure Software Development policy based on OWASP Top 10, delivering regular training to engineering teams",
        "Automated phishing analysis and suspicious authentication investigation workflows",
      ],
    },
    {
      title: "Cyber Intelligence & IR Analyst",
      company: "Cubic Corporation",
      industry: "Defense",
      location: "San Diego, CA",
      years: "Aug 2018 – Sep 2019",
      highlights: [
        "Incident response, SOAR development (xSOAR), malware analysis, and detection engineering",
        "Built automated phish analysis workflows with sandbox integration and employee response automation",
        "Emergency vulnerability remediation during WannaCry campaign, patching EternalBlue across the enterprise",
      ],
    },
    {
      title: "Associate Security Analyst",
      company: "PlayStation",
      industry: "Entertainment",
      location: "San Diego, CA",
      years: "Apr 2018 – Aug 2018",
      highlights: [
        "Intrusion response analyst in 24/7 SOC, monitoring SIEM alerts and conducting proactive threat hunts",
        "Automated daily cloud vulnerability reporting, reducing process time from 1 hour to 5 minutes",
      ],
    },
    {
      title: "Associate Software Engineer → Security Analyst",
      company: "Cubic Corporation",
      industry: "Defense",
      location: "San Diego, CA",
      years: "Feb 2016 – Jan 2018",
      highlights: [
        "Started as Tier 1 security analyst; triaged, investigated, and escalated potential incidents",
        "Transitioned to software engineering role, gaining CI/CD and enterprise development experience",
        "Managed GRC application deployment with ServiceNow",
      ],
    },
  ],

  // ── Stats ──
  experienceStartDate: "2016-02-06", // Used for dynamic experience counter
  stats: [
    { value: "dynamic", label: "Experience", isDynamic: true },
    { value: "5", label: "Certifications" },
    { value: "6+", label: "Projects" },
    { value: "3", label: "Cloud Platforms" },
  ],

  // ── Certifications ──
  certifications: [
    {
      name: "CompTIA PenTest+",
      issuer: "CompTIA",
      date: "Jan 2025",
      credentialUrl: "https://www.credly.com/badges/a29304fd-dcf9-4553-9cf8-6645c522c13d/public_url",
    },
    {
      name: "CompTIA CySA+",
      issuer: "CompTIA",
      date: "Dec 2024",
      credentialUrl: "https://www.credly.com/badges/bd69ef41-5c82-452a-af0a-9945b63890cc",
    },
    {
      name: "Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      date: "Sep 2024",
      credentialUrl: "https://www.credly.com/badges/4be8d419-bad7-45fe-9887-2b545a346a89",
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "Sep 2019",
      credentialUrl: null,
    },
    {
      name: "Certified Splunk User",
      issuer: "Splunk",
      date: "Jun 2018",
      credentialUrl: null,
    },
  ],

  // ── Skills (by category) ──
  skills: [
    {
      category: "Intrusion Detection & Response",
      icon: "🛡️",
      items: ["CrowdStrike Falcon", "Google SecOps", "MS Defender", "Splunk ES", "Sentinel", "OpenSearch", "ELK"],
    },
    {
      category: "Security Orchestration & Automation",
      icon: "⚙️",
      items: ["Google SecOps", "JupyterHub", "Lambda", "Azure Logic Apps", "MS Defender"],
    },
    {
      category: "Log Analysis & Reporting",
      icon: "📊",
      items: ["Azure Sentinel", "Splunk", "ELK", "OpenSearch", "Azure Workbooks", "Infoblox", "pandas"],
    },
    {
      category: "Cloud Platforms",
      icon: "☁️",
      items: ["AWS (Lambda, S3, CloudWatch, SecurityHub, GuardDuty, IaC)", "Azure (IAM, Logic Apps)", "GCP (BigQuery, Cloud Run Functions)", "Serverless"],
    },
    {
      category: "AppSec & Penetration Testing",
      icon: "🔓",
      items: ["Burp Suite Pro", "Rapid7 AppSec", "Coverity", "BlackDuck Hub"],
    },
    {
      category: "Software Engineering",
      icon: "💻",
      items: ["Python", "PowerShell", "BASH", "JavaScript", "C++", "DevSecOps", "CI/CD", "GitHub Actions", "Terraform"],
    },
    {
      category: "Vulnerability Management",
      icon: "🔍",
      items: ["CodeDX", "MS Defender", "Rapid7 InsightVM", "GuardDuty", "SecurityHub"],
    },
  ],

  // ── Projects ──
  projects: [
    {
      title: "Serverless Cloud Threat Response",
      description:
        "Automated AWS incident response system using Lambda for continuous monitoring, real-time threat containment, email-based remediation, and one-click recovery. Covering all phases of the NIST CSF.",
      tech: ["AWS Lambda", "DynamoDB", "API Gateway", "Shodan", "Python", "CloudFormation"],
      github: "https://github.com/20xAEsec/masters-project-serverless-cloud-threat-containment",
      featured: true,
    },
    {
      title: "Shodan Monitor API Wrapper",
      description:
        "Pythonic wrapper library for the Shodan Monitor API, providing a clean interface for programmatic external attack surface monitoring.",
      tech: ["Python", "Shodan API", "REST"],
      github: "https://github.com/20xAEsec/shodan_monitor",
      featured: false,
    },
    {
      title: "CryptoAI Telegram Bot",
      description:
        "Telegram application performing automated analysis on cryptocurrency tokens, providing real-time insight and intelligence.",
      tech: ["Python", "Telegram API", "AI/ML"],
      github: "https://github.com/20xAEsec/cryptoAI-telegram",
      featured: false,
    },
  ],

  // ── Contact / Social Links ──
  email: "ahmade171@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/ahmad-el-sha256/",
    github: "https://github.com/20xaesec",
  },

  // ── Languages ──
  languages: [
    { name: "English", level: "Native" },
    { name: "Arabic", level: "Native" },
    { name: "Spanish", level: "Intermediate" },
    { name: "German", level: "Beginner" },
  ],

  // ── Navigation labels ──
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};
