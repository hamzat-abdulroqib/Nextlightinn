import React from "react";
import fatima from "../assets/images/fatima.jpg";
import tunde from "../assets/images/tunde.jpg";
import aisha from "../assets/images/aisha.jpg";
import umar from "../assets/images/umar.jpg";
import abdul from "../assets/images/abdul.jpg";

// Define icons for social media
const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
  </svg>
);

// Team data
export const teamData = [
  {
    name: "Fatima Sanusi Abdullahi",
    position: "Executive Director",
    bio: "Fatima brings over 5 years of experience in international development and nonprofit leadership. Her passion for community empowerment drives the vision of the NextLight Initiative.",
    imageUrl: fatima,
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com", icon: LinkedInIcon },
      { platform: "Twitter", url: "https://twitter.com", icon: TwitterIcon },
    ],
  },
  {
    name: "Zakariyau Babatunde Haruna",
    position: "Project Manager",
    bio: "Tunde is a dynamic project manager with a background in engineering and community development. He oversees our initiatives, ensuring they are executed effectively and sustainably.",
    imageUrl: tunde,
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com", icon: LinkedInIcon },
      {
        platform: "Instagram",
        url: "https://instagram.com",
        icon: InstagramIcon,
      },
    ],
  },
  {
    name: "Aisha Kabir Gala",
    position: "Admin & Finance Manager",
    bio: " Aisha is a seasoned finance professional with a strong background in nonprofit financial management. She ensures our resources are allocated efficiently to maximize impact.",
    imageUrl: aisha,
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com", icon: LinkedInIcon },
      { platform: "Twitter", url: "https://twitter.com", icon: TwitterIcon },
    ],
  },

  {
    name: "Umar Yusuf Rimingado",
    position: "Training & Contnet Officer",
    bio: " Umar has a passion for education and has dedicated his career to improving access to quality education for all. He is committed to ensuring our educational initiatives are effective and impactful.",
    imageUrl: umar,
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com", icon: LinkedInIcon },
      {
        platform: "Instagram",
        url: "https://instagram.com",
        icon: InstagramIcon,
      },
    ],
  },
  {
    name: "Hamzat Abdulroqib",
    position: "Commincation & PR Officer",
    bio: "Hamzat is a communications expert with a knack for storytelling. He manages our public relations and outreach efforts, ensuring our message reaches those who need it most.",
    imageUrl: abdul,
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com", icon: LinkedInIcon },
      { platform: "Twitter", url: "https://twitter.com", icon: TwitterIcon },
    ],
  },
];
