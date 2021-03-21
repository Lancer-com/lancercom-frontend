import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import { SiSitepoint } from "react-icons/si";

function HeroBG() {
  return (
    <section>
      <div className="hero__background row">
        <div className="heroBg__wrap row">
          <div className="heroBg__title row">
            <h2>What is lancer Technologies?</h2>
          </div>
          <div className="heroBg__des row">
            <p>
              lancer Technologies is a sofware company that develops, innovative
              and creative products and services that provide total
              communication and information solutions. Among a cyber security
              services, web design and development, android and ios
              applications, ERPs, CRMs, e-commerce solutions,
              business-to-business applications , business-to-client
              applications,graphic design, managed hosting and internet portal
              management are few that we offer.
            </p>
            <p>Digital With Us Today.</p>
            <br />
            <p>
              <span>
                <SiSitepoint />
              </span>
              Try Lancer today!
            </p>
            <button>
              <font> Let's Go</font>
              <span>
                <FaHandPointRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBG;
