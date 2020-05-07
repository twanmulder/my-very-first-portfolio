import React, { useState, useEffect } from "react";

function About() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (event) => {
    console.log(event);
  };

  return (
    <section className="about">
      <div className="card-element">
        <h2>Large title</h2>
        <p>Here is some more cool text</p>
      </div>
    </section>
  );
}

export default About;
