import { ChevronDown } from "lucide-react";
import { NavlinkProps } from "../types/types";

export const Navlinks: NavlinkProps[] = [
  {
    name: "About",
    href: "",
    icon: ChevronDown,
  },
  {
    name: "What we do",
    href: "/",
    icon: ChevronDown,
  },
  {
    name: "Jobs",
    href: "",
  },
  {
    name: "TG Academy",
    href: "",
  },
  {
    name: "Strategic Partnership",
    href: "",
  },
  {
    name: "Pricing",
    href: "",
  },
  {
    name: "Book a Consultation",
    href: "",
  },
];


export const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];


// constants/constant.ts
export const trainingPrograms = [
  {
    title: "Corporate Trainings",
    description:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    image: "/Corporate.jpg",
    imageLeft: false,
    items: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
  },
  {
    title: "Personalised Individual Training",
    description:
      "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    image: "/Personalized.jpg",
    imageLeft: true,
    items: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
  },
  {
    title: "Capacity Development",
    description:
      "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    image: "/Capacity.jpg",
    imageLeft: false,
    items: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
  },
];