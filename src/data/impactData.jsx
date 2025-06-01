import React from "react";

// Define icons for impact statistics
const UserIcon = ({ className }) => (
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
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const LocationIcon = ({ className }) => (
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
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const FundingIcon = ({ className }) => (
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
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ProjectIcon = ({ className }) => (
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
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

// Impact data
export const impactData = {
  statistics: [
    {
      icon: UserIcon,
      value: "1000+",
      label: "People Impacted",
    },
    {
      icon: LocationIcon,
      value: "2",
      label: "state",
    },
    {
      icon: ProjectIcon,
      value: "120+",
      label: "Projects",
    },
    {
      icon: FundingIcon,
      value: "1million+",
      label: "Funding Deployed",
    },
  ],
  // stories: [
  //   {
  //     testimonial:
  //       "The NextLight Initiative's education program changed my life. I was able to complete my studies and now I'm a teacher in my community, helping the next generation.",
  //     name: "Maria Rodriguez",
  //     location: "Guatemala",
  //     avatarUrl: "/assets/impact/avatar1.jpg",
  //   },
  //   {
  //     testimonial:
  //       "The sustainable farming techniques we learned have doubled our crop yield while using less water. Our entire village is now food secure for the first time in decades.",
  //     name: "Emmanuel Okonkwo",
  //     location: "Nigeria",
  //     avatarUrl: "/assets/impact/avatar2.jpg",
  //   },
  //   {
  //     testimonial:
  //       "The tech center established in our community has opened doors we never thought possible. Our young people are learning skills that connect them to the global economy.",
  //     name: "Priya Sharma",
  //     location: "India",
  //     avatarUrl: "/assets/impact/avatar3.jpg",
  //   },
  // ],
  // featuredStory: {
  //   title: "Transforming Villages with Solar Power",
  //   excerpt:
  //     "When NextLight Initiative brought solar power to the remote village of Kiberashi, it did more than light homes—it powered a revolution in healthcare, education, and local business.",
  //   imageUrl: "/assets/impact/featured-story.jpg",
  // },
  // reports: [
  //   {
  //     title: "2023 Annual Impact Report",
  //     url: "#report-2023",
  //   },
  //   {
  //     title: "2022 Annual Impact Report",
  //     url: "#report-2022",
  //   },
  //   {
  //     title: "2021 Annual Impact Report",
  //     url: "#report-2021",
  //   },
  // ],
};
