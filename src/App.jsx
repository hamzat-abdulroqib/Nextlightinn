import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Initiatives from "./components/Initiatives";
import Team from "./components/Team";
import Impact from "./components/Impact";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import GetInvolved from "./components/GetInvolved";
import Donation from "./components/Donation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Create public folder structure for assets if it doesn't exist
  // In a real application, this would require server-side code or would be pre-created

  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Initiatives Section */}
        <Initiatives />

        {/* Team Section */}
        <Team />

        {/* Impact Section */}
        <Impact />

        {/* Events Section */}
        <Events />

        {/* Gallery Section */}
        <Gallery />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Blog Section */}
        {/* <Blog /> */}

        {/* Get Involved Section */}
        <GetInvolved />

        {/* Donation Section */}
        <Donation />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
