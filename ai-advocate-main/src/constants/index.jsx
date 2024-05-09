import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";


export const navItems = [
  { label: "Features", href: "#" },
  { label: "Legal Tracking", href: "#" },
  { label: "Pricing", href: "#" }
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "In-depth legal research",
    description:
      "Can conduct in-depth legal research in seconds by scanning vast volumes of legal documents and precedents.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Access our platform with a simple tap – on the web, iOS, or Android.",
  },
  {
    icon: <ShieldHalf />,
    text: "AI document handling",
    description:
      "The fastest way to summarize agreements, convert images to text, translate documents, and more.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time AI help",
    description:
      "Your privacy is our priority. AI Lawyer offers secure, confidential legal online, giving you peace of mind with every consultation.",
  },
  
];

export const checklistItems = [
  {
    title: "Fast",
    description:
      "Setting Industry Standards in terms of speed.",
  },
  {
    title: "24/7 Support",
    description:
      "Our customer support team is always available to assist you with any questions about the platform.",
  },
  {
    title: "Affordable",
    description:
      "Most Affordable in the Industry.",
  },
  {
    title: "Private",
    description:
      "We stand firm on privacy, ensuring that user's conversations remains secure and anonymous.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "0Rs",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "100Rs",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "200Rs",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
