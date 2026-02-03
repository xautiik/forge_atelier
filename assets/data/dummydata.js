import { AiOutlineCalendar } from "react-icons/ai"
import { TfiRulerPencil } from "react-icons/tfi"
import { VscFileSubmodule } from "react-icons/vsc"
import { BiUser } from "react-icons/bi"

export const home = [
  {
    icon: <AiOutlineCalendar size={25} />,
    title: "More than 10 Years of Industry Experience",
  },
  {
    icon: <TfiRulerPencil size={25} />,
    title: "Innovative Technologies & a Modern Approach",
  },
  {
    icon: <VscFileSubmodule size={25} />,
    title: "Over 100 Successful Projects in Our Portfolio",
  },
  {
    icon: <BiUser size={25} />,
    title: "Ensuring Customer Satisfaction is Our Highest Priority",
  },
]

export const expertise = [
  {
    id: "exp-software",
    title: "Software Development",
    cover: "/images/e1.jpg",
    desc: [{ text: "Web design & development" }, { text: "App design & development" }, { text: "Custom icons & illustrations" }, { text: "Hosting" }, { text: "Website audit" }],
  },
  {
    id: "exp-marketing",
    title: "Digital Marketing",
    cover: "/images/e2.jpg",
    desc: [{ text: "Social media marketing" }, { text: "Marketing campaigns" }, { text: "Marketing management" }, { text: "SEO" }],
  },
  {
    id: "exp-3d",
    title: "3D Printing",
    cover: "/images/e3.jpg",
    desc: [{ text: "3D design & printing" }, { text: "WooCommerce" }, { text: "Content management" }, { text: "Hosting" }],
  },
  {
    id: "exp-cnc",
    title: "CNC Machining",
    cover: "/images/e4.jpg",
    desc: [{ text: "Visual identity" }, { text: "Branding for social media" }, { text: "Custom illustrations" }],
  },
  {
    id: "exp-pcb",
    title: "PCB Design & Manufacturing",
    cover: "/images/e4.jpg",
    desc: [{ text: "Rapid prototyping" }, { text: "Firmware bring-up" }, { text: "Functional testing" }],
  },
]

export const services = [
  {
    _id: "svc-web-mobile",
    title: "Web & Mobile Development",
    image: "/images/s1.jpg",
    category: "Engineering",
    createdAt: "2024-12-01T00:00:00.000Z",
    content: {
      text1: "Responsive websites and cross-platform apps built with modern stacks and performance baked in from day one.",
      text2: "Our teams cover UX research, visual design, and CI/CD so releases stay predictable.",
      text3: "We keep accessibility, localization, and analytics wired into every build.",
    },
  },
  {
    _id: "svc-iot",
    title: "IoT Product Engineering",
    image: "/images/s2.jpg",
    category: "IoT",
    createdAt: "2024-11-18T00:00:00.000Z",
    content: {
      text1: "Edge-to-cloud solutions including firmware, device telemetry, and monitoring dashboards.",
      text2: "We design data pipelines that are secure, observable, and cost-aware from prototype to scale.",
      text3: "Our reference hardware kits accelerate proof-of-concepts and field pilots.",
    },
  },
  {
    _id: "svc-automation",
    title: "Automation & AI",
    image: "/images/s3.jpg",
    category: "AI",
    createdAt: "2024-10-05T00:00:00.000Z",
    content: {
      text1: "Process automation powered by computer vision, NLP, and workflow orchestration.",
      text2: "We pair human-in-the-loop review with guardrails so AI stays trustworthy.",
      text3: "Dashboards surface quality metrics, drift alerts, and continuous improvements.",
    },
  },
  {
    _id: "svc-branding",
    title: "Brand & Product Design",
    image: "/images/s4.jpg",
    category: "Design",
    createdAt: "2024-09-12T00:00:00.000Z",
    content: {
      text1: "Narratives, identity systems, and component libraries that scale across products.",
      text2: "We prototype quickly, validate with users, and ship polished design specs to engineers.",
      text3: "Launch kits include marketing collateral, motion guidelines, and accessibility notes.",
    },
  },
  {
    _id: "svc-security",
    title: "Security & Reliability",
    image: "/images/s5.jpg",
    category: "Security",
    createdAt: "2024-08-20T00:00:00.000Z",
    content: {
      text1: "Threat modeling, security reviews, and zero-downtime rollouts for critical systems.",
      text2: "We integrate SAST/DAST, secrets hygiene, and observability from the first commit.",
      text3: "Disaster recovery playbooks keep your uptime and RPO/RTO targets on track.",
    },
  },
  {
    _id: "svc-support",
    title: "Managed Services",
    image: "/images/s6.jpg",
    category: "Operations",
    createdAt: "2024-07-30T00:00:00.000Z",
    content: {
      text1: "Runbooks, SLOs, and 24/7 monitoring so your team can focus on roadmap work.",
      text2: "We provide release management, incident response, and capacity planning.",
      text3: "Monthly health reviews keep priorities aligned and risks visible.",
    },
  },
]

export const caseStudies = [
  {
    _id: "case-factory",
    title: "Smart Factory Dashboard",
    category: "Industrial IoT",
    image: "/images/e1.jpg",
    createdAt: "2024-11-01T00:00:00.000Z",
    description: "A unified view of production KPIs, machine telemetry, and predictive maintenance signals.",
    title2: "Solution",
    description2: "Event streaming from the factory floor feeds a real-time dashboard with alerting and RCA tools.",
    image2: "/images/e2.jpg",
    title3: "Impact",
    description3: "Downtime dropped 22% and maintenance cycles were shortened by two weeks per quarter.",
    image3: "/images/e3.jpg",
  },
  {
    _id: "case-commerce",
    title: "Composable Commerce Launch",
    category: "E-commerce",
    image: "/images/e4.jpg",
    createdAt: "2024-10-10T00:00:00.000Z",
    description: "Headless storefront with personalized recommendations and rapid experiment velocity.",
    title2: "Solution",
    description2: "API-first architecture with A/B tested journeys and automated merchandising workflows.",
    image2: "/images/b3.jpg",
    title3: "Impact",
    description3: "Checkout conversion improved by 14% and merchandising updates now ship twice weekly.",
  },
  {
    _id: "case-health",
    title: "Remote Care Platform",
    category: "Health Tech",
    image: "/images/b4.jpg",
    createdAt: "2024-09-15T00:00:00.000Z",
    description: "Secure patient onboarding, vitals tracking, and care team collaboration in one place.",
    title2: "Solution",
    description2: "HIPAA-ready architecture with encrypted messaging, device integrations, and audit trails.",
    image2: "/images/b2.jpg",
    title3: "Impact",
    description3: "Patient follow-up compliance rose by 18% with faster triage across care teams.",
  },
]

export const blogs = [
  {
    _id: "blog-design-reliable-iot",
    title: "Designing Reliable IoT Products",
    category: "Product",
    image: "/images/b1.webp",
    image2: "/images/b2.jpg",
    createdAt: "2025-01-12T10:00:00.000Z",
    updatedAt: "2025-01-14T15:00:00.000Z",
    readingTime: 6,
    content1: "From RF noise to battery life, reliability starts at architecture. We map failure modes early and validate them with hardware-in-the-loop tests.",
    content2: "We close the loop with over-the-air updates, observability hooks, and guardrails that keep devices healthy in the field.",
  },
  {
    _id: "blog-shipping-secure",
    title: "Shipping Secure Software Without Slowing Down",
    category: "Engineering",
    image: "/images/b2.jpg",
    image2: "/images/b3.jpg",
    createdAt: "2024-12-04T08:00:00.000Z",
    updatedAt: "2024-12-05T09:00:00.000Z",
    readingTime: 5,
    content1: "Threat modeling, dependency hygiene, and signing pipelines keep releases trustworthy.",
    content2: "We integrate scanners and runtime policies early so security becomes a natural part of delivery.",
  },
  {
    _id: "blog-research-insights",
    title: "Research Sprints That De-risk Roadmaps",
    category: "UX",
    image: "/images/b3.jpg",
    image2: "/images/b4.jpg",
    createdAt: "2024-11-10T12:00:00.000Z",
    updatedAt: "2024-11-12T12:00:00.000Z",
    readingTime: 4,
    content1: "We run tight research loops to validate desirability, usability, and viability before build.",
    content2: "The outputs feed design systems, backlog refinement, and measurable success criteria.",
  },
  {
    _id: "blog-delivery-playbook",
    title: "A Delivery Playbook for Modern Teams",
    category: "Delivery",
    image: "/images/b4.jpg",
    image2: "/images/b1.webp",
    createdAt: "2024-10-02T09:30:00.000Z",
    updatedAt: "2024-10-03T09:30:00.000Z",
    readingTime: 7,
    content1: "Balanced teams, clear exit criteria, and ruthless prioritization keep projects on track.",
    content2: "We invest in retros and observability so every release improves the next one.",
  },
]

export const testimonials = [
  {
    _id: "testimonial-1",
    name: "Nina Desta",
    company: "Arise Ventures",
    starRating: 4.5,
    content: "Forge Atelier turned our sketchy requirements into a reliable platform launch in eight weeks.",
    image: "/images/t1.jpg",
  },
  {
    _id: "testimonial-2",
    name: "Moti Alemu",
    company: "Blue Mesa Logistics",
    starRating: 5,
    content: "Their observability-first approach saved us hours of incident time every month.",
    image: "/images/t2.jpg",
  },
  {
    _id: "testimonial-3",
    name: "Sara Yilma",
    company: "Northbeam Health",
    starRating: 4,
    content: "Workshops were concise, actionable, and got our stakeholders aligned fast.",
    image: "/images/t3.jpg",
  },
]

export const brands = [
  { id: "brand-1", name: "Ardent Labs", logo: "/images/l1.svg" },
  { id: "brand-2", name: "Northwind", logo: "/images/l2.svg" },
  { id: "brand-3", name: "Cobalt", logo: "/images/l3.svg" },
  { id: "brand-4", name: "Everblue", logo: "/images/l4.svg" },
  { id: "brand-5", name: "Summit", logo: "/images/l5.svg" },
  { id: "brand-6", name: "Helio", logo: "/images/l6.svg" },
]

// Brand alias retained for older imports
export const brand = brands

export const teamMembers = [
  {
    _id: "team-1",
    firstName: "Alexander",
    lastName: "Black",
    jobTitle: "Founder & CEO",
    profilePhoto: "/images/t1.jpg",
  },
  {
    _id: "team-2",
    firstName: "Anna",
    lastName: "Kovalenko",
    jobTitle: "Finance Director",
    profilePhoto: "/images/t2.jpg",
  },
  {
    _id: "team-3",
    firstName: "Tiffany",
    lastName: "White",
    jobTitle: "Creative Director",
    profilePhoto: "/images/t3.jpg",
  },
  {
    _id: "team-4",
    firstName: "Richard",
    lastName: "Greenwood",
    jobTitle: "Principal Engineer",
    profilePhoto: "/images/t4.jpg",
  },
  {
    _id: "team-5",
    firstName: "Jessica",
    lastName: "Brown",
    jobTitle: "Marketing Director",
    profilePhoto: "/images/t5.jpg",
  },
  {
    _id: "team-6",
    firstName: "Gregory",
    lastName: "Windstorm",
    jobTitle: "Accounting Manager",
    profilePhoto: "/images/t6.jpg",
  },
  {
    _id: "team-7",
    firstName: "Anna",
    lastName: "Red",
    jobTitle: "Project Manager",
    profilePhoto: "/images/t7.jpg",
  },
  {
    _id: "team-8",
    firstName: "Future",
    lastName: "Teammate",
    jobTitle: "Join Our Team",
    profilePhoto: "/images/t8.jpg",
  },
]

