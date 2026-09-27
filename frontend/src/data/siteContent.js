import logo from "../assets/logo.png";

export const brand = {
  companyName: "Integra IT-OT Technologies",
  logo,
  logoAlt: "Integra IT-OT Technologies official logo",
  tagline: "Integrate. Optimize. Transform.",
  footerTagline: "Industrial Automation · AVEVA PI System · SCADA · DASHBOARD · IT-OT Cybersecurity",
  websiteLabel: "www.integraottechnologies.com",
  websiteUrl: "https://integraottechnologies.com/",
  email: "info@integraottechnologies.com",
  emailHref: "mailto:info@integraottechnologies.com",
  location: "Ahmedabad, Gujarat",
  linkedinUrl: "https://www.linkedin.com/company/integra-it-ot-technologies",
  phoneDisplay: "+91 99743 99912",
  phoneHref: "",
};

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
];

export const homeContent = {
  hero: {
    eyebrow: "Enterprise OT & Industrial Data",
    title: "Turn raw plant data into real-time intelligence",
    body:
      "We bridge process operations and enterprise analytics from edge connectivity and AVEVA PI System optimization to advanced data engineering to unlock operational excellence.",
    stats: [
      "Industrial Automation",
      "AVEVA PI System",
      "SCADA",
      "Power BI",
      "OT Cybersecurity",
    ],
  },
  dataFlow: {
    eyebrow: "Sensor to dashboard — how data moves",
    title: "Sensor to dashboard — how data moves",
    body:
      "The current website’s source-to-decision sequence is preserved and presented as a structured operational data flow.",
    stages: [
      { id: "01", title: "Field & SCADA", description: "Sensors, PLCs, RTUs, HMIs" },
      { id: "02", title: "PI System", description: "Historian & Asset Framework" },
      { id: "03", title: "Integration", description: "Python / API bridges" },
      { id: "04", title: "Power BI", description: "Modeling & dashboards" },
      { id: "05", title: "Decisions", description: "Plant & enterprise teams" },
    ],
  },
  servicesIntro: {
    eyebrow: "Services",
    title: "Services",
    body:
      "End-to-end IT & OT engineering from secure infrastructure and industrial connectivity to enterprise analytics and digital transformation.",
  },
  services: [
    {
      title: "AVEVA PI System",
      description:
        "Expert enterprise historian engineering covering PI Data Archive, Asset Framework (AF) templates, PI Vision dashboards, and high-availability buffering interfaces.",
      image: "/legacy-assets/images/pi-system.jpg",
    },
    {
      title: "SCADA & Automation",
      description:
        "High-performance SCADA application development, ergonomic HMI graphic layouts, alarm management rationalization, and automated shift reporting metrics.",
      image: "/legacy-assets/images/scada.jpg",
    },
    {
      title: "Operational Analytics",
      description:
        "Consolidating real-time plant data with enterprise systems to deliver interactive dashboards, tracking manufacturing metrics and plant efficiencies.",
      image: "/legacy-assets/images/powerbi.jpg",
    },
    {
      title: "OT Cybersecurity",
      description:
        "Protecting critical infrastructure through industrial security risk assessments, deep network segmentation following ISA/IEC 62443, and firewall configurations.",
      image: "/legacy-assets/images/cybersecurity.jpg",
    },
  ],
  industriesIntro: {
    eyebrow: "Sectors",
    title: "Industries We Serve",
    body: "Domain-specific delivery shaped around the realities of each plant floor.",
  },
  industries: [
    {
      title: "Pharmaceutical",
      description:
        "Ensuring absolute data integrity, strict regulatory validation compliance (FDA 21 CFR Part 11), and electronic batch record tracking.",
      image: "/legacy-assets/images/pharma.jpg",
      href: "/industries/pharmaceutical",
    },
    {
      title: "Oil & Gas",
      description:
        "Operational asset monitoring, pipeline telemetry aggregation, and centralized multi-site data management across downstream operations.",
      image: "/legacy-assets/images/oilgas.jpg",
      href: "/industries/oil-gas",
    },
    {
      title: "Petrochemicals",
      description:
        "Real-time process monitoring, cracking unit mass balance monitoring, utility profiling, and production yield tracking data support.",
      image: "/legacy-assets/images/Petrochemicals.jpg",
    },
    {
      title: "Power & Utilities",
      description:
        "Thermal efficiency metrics, continuous turbine performance monitoring, boiler health visibility, and smart utility grids.",
      image: "/legacy-assets/images/power.jpg",
      href: "/industries/power",
    },
  ],
  whyPartner: {
    eyebrow: "Why Integra",
    title: "Why Partner With Us",
    body: "We engineer for plant reality, not just for the spec sheet.",
    items: [
      {
        title: "Deep Domain Expertise",
        description:
          "We don't just write scripts; we understand plant process loops, piping, instrumentation constraints, and operational realities.",
      },
      {
        title: "Security by Design",
        description:
          "Industrial operations require a zero-risk approach. We maintain completely secure boundaries between control systems and business layers.",
      },
      {
        title: "Custom Automation",
        description:
          "We engineer custom Python and PowerShell bridge scripts and data connectors to ensure your enterprise applications interact seamlessly.",
      },
      {
        title: "24x7 Mission-Critical Support",
        description:
          "Industrial data infrastructure never sleeps. We provide continuous system health monitoring and priority engineering response.",
      },
    ],
  },
};

export const aboutContent = {
  hero: {
    eyebrow: "About Integra",
    title: "Industrial data platforms built for operational reality",
    body:
      "We help manufacturing and energy organizations connect plant-floor systems to enterprise intelligence through secure, scalable IT-OT integration.",
    tags: [
      "Bridging plant-floor systems to enterprise data",
      "Protecting industrial control systems",
      "Live data across every plant process",
      "Operational data into business intelligence",
    ],
  },
  overview: {
    eyebrow: "Who We Are",
    title: "From Plant Data to Business Intelligence",
    paragraphs: [
      "Integra OT Technologies is a specialized engineering and technology integration company focused on Industrial Automation, AVEVA PI System configurations, SCADA systems, Power BI reporting, Industrial Cybersecurity, and seamless IT-OT Integration.",
      "We serve as a trusted partner for modern industrial organizations, engineering end-to-end data infrastructure frameworks that extract raw, disconnected machine telemetry from diverse plant environments and translate it into clear, executive analytics.",
      "Technology alone doesn't improve operations understanding the process does. We combine deep expertise in industrial automation with IT-OT integration to transform raw operational data into clear, contextualized information. By representing process data in an intuitive and meaningful way, we help teams monitor performance, identify optimization opportunities, troubleshoot issues faster, and make confident operational decisions.",
    ],
    cards: [
      "Industrial Automation",
      "AVEVA PI System configurations",
      "SCADA systems",
      "Power BI reporting",
      "Industrial Cybersecurity",
      "IT-OT Integration",
    ],
  },
  missionVision: {
    eyebrow: "Mission & Vision",
    title: "Mission & Vision",
    body: "The principles that guide every deployment we deliver from sensor to boardroom.",
    items: [
      {
        title: "Our Mission",
        description:
          "To empower industries with secure, intelligent, and highly available IT-OT ecosystems that bridge operational technology with enterprise intelligence. By combining deep process knowledge with expertise in industrial automation, cybersecurity, networking, and data engineering, we transform complex operational data into meaningful insights that improve visibility, simplify decision-making, identify optimization opportunities, and drive operational excellence from the plant floor to the boardroom.",
        image: "/legacy-assets/images/mission-bg.png",
      },
      {
        title: "Our Vision",
        description:
          "To become a trusted global partner in Industrial Automation, IT-OT Integration, and Digital Transformation by delivering secure, intelligent, and innovative engineering solutions that bridge industrial operations with enterprise intelligence. We aspire to help organizations unlock the full potential of their operational data, optimize processes, strengthen cyber resilience, and drive sustainable operational excellence through technology, expertise, and continuous innovation.",
        image: "/legacy-assets/images/vision-bg.png",
      },
    ],
  },
  values: {
    eyebrow: "What We Stand For",
    title: "Core Values",
    body: "Principles that shape how we design, integrate, and support every client engagement.",
    items: [
      {
        title: "Domain Expertise",
        description:
          "Technical excellence rooted in real industrial processes. Our solutions are designed around plant operations, process reliability, and operational efficiency not generic IT templates.",
      },
      {
        title: "Security by Design",
        description:
          "Industrial environments require secure architectures from the ground up. We implement cybersecurity best practices across every layer of the IT-OT ecosystem not as an afterthought.",
      },
      {
        title: "Data Integrity",
        description:
          "Reliable decisions require reliable data. Our architectures ensure operational information is accurate, complete, and trusted from the sensor to the CEO's dashboard.",
      },
      {
        title: "Client Partnership",
        description:
          "We work as an extension of your team not as a vendor. Every engagement is built around your constraints, timelines, and long-term operational goals.",
      },
      {
        title: "Uptime First",
        description:
          "Every architecture we design prioritizes continuity. High-availability buffering, redundant interfaces, and proactive monitoring keep your plant running without interruption.",
      },
      {
        title: "Continuous Improvement",
        description:
          "After go-live, we stay engaged optimizing data flows, auditing tag integrity, and evolving your dashboards as your operational needs grow.",
      },
    ],
  },
  expertise: {
    eyebrow: "Technical Stack",
    title: "Our Areas of Expertise",
    items: [
      "AVEVA PI System Engineering",
      "SCADA Systems & HMIs",
      "Power BI Operational Reporting",
      "Secure IT-OT Integration Bridge",
      "ISA/IEC 62443 OT Cybersecurity",
      "Industrial Process Automation",
      "Field Process Instrumentation",
      "ISA-95 Enterprise Data Architecture",
      "Historian Data Infrastructure & Buffering",
      "OPC UA / DA Interface Connectivity",
    ],
  },
  advantage: {
    eyebrow: "Why Partner With Us",
    title: "The Integra Advantage",
    body: "We bring more than technical skills — we bring deep industry context and a commitment to long-term outcomes.",
    items: [
      "Our engineers are specialists in industrial environments not generalists adapting IT practices.",
      "Every project follows a structured change-management process no unplanned downtime, ever.",
      "You get a named engineer, not a ticket queue direct access to the team that built your system.",
      "Proactive health checks catch issues before they become incidents keeping your plant floor running.",
    ],
  },
  cta: {
    title: "Let's build your industrial data platform",
    body:
      "Whether it's Industrial Automation, IT Infrastructure, OT Cybersecurity, or Data Solutions, we're here to help. Tell us about your requirements.",
  },
};

export const servicesContent = {
  hero: {
    eyebrow: "Services",
    title: "Engineering services that power industrial operations",
    body:
      "High-performance data solutions built for operational scale protecting asset boundaries and delivering actionable plant metrics from sensor to boardroom.",
  },
  intro: {
    eyebrow: "What We Do",
    title: "Our Core Service Lines",
    body: "Each engagement is scoped, staffed, and executed by engineers with deep OT domain expertise.",
  },
  services: [
    {
      title: "AVEVA PI System Engineering",
      description:
        "Complete execution framework covering data archive migrations, asset framework mapping infrastructure, and customized real-time processing visuals for plant-wide visibility.",
      items: [
        "PI Data Archive Upgrades & Patch Deployment",
        "Asset Framework (AF) Templates & Element Hierarchies",
        "PI Vision Dashboard Layout Customization",
        "PI Vision Custom Symbol Creation & Extensibility",
        "High-Availability Buffering & OPC Interface Mapping",
      ],
    },
    {
      title: "SCADA & Automation Systems",
      description:
        "Ergonomic HMI automation engineered directly for production line clarity, process control tracking, and precise shift telemetry loop management across plant environments.",
      items: [
        "High-Performance HMI Graphical Designs",
        "Industrial Alarm Rationalization & Auditing",
        "Automated Production Shift Report Matrices",
        "PLC Data Loop Mapping & Interlocking Protocols",
      ],
    },
    {
      title: "Operational Data Analytics",
      description:
        "Extracting raw historian tables and processing loop registries to build responsive analytical tracking modules and executive corporate insight dashboards.",
      items: [
        "Interactive Power BI Process Dashboards",
        "Overall Equipment Effectiveness (OEE) Tracking",
        "Plant Mass Balance & Utility Profiling Modules",
        "Historical Equipment Downtime Analytics",
      ],
    },
    {
      title: "Industrial OT Cybersecurity",
      description:
        "Securing plant networks from environmental and digital threat vectors without creating pipeline latency issues or asset operational processing loop hazards.",
      items: [
        "ISA/IEC 62443 Industrial Network Risk Assessment",
        "Deep Perimeter Firewall & DMZ Configurations",
        "Secure Remote Access Infrastructure Architectures",
        "Unidirectional Data Gateways & Protocol Segmentation",
      ],
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      description:
        "Comprehensive SLA programs engineered to maximize uptime, audit process tag integrity, and keep server systems completely patched and performant.",
      items: [
        "24/7 Priority Incident Engineering Support",
        "Proactive PI System Health Checks & Optimization",
        "Interface Connectivity & Buffer Pool Maintenance",
        "Scheduled Application Backup & Disaster Recovery Audits",
      ],
    },
    {
      title: "IT/OT Network Integration",
      description:
        "Bridging enterprise IT systems with plant-floor OT infrastructure enabling secure, seamless data flow from PLC to ERP without compromising operational safety.",
      items: [
        "IT/OT Convergence Architecture Design",
        "Data Historian to Enterprise System Bridging",
        "Industrial Protocol Translation (Modbus, OPC-UA)",
        "Network Segmentation & VLAN Configuration",
      ],
    },
  ],
  advantage: aboutContent.advantage,
  delivery: {
    eyebrow: "Execution Framework",
    title: "How We Deploy Solutions",
    body: "A structured three-phase approach that minimizes risk and maximizes speed-to-value.",
    items: [
      {
        phase: "Phase 01",
        title: "Assess & Architect",
        description:
          "We analyze your target process tags, instrument constraints, and system control boundaries to build zero-risk deployment blueprints tailored to your plant.",
      },
      {
        phase: "Phase 02",
        title: "Integrate & Validate",
        description:
          "We build automated Python/PowerShell bridges, tune high-availability archive buffers, and run concurrent validation tests before any go-live cutover.",
      },
      {
        phase: "Phase 03",
        title: "Optimize & Support",
        description:
          "We supply 24/7 mission-critical health monitoring and proactive optimization loops to preserve high data integrity from plant floor to executive level.",
      },
    ],
  },
  cta: {
    title: "Ready to modernize your plant operations?",
    body:
      "Tell us about your OT environment. Our engineers will scope a solution tailored to your assets, constraints, and operational goals no generic proposals.",
  },
};

export const industriesContent = {
  hero: {
    eyebrow: "Industries",
    title: "Tailored IT-OT solutions for every plant floor",
    body:
      "Specialized data infrastructure architectures that strictly respect unique regulatory frameworks, asset operating constraints, and engineering protocols.",
  },
  intro: {
    eyebrow: "Sectors",
    title: "Industries We Serve",
    body: "Domain-specific delivery shaped around the realities of each plant floor.",
  },
  industries: [
    {
      title: "Pharmaceutical",
      description:
        "Ensuring absolute process data integrity, full visibility across critical environmental attributes, automated validation mapping layouts, and batch genealogy tracking.",
      tags: ["FDA 21 CFR Part 11", "GAMP 5"],
      image: "/legacy-assets/images/pharma.jpg",
      href: "/industries/pharmaceutical",
    },
    {
      title: "Oil & Gas",
      description:
        "Aggregating highly distributed telemetry, pipeline monitoring loops, and process flow rates into secure enterprise historians to optimize production yield.",
      tags: ["Telemetry", "Downstream"],
      image: "/legacy-assets/images/oilgas.jpg",
      href: "/industries/oil-gas",
    },
    {
      title: "Petrochemicals",
      description:
        "Engineering complex asset framework tracking loops, real-time mass balances, continuous process auditing, and high-availability infrastructure.",
      tags: ["Mass Balance", "Cracking Analytics"],
      image: "/legacy-assets/images/Petrochemicals.jpg",
    },
    {
      title: "Power & Utilities",
      description:
        "Tracking high-speed continuous thermal metrics, steam turbine degradation patterns, live utility boiler processing health, and actionable load profiling dashboards.",
      tags: ["Thermal Efficiency", "Smart Grid"],
      image: "/legacy-assets/images/power.jpg",
      href: "/industries/power",
    },
  ],
  cta: {
    title: "Ready to modernize your plant operations?",
    body: "Tell us about your OT environment. Our engineers will scope a solution tailored to your assets.",
  },
};

export const contactContent = {
  hero: {
    eyebrow: "Connect",
    title: "Get in touch with our engineers",
    body:
      "Let's discuss how we can help optimize your plant connectivity infrastructure and maximize asset data availability layers securely.",
  },
  infoCards: [
    {
      title: "Engineering Query Routing",
      value: brand.email,
      href: brand.emailHref,
    },
    {
      title: "Phone",
      value: brand.phoneDisplay,
      href: brand.phoneHref,
    },
    {
      title: "Operations Headquarters",
      value: brand.location,
    },
    {
      title: "Website",
      value: brand.websiteLabel,
      href: brand.websiteUrl,
    },
  ],
  brochure: {
    title: "Company Brochure",
    body: "Capabilities, platforms & engineering scope — PDF",
    href: "/Integra-OT-Technologies-Brochure.pdf",
  },
  form: {
    title: "Submit Specification Request",
    subtitle:
      "The form posts to the local FastAPI backend and stores inquiries in MySQL once backend environment variables are configured.",
  },
};

export const industryProjects = {
  pharmaceutical: {
    title: "Pharmaceutical Industry",
    subtitle: "Digital Transformation Solutions for Pharma Manufacturing",
    projects: [
      {
        title: "Project 1 – AVEVA PI System Implementation",
        paragraphs: [
          "Client: Leading Pharmaceutical Manufacturing Facility",
          "Work Performed:",
          "Benefits: Improved production visibility and reporting efficiency.",
        ],
        items: [
          "PI Data Archive Installation",
          "PI AF Configuration",
          "PI Vision Dashboard Development",
          "Real-Time Production Monitoring",
          "Historian Data Collection",
        ],
      },
      {
        title: "Project 2 – Power BI Reporting",
        items: ["KPI Dashboards", "Batch Reporting", "Production Analytics", "Management Reports"],
      },
      {
        title: "Project 3 – SCADA Integration",
        items: ["SCADA Connectivity", "Alarm Monitoring", "Historical Data Collection", "Operational Analytics"],
      },
    ],
    footer: "Industrial Automation | AVEVA PI | SCADA | Power BI",
  },
  "oil-gas": {
    title: "Oil & Gas Industry",
    subtitle: "Industrial Data Management & Operational Excellence Solutions",
    projects: [
      {
        title: "Project 1 – ONGC Digital Monitoring",
        paragraphs: ["Real-time operational monitoring using AVEVA PI System."],
        items: [
          "PI Data Archive Implementation",
          "OPC UA Integration",
          "Production Monitoring",
          "Performance Dashboards",
        ],
      },
      {
        title: "Project 2 – IOCL Analytics Platform",
        items: [
          "Power BI Dashboard Development",
          "KPI Reporting",
          "Asset Monitoring",
          "Management Reporting",
        ],
      },
      {
        title: "Project 3 – GAIL Data Integration",
        items: ["SCADA Integration", "REST API Integration", "Historical Data Collection", "Enterprise Reporting"],
      },
    ],
    footer: "Oil & Gas Digital Transformation Solutions",
  },
  lng: {
    title: "LNG Industry",
    subtitle: "LNG Terminal Monitoring & Digital Transformation Solutions",
    projects: [
      {
        title: "Project 1 – Petronet LNG Limited (PLL)",
        paragraphs: ["Complete AVEVA PI System implementation for LNG operations monitoring."],
        items: [
          "PI Data Archive Configuration",
          "PI AF Development",
          "PI Vision Dashboards",
          "LNG Production Monitoring",
          "Reporting Automation",
        ],
      },
      {
        title: "Project 2 – LNG Loading Bay Monitoring",
        items: ["Truck Loading Monitoring", "Tank Monitoring", "Alarm Management", "Performance Analytics"],
      },
      {
        title: "Project 3 – Enterprise Analytics",
        items: ["Power BI Dashboards", "KPI Monitoring", "Executive Reporting", "Energy Analytics"],
      },
    ],
    footer: "LNG Digital Transformation Solutions",
  },
  power: {
    title: "Power Industry",
    subtitle: "Power Generation, Distribution & Energy Analytics Solutions",
    projects: [
      {
        title: "Project 1 – Tata Power",
        paragraphs: ["Industrial Data Management and Performance Monitoring Solution."],
        items: [
          "AVEVA PI System Implementation",
          "PI AF Development",
          "PI Vision Dashboards",
          "Operational Monitoring",
          "Automated Reporting",
        ],
      },
      {
        title: "Project 2 – Power Plant Monitoring",
        items: [
          "Real-Time Generation Monitoring",
          "Equipment Health Monitoring",
          "Alarm Management",
          "KPI Tracking",
          "Historical Data Analysis",
        ],
      },
      {
        title: "Project 3 – Energy Analytics",
        items: [
          "Power BI Dashboards",
          "Energy Consumption Analytics",
          "Performance Reports",
          "Executive Dashboards",
          "Data Visualization",
        ],
      },
    ],
    technologiesTitle: "Technologies Used",
    technologies: ["AVEVA PI", "PI Vision", "Power BI", "OPC UA", "SQL Server", "Industrial IoT"],
    footer: "Power Industry Digital Transformation Solutions",
  },
};

