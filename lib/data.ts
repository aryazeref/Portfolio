export type ProjectCategory = "Hardware" | "Embedded & DSP" | "Software & Data";
export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  context: string;
  description: string;
  featured?: boolean;
  tags: string[];
  visual: "fir" | "processor" | "pipeline" | "phasor" | "analytics" | "web";
  highlights: string[];
  challenge: string;
  approach: string;
  outcome: string;
  github?: string;
  note?: string;
};

export const identity = {
  name: "Arya Hafiidh Kumalajati",
  shortName: "Arya Kumalajati",
  email: "aryahafiidh@gmail.com",
  github: "https://github.com/aryazeref",
  linkedin: "https://www.linkedin.com/in/aryazeref",
  location: "Aachen, Germany",
  cv: "/arya-kumalajati-cv.pdf",
};

export const projects: Project[] = [
  {
    slug: "fpga-fir-accelerator",
    number: "01",
    title: "FPGA FIR Accelerator",
    subtitle: "A signal-processing datapath, designed at the RTL level.",
    category: "Hardware",
    year: "2026",
    context: "Personal hardware project",
    description:
      "Designed a finite impulse response (FIR) accelerator in SystemVerilog, connecting datapath, state-machine control, and FPGA implementation tools.",
    featured: true,
    tags: ["SystemVerilog", "RTL", "Vivado", "Kintex-7"],
    visual: "fir",
    highlights: [
      "Implemented RTL with sequenced control and datapath stages.",
      "Ran directed, self-checking behavioral simulations in Vivado 2025.2.",
      "Documented the code in a public GitHub repository.",
    ],
    challenge:
      "Translate a digital filter's multiply–accumulate behavior into an explicit hardware architecture while keeping control and data movement understandable.",
    approach:
      "Separated the datapath from an FSM controller, implemented a shared multiply–accumulate unit, and verified the integrated eight-tap design using self-checking SystemVerilog testbenches.",
    outcome:
      "Directed behavioral tests passed in Vivado. The project targets a Kintex-7 FPGA, but synthesis utilization and timing have not yet been measured.",
    github: "https://github.com/aryazeref/fir_accelerator",
  },
  {
    slug: "application-specific-processor",
    number: "02",
    title: "Application-Specific Processor Design",
    subtitle: "Exploring architecture, interconnects, and instruction-level parallelism.",
    category: "Embedded & DSP",
    year: "2026",
    context: "University of Oulu · ASSP laboratory",
    description:
      "Experimented with transport-triggered architectures for DSP workloads, including FIR filtering and combined IIR/Farrow processing.",
    tags: ["C", "TTA / TCE", "DSP", "FPGA"],
    visual: "processor",
    highlights: [
      "Mapped DSP algorithms onto a transport-triggered processor architecture.",
      "Explored loop unrolling, parallel operations, and functional-unit/interconnect changes.",
      "Used processor simulation and FPGA-oriented validation as part of the lab workflow.",
    ],
    challenge:
      "Understand how architecture decisions—functional units, buses, and software scheduling—change the execution cost of signal-processing kernels.",
    approach:
      "Compared architectural variants, iterated on C implementations and compiler settings, and examined cycle counts for DSP test workloads.",
    outcome:
      "An academic design-space exploration that connects algorithm implementation with processor architecture. Optimization results are experiment-dependent; no unverified speedup is claimed here.",
    note: "Course project; source files can be shared selectively where permitted.",
  },
  {
    slug: "engineering-software-ci-cd",
    number: "03",
    title: "CI/CD for Engineering Software",
    subtitle: "Reproducible validation for MATLAB-based tools.",
    category: "Software & Data",
    year: "2026",
    context: "FGH · Engineering internship",
    description:
      "Built GitLab CI/CD workflows and Python automation to support testing and validation of electrical power-system engineering software.",
    tags: ["GitLab CI/CD", "Python", "MATLAB", "Automation"],
    visual: "pipeline",
    highlights: [
      "Developed CI/CD pipelines for MATLAB-related software workflows.",
      "Automated validation steps to improve repeatability and reduce manual handoffs.",
      "Worked within an engineering software team handling domain-specific tools.",
    ],
    challenge:
      "Engineering tools frequently depend on specialized software environments, which makes repeatable execution and validation more challenging than an ordinary web app build.",
    approach:
      "Created GitLab pipeline stages and supporting Python automation for test execution and software-validation workflows.",
    outcome:
      "Improved the structure and reproducibility of the development workflow. Employer code and internal implementation details are intentionally not published.",
    note: "Professional experience. Source code and internal data are private.",
  },
  {
    slug: "phasor-estimation",
    number: "04",
    title: "DFT-Based Phasor Estimation",
    subtitle: "Measurement algorithms for a low-cost PMU.",
    category: "Embedded & DSP",
    year: "2025",
    context: "RWTH Aachen · Bachelor's thesis",
    description:
      "Implemented and characterized DFT-based phasor estimation algorithms, studying accuracy and signal-processing behavior for an electrical measurement application.",
    tags: ["MATLAB", "DSP", "Measurement", "DFT"],
    visual: "phasor",
    highlights: [
      "Implemented DFT-based estimation methods in MATLAB.",
      "Compared algorithmic behavior for a low-cost measurement system.",
      "Connected signal-processing theory with measurement-system constraints.",
    ],
    challenge:
      "Estimate electrical signal phase and magnitude accurately with algorithms suitable for a constrained measurement context.",
    approach:
      "Implemented DFT-based methods and characterized their estimation performance through MATLAB-based analysis.",
    outcome:
      "Completed a bachelor's thesis on the implementation and characterization of phasor estimation algorithms.",
  },
  {
    slug: "ppi-jerman-analytics",
    number: "05",
    title: "Webinar Data & Operations",
    subtitle: "Python analytics supporting a real community event.",
    category: "Software & Data",
    year: "2026",
    context: "PPI Jerman · Volunteer project",
    description:
      "Used Python to collect and visualize registration data, supported a 20+ person volunteer team, and developed a web page integrated into a Next.js site.",
    tags: ["Python", "Data Analysis", "Next.js", "Team Leadership"],
    visual: "analytics",
    highlights: [
      "Prepared registration-data visualizations to inform speaker preparation and planning.",
      "Helped lead a team of more than 20 people for a webinar with nearly 100 participants.",
      "Built an HTML/CSS/JavaScript page that was integrated into a Next.js website.",
    ],
    challenge:
      "Turn registration information into useful, timely preparation material while coordinating a multi-person event team.",
    approach:
      "Automated data collection and visualization in Python and communicated actionable summaries to event organizers and speakers.",
    outcome:
      "The webinar reached nearly 100 participants with active Q&A. Personal registration data is not included in this portfolio.",
  },
  {
    slug: "local-sports-reel",
    number: "06",
    title: "LocalSportsReel",
    subtitle: "A full-stack sports-data MVP.",
    category: "Software & Data",
    year: "2026",
    context: "Personal software project",
    description:
      "A Next.js and FastAPI hackathon MVP with an experimental sports-story demo and a separate page for real Liiga fixtures and team statistics.",
    tags: ["Next.js", "FastAPI", "Python", "REST APIs"],
    visual: "web",
    highlights: [
      "Built a frontend with Next.js and a Python/FastAPI backend.",
      "Integrated real Liiga match results and backend-calculated team statistics on a dedicated page.",
      "Implemented a fictional-data demo alongside source-evidence checks and an experimental predictions page.",
    ],
    challenge: "Combine a grounded sports-data workflow with an interactive web experience while separating fictional demo stories from real match data.",
    approach: "Created a Next.js frontend and FastAPI backend, added integration with the public Liiga statistics endpoint, and built filters and simple derived analyses.",
    outcome: "A documented experimental MVP. Its homepage uses fictional sports-story examples; real Liiga fixtures and results appear on the separate /liiga page.",
    github: "https://github.com/aryazeref/LocalSportsReel",
  },
];

export const experiences = [
  {
    role: "Engineering Software Intern",
    organization: "FGH",
    period: "May – Aug 2026",
    description: "GitLab CI/CD, MATLAB test workflows, and Python automation for electrical engineering tools.",
    tags: ["CI/CD", "Python", "MATLAB"],
  },
  {
    role: "Working Student · Software Development",
    organization: "FGH e.V.",
    period: "Jun 2024 – Apr 2026",
    description: "Python/Dash applications, SQL-based data workflows, visualization, and engineering software refactoring.",
    tags: ["Python", "Dash", "SQL"],
  },
  {
    role: "Student Research Assistant · Embedded Systems",
    organization: "E.ON Energy Research Center",
    period: "Dec 2024 – Jul 2025",
    description: "Linux/Raspberry Pi measurement software with Python and C/C++; signal processing and data validation.",
    tags: ["C/C++", "Linux", "DSP"],
  },
  {
    role: "Student Assistant · Thin-Film Processing",
    organization: "Fraunhofer ILT",
    period: "Apr – Nov 2024",
    description: "Lab measurements, thin-film characterization, and Python-based experimental data analysis.",
    tags: ["Measurements", "Python", "Semiconductors"],
  },
];

export const skillGroups = [
  { label: "Digital hardware", subtitle: "From logic to implementation", skills: ["SystemVerilog / Verilog", "RTL design", "Xilinx Vivado", "TTA / processor architectures", "Cadence Virtuoso"] },
  { label: "Embedded & signal processing", subtitle: "Code close to the hardware", skills: ["C / C++", "MATLAB / Simulink", "Linux", "Raspberry Pi", "Digital signal processing"] },
  { label: "Software & automation", subtitle: "Tools that make engineering repeatable", skills: ["Python", "Git / GitLab CI/CD", "SQL", "pandas / Matplotlib", "Next.js / FastAPI"] },
];
