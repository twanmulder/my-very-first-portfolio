import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <div className="home-text">
        <h2 className="serif">Launch your business</h2>
        <p>
          Learn about how we can succesfully give a <strong>rocket-boost</strong> to your venture.
        </p>
        <Link to="/about" className="button">
          Explore the possibilities
        </Link>
      </div>
    </main>
  );
}

export default Home;
