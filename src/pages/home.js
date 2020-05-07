import React, { useState } from "react";

import Hero from "../components/hero";

function Home() {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, 1500);

  return (
    <main className={show ? "home -show" : "home"}>
      <Hero />
    </main>
  );
}

export default Home;
