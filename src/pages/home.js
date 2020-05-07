import React, { useState, Fragment } from "react";

import Hero from "../components/hero";
import About from "../components/about";

function Home() {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, 1500);

  return (
    <Fragment>
      <main className={show ? "home -show" : "home"}>
        <Hero />
        <About />
      </main>
    </Fragment>
  );
}

export default Home;
