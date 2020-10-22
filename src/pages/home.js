import React, { useState, Fragment } from "react";

import Hero from "../components/hero";

function Home() {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, 500);

  return (
    <Fragment>
      <main className={show ? "home -show" : "home"}>
        <Hero />
      </main>
    </Fragment>
  );
}

export default Home;
