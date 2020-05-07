import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, 1500);

  return (
    <main className={show ? "home -show" : "home"}>
      <div className="home-text">
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

      <div class="starfield">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </main>
  );
}

export default Home;
