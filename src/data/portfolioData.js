export const personalInfo = {
  name: "Devesh Mishra",
  tagline: "Circular Materials & Sustainability Strategist",
  subtitle: "Chemical engineer combining material research, lifecycle analysis, commercial strategy, and venture building.",
  bio: "I turn waste streams, material systems, and technical research into measurable, commercially viable solutions.",
  education: "Chemical Engineering at VNIT Nagpur · Expected 2028",
  email: "deveshmishra2811@gmail.com",
  phone: "+91 8928133816",
  linkedin: "https://www.linkedin.com/in/devesh-mishra-6b2352357",
  location: "Nagpur, India",
  resumeUrl: "/documents/Devesh_Mishra_Resume.pdf",
  photoUrl: "/devesh-pic.jpeg"
};

export const impactMetrics = [
  {
    id: "proposals",
    value: 7,
    suffix: "",
    label: "Technical Proposals",
    subtext: "Circular economy upcycling pathways designed"
  },
  {
    id: "portfolio",
    value: 4.87,
    prefix: "₹",
    suffix: " Cr",
    decimals: 2,
    label: "Project Portfolio",
    subtext: "Proposed capital for industrial waste valorisation"
  },
  {
    id: "case-studies",
    value: 308,
    suffix: "",
    label: "Case Studies Analysed",
    subtext: "Quantitative sustainability benchmark dataset"
  },
  {
    id: "waste-diversion",
    value: 4.8,
    suffix: " kg/m²",
    decimals: 1,
    label: "Plastic Diversion Rate",
    subtext: "Direct waste redirection via construction formwork"
  }
];

export const caseStudies = [
  {
    id: "circular-angul",
    title: "IIM Mumbai - Circular Angul",
    headline: "Designing Scalable Pathways for Plastic-Waste Upcycling",
    category: "Circular Materials",
    institution: "IIM Mumbai",
    logoDomain: "iimb.ac.in",
    customLogoUrl: "/iim-logo.png",
    documentUrl: "/documents/IIM_Mumbai_LOR.pdf",
    documentLabel: "View Letter of Recommendation",
    summary: "Comprehensive strategy translating low-value plastic waste into durable infrastructure assets across an 18-month execution framework in Angul district.",
    metrics: [
      { label: "Proposals", value: "7 Pathways" },
      { label: "Cases Analysed", value: "308 Studies" },
      { label: "Timeline", value: "18 Months" }
    ],
    sections: {
      problem: "Angul district faced severe environmental accumulation of low-value, non-recyclable multi-layered plastics (MLP) and flexible single-use packaging with zero commercial collection incentive.",
      context: "Collaborated in partnership with IIM Mumbai to create an industrial ecosystem blueprint capable of valorising municipal and post-consumer plastic waste at regional scale.",
      constraints: "Strict technical standards for load bearing, capital expenditure limits (<₹5 Cr), strict local feedstock collection logistics, and zero toxic leaching requirements.",
      role: "Lead Technical & Sustainability Strategist - owned material stream analysis, technical process selection, economic modeling, and proposal synthesis.",
      research: "Reviewed 308 international circular economy case studies, IS 15490 / IRC:SP:98 standards for bitumen modification, and secondary plastic degradation kinetics.",
      analysis: "Evaluated 12 potential upcycling pathways against technical feasibility, capex/opex efficiency, community benefit, and carbon reduction using multi-criteria matrix analysis.",
      solution: "Selected 7 high-impact upcycling pathways: Plastic-modified Bitumen Roads, Recycled Paver Blocks, Fly-Ash Composite Panels, Micro-pellet Feedstocks, and Community Sorting Hubs.",
      impact: "Formulated a ₹4.87 Crore phased portfolio recommendation with projected 100% diversion of regional MLP waste stream over 18 months.",
      reflection: "Demonstrated that waste upcycling requires aligning chemical compatibility of polymers with local municipal logistics and infrastructure supply chains."
    },
    diagramType: "flow"
  },
  {
    id: "econe",
    title: "ECONE (Recyclink)",
    headline: "Turning Urban Plastic Waste into Reusable Construction Formwork",
    category: "Venture Building & LCA",
    institution: "ECONE (Recyclink)",
    logoDomain: "econe.in",
    customLogoUrl: "/econe-logo.png",
    documentUrl: "https://econe.vercel.app/",
    documentLabel: "Website",
    summary: "Engineered high-durability Polypropylene-Basalt hybrid construction formwork to replace timber plywood, backed by a circular rental business model.",
    metrics: [
      { label: "Cost Reduction", value: ">35%" },
      { label: "Plastic Diverted", value: "4.8 kg/m²" },
      { label: "Payback Period", value: "4.3 Months" },
      { label: "Gross Margin", value: "53.5%" }
    ],
    sections: {
      problem: "Traditional construction relies heavily on film-faced plywood formwork which degrades after 4-6 uses, causing high deforestation, waste generation, and recurring site costs.",
      context: "Venture incubation project under ECONE, targeting urban real-estate developers and infrastructure contractors demanding sustainable, cost-efficient building tools.",
      constraints: "Formwork must withstand 60 kN/m² hydrostatic concrete pressure, tolerate harsh site weather, remain lightweight (<14 kg/m²), and support at least 50 reuses.",
      role: "Co-Founder & Chief Product Strategist - led material formulation, lifecycle economic modeling, venture pitch creation, and initial site feedback surveys.",
      research: "Investigated fiber-reinforced thermoplastic composites (Polypropylene + mineral basalt needle fibers), tensile testing data, and closed-loop extrusion molding techniques.",
      analysis: "Calculated unit economics comparing ₹650/m²/month rental against outright plywood purchasing, proving a 4.3-month capital payback and 53.5% gross margin.",
      solution: "Created ECONE Modular Composite Formwork - 100% recyclable PP-basalt panels with interlocking edges, paired with a clean reverse-logistics buyback guarantee.",
      impact: "Achieved >35% lifecycle cost reduction for contractors, 40% carbon footprint reduction, and 4.8 kg plastic waste diverted per square meter of panel.",
      reflection: "Highlighting that material innovation becomes commercially unstoppable when circularity directly lowers operational costs for conservative B2B buyers."
    },
    diagramType: "economics"
  },
  {
    id: "ceramic-membrane",
    title: "Ceramic Membrane Sustainability Analysis",
    headline: "Selecting Waste-Derived Ceramic Membranes through LCA and Multi-Criteria Analysis",
    category: "Lifecycle Assessment",
    institution: "VNIT Nagpur",
    logoDomain: "vnit.ac.in",
    documentUrl: "/documents/BTech_Thesis.pdf",
    documentLabel: "View B.Tech Thesis",
    summary: "Multi-criteria decision modeling (TOPSIS, MIVES, MOORA) combined with OpenLCA to rank waste-derived ceramic membranes for industrial wastewater treatment.",
    metrics: [
      { label: "Methods", value: "TOPSIS / MIVES / MOORA" },
      { label: "Tool", value: "OpenLCA + Ecoinvent" },
      { label: "Alternatives", value: "3 Waste Streams" }
    ],
    sections: {
      problem: "Commercial alumina/zirconia ceramic membranes require ultra-high sintering temperatures (>1400°C) with significant carbon footprints, making eco-friendly wastewater treatment expensive.",
      context: "Academic research project at VNIT Department of Chemical Engineering evaluating circular membrane fabrication from industrial inorganic waste.",
      constraints: "Membranes must achieve mechanical strength (>20 MPa), target porosity (>35%), chemical stability across pH 2-12, and lower embodied energy.",
      role: "Lead LCA & MCDM Analyst - built OpenLCA lifecycle inventories, performed Ecoinvent impact calculations, and coded TOPSIS/MOORA optimization scripts.",
      research: "Synthesized data on fly ash, rice husk ash, and blast furnace slag membrane precursors, sintering thermal profiles, and flux performance benchmarks.",
      analysis: "Applied TOPSIS (Technique for Order Preference by Similarity to Ideal Solution), MIVES, and MOORA frameworks across 7 environmental, technical, and economic criteria.",
      solution: "Determined that fly-ash/kaolin formulations sintered at 1150°C achieved the optimal compromise between flux rates (180 L/m²h.bar) and minimal carbon emissions.",
      impact: "Demonstrated a 28% reduction in global warming potential (GWP) compared to conventional pure alumina membranes without compromising filtration efficiency.",
      reflection: "Cross-validating decision algorithms (TOPSIS vs MOORA) ensures robust material selection decisions resilient to subjective criteria weighting."
    },
    diagramType: "radar"
  },
  {
    id: "butyl-acetate",
    title: "100 T/Day Industrial Butyl Acetate Plant Design",
    headline: "Designing a 100 T/day Industrial Butyl Acetate Process",
    category: "Chemical Process Design",
    institution: "VNIT Nagpur",
    logoDomain: "vnit.ac.in",
    documentUrl: "/documents/Butyl_Acetate_Design.pdf",
    documentLabel: "View Design Report",
    summary: "End-to-end process simulation, mass/energy balance calculation, equipment sizing, and safety integration for Fischer-Speier esterification.",
    metrics: [
      { label: "Capacity", value: "100 Tons/Day" },
      { label: "Purity", value: "99.5 wt%" },
      { label: "Yield", value: "96.8%" }
    ],
    sections: {
      problem: "High industrial demand for high-purity solvent grade n-Butyl Acetate requires energy-efficient, continuous liquid-phase esterification with strict azeotropic separation.",
      context: "Major Senior Plant Design Project at VNIT Chemical Engineering, simulating a commercial chemical manufacturing facility from raw materials to final storage.",
      constraints: "Production target of 100 metric tons/day at 99.5% purity, rigorous hazardous chemical handling (n-butanol, acetic acid, sulfuric acid catalyst), and heat integration.",
      role: "Lead Process Design Engineer - responsible for CSTR reactor sizing, azeotropic distillation column design, decanter phase-equilibrium kinetics, and PFD generation.",
      research: "Utilized Aspen Plus thermodynamic models (NRTL/UNIQUAC), binary vapor-liquid-liquid equilibria (VLLE) data for water-butanol-butyl acetate system.",
      analysis: "Calculated reaction kinetics, residence times, reflux ratios, tray counts (24 stages), and heat exchange networks to minimize steam usage.",
      solution: "Designed an integrated CSTR system coupled with a packed-bed reactive distillation unit and continuous gravity decanter for automatic water phase separation.",
      impact: "Delivered a complete, defensible engineering dossier including Equipment Data Sheets, Utility Balances, Piping & Instrumentation Diagrams, and HAZOP safety guidelines.",
      reflection: "Rigorous chemical engineering fundamentals provide the bedrock for analyzing process efficiency, yield optimization, and industrial safety."
    },
    diagramType: "pfd"
  },
  {
    id: "vnit-venture-vault",
    title: "VNIT Ventures Vault Foundation",
    headline: "Founder Activation Strategy & Venture Incubation Pipeline",
    category: "Venture Ecosystem",
    institution: "VNIT Ventures Vault Foundation",
    logoDomain: "vnit.ac.in",
    customLogoUrl: "/v3f-logo.png",
    logoSize: 64,
    summary: "Strategic founder acquisition funnel, startup ecosystem building, and mentor network development across VNIT and regional incubation centers.",
    metrics: [
      { label: "Outreach", value: "150+ Startups" },
      { label: "Network", value: "E-Cell & Mentors" },
      { label: "Funnel Conversion", value: "24% Seeded" }
    ],
    sections: {
      problem: "Student researchers and early-stage technical founders often lack structured mentorship, commercial positioning, and capital pathways to convert lab research into market startups.",
      context: "Leadership role within VNIT Ventures Vault Foundation aimed at building a world-class university startup incubator.",
      constraints: "Limited initial operating budget, diverse technical domains (deep tech, clean tech, SaaS), and high competition for top-tier mentor time.",
      role: "Growth & Ecosystem Lead - designed founder activation campaigns, structured pitch events, and built partner outreach channels.",
      research: "Analyzed successful university venture models (MIT Sandbox, Y Combinator startup school, IIT Bombay SINE) to tailor an effective founder journey.",
      analysis: "Mapped the startup acquisition pipeline from initial idea drop to incubation panel evaluation, identifying drop-off bottlenecks in pitch deck preparation.",
      solution: "Launched targeted founder workshops, 1-on-1 commercial readiness reviews, and streamlined legal/financial orientation modules.",
      impact: "Engaged 150+ student teams, resulting in 12 high-potential ventures entering formal incubation pipelines with active investor matching.",
      reflection: "Venture creation in deep tech requires bridging the communication gap between technical researchers and commercial venture capital investors."
    },
    diagramType: "pipeline"
  },
  {
    id: "unsw-intern",
    title: "AI Marketing Research Analyst",
    headline: "AI-driven Marketing and Customer Acquisition Strategy",
    category: "Market Research",
    institution: "UNSW (University of New South Wales)",
    logoDomain: "unsw.edu.au",
    institutionLabel: "UNSW Australia",
    logoSize: 64,
    documentUrl: "/documents/UNSW_Certificate.pdf",
    documentLabel: "View Certificate",
    summary: "Conducted AI-driven marketing analysis, user research, product roadmap evaluation, and digital customer acquisition funnels.",
    metrics: [
      { label: "Focus", value: "AI Market Research" },
      { label: "Target", value: "User Behavior Modeling" },
      { label: "Outcome", value: "Product Roadmap Design" }
    ],
    sections: {
      problem: "Identifying scalable customer acquisition channels using emerging AI marketing paradigms.",
      context: "Internship at the University of New South Wales analyzing digital marketing strategies.",
      constraints: "Data privacy regulations and rapidly changing AI technology landscape.",
      role: "Research Intern - executed user behavior modeling and evaluated digital marketing funnels.",
      research: "Investigated AI-driven personalization, conversion rate optimization, and automated customer journeys.",
      analysis: "Synthesized qualitative user research into actionable product roadmap recommendations.",
      solution: "Proposed a cohesive digital acquisition strategy leveraging AI for hyper-personalized marketing.",
      impact: "Provided strategic roadmap recommendations for optimizing digital customer engagement.",
      reflection: "AI in marketing requires balancing algorithmic personalization with genuine user trust."
    },
    diagramType: "flow"
  }
];

export const workingMethod = [
  {
    step: "01",
    name: "Research",
    title: "Deep Material & Market Context",
    desc: "Deconstruct material properties, waste stream kinetics, regulatory standards, and baseline market economics before proposing intervention."
  },
  {
    step: "02",
    name: "Model",
    title: "Quantitative Systems & Flow Modeling",
    desc: "Translate physical problems into rigorous mass/energy balances, LCA inventories, decision matrices, and financial unit-economic models."
  },
  {
    step: "03",
    name: "Evaluate",
    title: "Multi-Criteria Compromise Ranking",
    desc: "Compare alternatives across technical feasibility, environmental footprint (GWP, water), capital intensity, and execution risk."
  },
  {
    step: "04",
    name: "Validate",
    title: "Empirical Testing & Stakeholder Feedback",
    desc: "Validate assumptions through lab-scale testing, OpenLCA verification, customer willingness-to-pay interviews, and field trials."
  },
  {
    step: "05",
    name: "Scale",
    title: "Commercialization & Ecosystem Execution",
    desc: "Package research into bankable project proposals, venture pitch structures, B2B pilot agreements, and regional policy frameworks."
  }
];

export const leadershipRoles = [
  {
    role: "Finance & Legal Director",
    organization: "180 Degrees Consulting VNIT",
    logoDomain: "180dc.org",
    logoSize: 100,
    period: "2024 - Present",
    desc: "Overseeing financial allocation, legal compliance, project contracting, and commercial strategy for student-led social impact consulting engagements.",
    highlights: ["Financial governance", "Legal framework design", "Non-profit client contracting"]
  },
  {
    role: "Treasurer / Growth & Partnership Manager",
    organization: "Entrepreneurship Cell VNIT",
    logoDomain: "vnit.ac.in",
    customLogoUrl: "/ecell-logo.png",
    logoSize: 100,
    blendWhite: true,
    period: "2023 - Present",
    desc: "Managing annual organizational budget, securing corporate sponsorships, and expanding regional founder incubation ecosystems.",
    highlights: ["Budget stewardship", "Corporate partnerships", "Ecosystem expansion"]
  },
  {
    role: "Mentor & Educator",
    organization: "Introduction to Entrepreneurship, VNIT",
    logoDomain: "vnit.ac.in",
    period: "2024 - Present",
    desc: "Mentoring first-year student founders in venture validation, pitch construction, market research, and financial unit economics.",
    highlights: ["1-on-1 mentorship", "Curriculum support", "Venture coaching"]
  }
];

export const capabilities = [
  {
    category: "Circular Materials",
    skills: ["Waste Valorization", "Circular Economy Models", "Material-Flow Analysis", "Sustainable Construction Materials", "Polymer Upcycling"]
  },
  {
    category: "Sustainability Assessment",
    skills: ["Lifecycle Assessment (LCA)", "OpenLCA", "GaBi", "Ecoinvent", "Carbon Footprint Modeling", "ESG Strategy"]
  },
  {
    category: "Decision & Research Methods",
    skills: ["TOPSIS Ranking", "MOORA Framework", "MIVES Analysis", "Literature Synthesis", "Primary Survey Design", "Market Gap Analysis"]
  },
  {
    category: "Product & Venture Development",
    skills: ["Business Modeling", "Unit Economics", "Product Roadmap Strategy", "Partnership Execution", "Pitch Preparation", "Incubation Management"]
  },
  {
    category: "Digital & Engineering Tools",
    skills: ["Python", "Chemical Engineering Process Simulation", "Aspen Plus", "React / Next.js", "REST APIs", "n8n Workflow Automation"]
  }
];

export const awards = [
  {
    title: "National Business Case Winner",
    organizer: "SRCC (Shri Ram College of Commerce)",
    logoDomain: "srcc.edu",
    customLogoUrl: "/srcc-logo.png",
    logoSize: 64,
    documentUrl: "/documents/SRCC_Certificate.pdf",
    documentLabel: "View Certificate",
    metric: "1st Place among 4,000+ teams",
    desc: "Awarded top honor for strategic market entry, financial modeling, and sustainable supply chain recommendation."
  },
  {
    title: "National Business Case Runner-Up",
    organizer: "IIT Bombay",
    logoDomain: "iitb.ac.in",
    customLogoUrl: "/iitb-logo.svg",
    logoSize: 64,
    documentUrl: "/documents/IIT_Bombay_Tatva.pdf",
    documentLabel: "View Certificate",
    metric: "2nd Place among 2,000+ teams",
    desc: "Recognized for high-impact circular economic model and industrial scaling strategy."
  },
  {
    title: "HPAIR Asia Conference Delegate",
    organizer: "Harvard Project for Asian & International Relations",
    logoDomain: "harvard.edu",
    customLogoUrl: "/harvard-logo.svg",
    documentUrl: "/documents/ACONF_2026_Acceptance.pdf",
    documentLabel: "View Acceptance Letter",
    metric: "Selected International Delegate",
    desc: "Participated in high-level discussions on energy transition, circular economy, and global technology leadership."
  },
  {
    title: "Third Prize, Bronze Medalist at Hult Prize, an international social entrepreneurship competition",
    organizer: "Hult Prize Foundation",
    logoDomain: "hultprize.org",
    logoSize: 48,
    imageUrl: "/hult-prize.jpeg",
    metric: "Bronze Medalist",
    desc: "Recognized for sustainable business innovation addressing UN Sustainable Development Goals."
  },
  {
    title: "Inter-NIT Sports Gold Medalist",
    organizer: "National Institutes of Technology",
    logoDomain: null,
    customIcon: 'medal',
    metric: "Handball Champion",
    desc: "Represented VNIT Nagpur in national inter-university championship."
  }
];

export const aboutNarrative = {
  quote: "Materials materialize impact when technical physics, environmental life cycles, and market economics converge.",
  body: `I am a Chemical Engineering undergraduate at VNIT Nagpur with a relentless focus on the intersection where material science meets real-world execution.

Rather than treating sustainability as a vague ideal, I approach circular materials through rigorous quantitative discipline: mass balances, lifecycle assessment (LCA), multi-criteria decision algorithms (TOPSIS, MIVES), and commercial unit economics.

Whether designing 100 T/day industrial process plants, formulating Polypropylene-Basalt hybrid construction formwork to replace timber at ECONE, or structuring ₹4.87 Crore municipal waste upcycling proposals with IIM Mumbai, my mission is constant: transforming waste streams into scalable, economically self-sustaining value systems.`
};
