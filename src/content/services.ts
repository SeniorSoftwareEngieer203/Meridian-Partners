import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    slug: "software-engineering",
    description:
      "Full stack, backend, and frontend engineers building production-ready applications for U.S. clients.",
    icon: "Code2",
    features: [
      "React, Next.js, Node.js, Python, Java",
      "Microservices & API development",
      "Mobile engineering",
      "Legacy modernization",
    ],
  },
  {
    id: "cloud-engineering",
    title: "Cloud Engineering",
    slug: "cloud-engineering",
    description:
      "Cloud architects and engineers designing scalable, secure infrastructure on AWS, Azure, and GCP.",
    icon: "Cloud",
    features: [
      "Multi-cloud architecture",
      "Serverless & containerized workloads",
      "Security & compliance",
      "Cost optimization",
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    slug: "devops",
    description:
      "CI/CD, infrastructure automation, and reliability engineering for seamless deployments.",
    icon: "GitBranch",
    features: [
      "CI/CD pipeline automation",
      "Kubernetes & Docker",
      "Infrastructure as Code",
      "Monitoring & observability",
    ],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    slug: "ai-solutions",
    description:
      "AI and ML engineers integrating intelligent features, LLMs, and data-driven solutions.",
    icon: "Brain",
    features: [
      "LLM integration & fine-tuning",
      "Computer vision & NLP",
      "MLOps & model deployment",
      "AI strategy & prototyping",
    ],
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    slug: "quality-assurance",
    description:
      "QA engineers ensuring software quality through automated testing and rigorous validation.",
    icon: "TestTube",
    features: [
      "Automated & manual testing",
      "Performance & load testing",
      "Test strategy design",
      "Security testing",
    ],
  },
  {
    id: "dedicated-teams",
    title: "Dedicated Teams",
    slug: "dedicated-teams",
    description:
      "Fully managed engineering squads with Developer Success support built in.",
    icon: "Users",
    features: [
      "Cross-functional team assembly",
      "Agile sprint management",
      "Dedicated success support",
      "Flexible scaling",
    ],
  },
];
