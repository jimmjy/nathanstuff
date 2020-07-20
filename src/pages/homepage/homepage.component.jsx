import React from "react";

//components
import Services from "../services/services.component";

//styles
import "./homepage.styles.scss";

const HomePage = () => (
  <>
    <main className="homepage-main-content">
      <section className="homepage-landing">
        <div className="background-image"></div>
        <div className="motto-container">
          <h1 className="motto-title">You rest, we clean!</h1>
          <p className="submotto">
            See how letting us clean your space can improve your life!
          </p>
        </div>
      </section>
    </main>
    <Services />
  </>
);

export default HomePage;
