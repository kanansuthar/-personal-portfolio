import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import profile from "../assets/profile.jpg";

function Hero() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section id="hero" className="hero">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true }
          }
        }}
      />

      <div className="hero-content hero-left">
        <h1>Hello, I'm Kanan</h1>

        <TypeAnimation
          sequence={[
            "Aspiring Software Developer",
            2000,
            "React Developer",
            2000,
            "MERN Stack Developer",
            2000
          ]}
          wrapper="span"
          speed={60}
          repeat={Infinity}
          className="typing-text"
        />

        <div className="hero-buttons">
          <button className="btn-primary">View Projects</button>
          <button className="btn-secondary">Download Resume</button>
        </div>
      </div>

      <div className="hero-right">
        {/* IMAGE */}
        <img
          src={profile}
          alt="Profile"
          className="hero-img"
        />
      </div>

    </section>
  );
}

export default Hero;