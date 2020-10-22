import React from "react";

import Starfield from "./starfield";

function Hero() {
  return (
    <section className="hero">
      <Starfield />
      <div className="hero-text">
        <p className="subtitle -fade-in">Hey, I'm</p>
        <h2 className="serif">
          <span className="-reveal">Twan</span> <span className="-reveal">Mulder</span>
        </h2>
        <p>
          <span className="-fade-in -delay-1">Developer, </span>
          <span className="-fade-in -delay-2">Consultant</span>
        </p>
        <p className="-fade-in -delay-3">
          You can read about my development at <a href="https://www.thatsanegg.com/">"That's an Egg"</a>, or <a href="https://twitter.com/toktoktwan">follow me online</a>
        </p>
      </div>
    </section>
  );
}

export default Hero;
