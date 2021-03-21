import React, { Component } from "react";
import { SiWebauthn } from "react-icons/si";
import { AiOutlineAppstoreAdd, AiOutlineCloudServer } from "react-icons/ai";
import { MdGraphicEq } from "react-icons/md";

export class Services extends Component {
  render() {
    return (
      <section>
        <div className="services__section row mask">
          <div className="services__wrap">
            <div className="services__heading">
              <h2>Our services</h2>
            </div>
            <div className="services__description">
              <p>
                We perform world-class custom software development services for
                startups, small-to-midsize (SMB), and enterprise-size businesses
                and any other software-related inquiries.
              </p>
            </div>
            <div className="services__boxes-illus">
              <ul>
                <li>
                  <span>
                    <SiWebauthn />
                  </span>
                  <p>web development</p>
                </li>
                <li>
                  <span>
                    <AiOutlineAppstoreAdd />
                  </span>
                  <p>Custom Application Development</p>
                </li>
                <li>
                  <span>
                    <MdGraphicEq />
                  </span>
                  <p>Graphical designs</p>
                </li>
                <li>
                  <span>
                    <AiOutlineCloudServer />
                  </span>
                  <p>Cloud computing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
