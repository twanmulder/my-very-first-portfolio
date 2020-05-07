import React from "react";
import { Link } from "react-router-dom";

import Starfield from "./starfield";

function Hero() {
  return (
    <section className="hero">
      <Starfield />
      <div className="hero-text">
        <h2 className="serif -reveal">Launch your business</h2>
        <p className="-reveal">
          Learn about how we can succesfully give a <strong>rocket-boost</strong> to your venture.
        </p>
        <div className="button-wrapper -reveal">
          <Link to="/about" className="button">
            Explore the possibilities
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
