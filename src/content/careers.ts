import type { CareerRole } from "@/types";

export const softwareRoles = [
  "Full Stack Engineers",
  "Frontend Engineers",
  "Backend Engineers",
  "DevOps Engineers",
  "Cloud Engineers",
  "AI Engineers",
  "QA Engineers",
  "Security Engineers",
  "Mobile Engineers",
];

export const careerPaths = {
  software: {
    title: "Foreign Developers",
    subtitle: "Experienced engineers from around the world who work directly with U.S. companies.",
    description:
      "Join a team backed by Friend Americans - U.S. citizens who handle information, environments, payments, and coordination so you can focus on building software.",
  },
  developerSuccess: {
    title: "Friend Americans",
    subtitle: "Any U.S. citizen can join. Help foreign developers succeed inside American companies.",
    description:
      "As a Friend American on our Developer Success Team, you provide information, set up work environments, coordinate payments, and handle day-to-day operations. No technical background required - but commitment, patience, and a strong work ethic are essential.",
    supportAreas: [
      "Project information & documentation",
      "Work environment & tool setup",
      "Payment & payroll coordination",
      "Client communication",
      "Meeting & schedule management",
      "U.S. workplace guidance",
    ],
    notRequired: [
      "Specialized technical background",
      "Programming knowledge",
      "Professional certifications",
      "College degrees (unless legally required)",
    ],
    qualities: [
      "U.S. citizenship (any citizen welcome)",
      "Commitment",
      "Patience",
      "Strong work ethic",
      "Professionalism",
      "Willingness to learn",
      "Teamwork",
    ],
  },
};

export const careerRoles: CareerRole[] = [
  {
    id: "full-stack-engineer",
    title: "Full Stack Engineer",
    category: "software",
    type: "remote",
    location: "Remote - Global · U.S. Time Zones",
    description: "Build end-to-end applications with modern JavaScript frameworks and cloud-native architectures.",
    requirements: ["3+ years experience", "React/Next.js & Node.js", "Strong communication"],
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    category: "software",
    type: "remote",
    location: "Remote - Global · U.S. Time Zones",
    description: "Design scalable backend systems, APIs, and data pipelines for enterprise clients.",
    requirements: ["4+ years experience", "Python, Java, or Go", "Microservices experience"],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    category: "software",
    type: "remote",
    location: "Remote - Global · U.S. Time Zones",
    description: "Build CI/CD pipelines, cloud infrastructure, and deployment automation.",
    requirements: ["3+ years DevOps/SRE", "AWS/Azure", "Kubernetes & Docker"],
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    category: "software",
    type: "remote",
    location: "Remote - Global · U.S. Time Zones",
    description: "Develop and deploy ML models and AI-powered features for client applications.",
    requirements: ["3+ years ML/AI", "LLM experience", "Python, PyTorch/TensorFlow"],
  },
  {
    id: "developer-success-coordinator",
    title: "Friend American - Success Coordinator",
    category: "developer-success",
    type: "full-time",
    location: "United States - Remote",
    description:
      "Support foreign developers with project information, work environment setup, payment coordination, and client communication.",
    requirements: [
      "U.S. citizenship (any citizen welcome)",
      "Commitment, patience & work ethic",
      "No technical background required",
      "Training provided",
    ],
  },
  {
    id: "developer-success-specialist",
    title: "Friend American - Success Specialist",
    category: "developer-success",
    type: "full-time",
    location: "United States - Remote",
    description:
      "Help foreign developers with scheduling, documentation, U.S. workplace guidance, payment logistics, and career support.",
    requirements: [
      "U.S. citizenship (any citizen welcome)",
      "Commitment, patience & work ethic",
      "Strong organizational skills",
      "Willingness to learn",
    ],
  },
];
