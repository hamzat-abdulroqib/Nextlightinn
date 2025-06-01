import React from "react";
import students from "../assets/images/education.jpg";
import hero from "../assets/images/hero.jpg";

// Data structure for upcoming and past events
export const eventsData = {
  upcoming: [
    {
      title: "Skills for life  Program",
      date: "June 16, 2025",
      description:
        "A one intensive workshop for emerging youth leaders to develop leadership skills, strategic thinking, and community engagement techniques.",
      location: "Mairo Tijani school, Kano",
      image: students,
      registrationLink: "#register",
    },
    {
      title: "Women in Tech Summit",
      date: "July 16, 2025",
      description:
        "Bringing together women in technology to share experiences, network, and inspire the next generation of female tech leaders.",
      location: "Mairo Tijani school, Kano",
      image: students,
      registrationLink: "#register",
    },
  ],
  past: [
    {
      title: "Digital Skills Workshop",
      date: "May , 9 2025",
      description:
        "Hands-on training in essential digital skills including web development, digital marketing, and content creation.",
      location: "Elite international school, Kano",
      image: hero,
      galleryLink: "#gallery",
    },
    {
      title: " Skills4life Workshop",
      date: "May , 9 2025",
      description:
        "Hands-on training in essential digital skills including web development, digital marketing, and content creation.",
      location: "Elite international school, Kano",
      image: hero,
      galleryLink: "#gallery",
    },
  ],
};
