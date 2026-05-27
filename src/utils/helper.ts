// object
import p1 from "@/assets/projects/project_1.png";
import p11 from "@/assets/projects/project_1.1.png";
import p12 from "@/assets/projects/project_1.2.png";
import p13 from "@/assets/projects/project_1.3.png";
import p14 from "@/assets/projects/project_1.4.png";
import p2 from "@/assets/projects/project_2.jpg";
import p21 from "@/assets/projects/project_2.1.jpg";
import p22 from "@/assets/projects/project_2.2.jpg";
import p23 from "@/assets/projects/project_2.3.jpg";
import p24 from "@/assets/projects/project_2.4.jpg";
import p3 from "@/assets/projects/project3.png";
import p31 from "@/assets/projects/project3.1.png";
import p32 from "@/assets/projects/project3.2.png";
import p33 from "@/assets/projects/project3.3.png";
import p34 from "@/assets/projects/project3.4.png";
import p35 from "@/assets/projects/project3.5.png";
import patImg from "@/assets/pat-about.png";
import sannyImg from "@/assets/sanny-about.png";
import xtImg from "@/assets/xt-about.png";
import {
  GlobeIcon,
  MonitorIcon,
  PaletteIcon,
  CpuIcon,
} from "lucide-react";


export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  Figma: string;
  githubUrl: string;
}

export const NavMenus = [
  {
    label : "Home",
    url : "/",
    key : "home"
  },
  {
    label : "Projects",
    url : "/?section=projects",
    key : "projects"
  },
  {
    label : "About",
    url : "/?section=about",
    key : "about"
  },
  {
    label : "Services",
    url : "/?section=services",
    key : "services"
  },
];

export const ProjectsData: Project[] = [
  {
    id: 1,
    title: "BeautyBook Booking App",
    description:
      "A full-featured beauty appointment booking app for nails, salon, makeup, and more. Built with a modern stack for seamless user experience.",
    images: [p1, p11, p12, p13, p14],
    tags: ["React", "TypeScript", "Tailwind", "Supabase"],
    Figma: "https://www.figma.com/proto/PbAL9LGoXWwQriNKgwr4Bh/Lab-5?node-id=26-89&t=yIM5Jn86ajZw2qTN-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A2082",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Gmail UI",
    description:
      "A visually accurate Gmail interface redesign focusing on clean typography, intuitive layout, and responsive email management.",
    images: [p2, p21, p22, p23, p24],
    tags: ["React", "CSS", "UX Design"],
    Figma: "https://www.figma.com/proto/E4uMxGzZGyxfHVh4zxac1s/Material-3-Design-Kit--Community-?node-id=60933-3167&t=N8UqcEoDVHo5RTbx-1",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Blue Pay: Multi-step form",
    description:
       "A modern multi-step payment form for Blue Pay with a clean UI, clear progress flow, and optimized user experience for seamless checkout.",
    images: [p3, p31, p32, p33, p34, p35, ],
    tags: ["React", "Tailwind", "Framer Motion"],
    Figma: "https://www.figma.com/proto/1mGBgeDlUaO2yAPtGqKm3q/Multi-form-step?node-id=3-11&t=TbzMIGZBVkoFgo07-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
    githubUrl: "#",
  },
]

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  education: string[];
  skills: string[];
}

export const TeamData: TeamMember[] = [
  {
    id: 1,
    name: "Sanny Gine Patan-Patan",
    position: "UI/UX Designer",
    description:
      "Sanny brings wireframes to life with a keen eye for detail and user-centered design. She excels at translating complex requirements into intuitive, beautiful interfaces that users love.",
    image: sannyImg,
    education: [
      "BS Information Technology \u2014 Cavite State University (2023\u20132027)",
    ],
    skills: ["Figma", "Adobe XD", "Photoshop", "UI Design", "Wireframing"],
  },
  {
    id: 2,
    name: "Patricia Ann Mahinay",
    position: "Frontend Developer",
    description:
      "Patricia turns designs into performant, responsive web applications. With a strong foundation in React and TypeScript, she builds components that are both elegant and maintainable.",
    image: patImg,
    education: [
      "BS Information Technology \u2014 Cavite State University (2023\u20132027)", "Science Technology Engineering Mathematics \u2014 Leyte National High School"
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "Git", "Php", "MySQL"],
  },
  {
    id: 3,
    name: "Cristene Rios",
    position: "Document Specialist",
    description:
      "Cristene ensures every project is well-documented and organized. She manages technical documentation, requirements gathering, and keeps the team aligned with clear communication.",
    image: xtImg,
    education: [
      "BS Information Technology \u2014 Cavite State University (2023\u20132027)",
    ],
    skills: ["Technical Writing", "Documentation", "Research", "Communication"],
  },
]

export type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tags: string[];
};

export const ServicesData = [
  {
    icon: GlobeIcon,
    title: "Web Development",
    description:
      "Static sites, landing pages, and small business websites. Mobile-friendly, responsive, and optimized for performance.",
    tags: ["HTML/CSS", "Tailwind", "JavaScript", "React", "TypeScript", "MySQL"],
  },
  {
    icon: MonitorIcon,
    title: "Tech Support & Setup",
    description:
      "Hardware troubleshooting, network configuration, and software setup. Reliable support for your tech needs.",
    tags: ["Hardware", "Networking", "Windows", "Troubleshooting"],
  },
  {
    icon: PaletteIcon,
    title: "UI/UX & Graphic Design",
    description:
      "Figma mockups, logo design, and social media graphics for your brand or organization.",
    tags: ["Figma", "Canva", "Branding", "UI Design"],
  },
  {
    icon: CpuIcon,
    title: "AI Automations",
    description:
      "Chatbot integration, workflow automation, and AI-powered tools to streamline your business processes.",
    tags: ["AI", "Automation", "Chatbots", "Workflow"],
  },
];