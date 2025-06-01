import React from "react";
import education from "../assets/images/education.jpg";
import tech from "../assets/images/tech.jpg";

// Define icons for initiatives
const EducationIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const SustainabilityIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const TechnologyIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

// Initiative data
export const initiativesData = [
  {
    id: "education",
    title: "Education for All",
    icon: EducationIcon,
    shortDescription: "Expanding access to quality education",
    description:
      "Our Education for All initiative works to ensure that every child and adult has access to quality education regardless of their location or economic circumstances. We build schools, train teachers, provide scholarships, and develop innovative learning solutions for underserved communities.",
    imageUrl: education,
    achievements: [
      "Created an outreach program for 10 schools",
      "Provided scholarships to over 20 students",
      "Trained more than 50 teachers in modern teaching methodologies",
    ],
  },

  {
    id: "technology",
    title: "Technology Access",
    icon: TechnologyIcon,
    shortDescription: "Bridging the digital divide",
    description:
      "Our Technology Access initiative aims to bridge the digital divide by providing technology infrastructure, equipment, and training to underserved communities. We believe that access to technology and digital literacy are essential for full participation in the modern economy and society.",
    imageUrl: tech,
    achievements: [
      "Connected 30 remote communities to high-speed internet",
      "Helped 10 students find a good career",
    ],
  },
];
