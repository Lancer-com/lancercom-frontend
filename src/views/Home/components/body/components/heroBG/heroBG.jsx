import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { SiSitepoint } from 'react-icons/si'

function HeroBG() {
    return (
        <section>
            <div className="hero__background row">
                <div className="heroBg__wrap row">
                    <div className="heroBg__title row">
                        <h2>
                            Lorem ipsum dolor sit amet.
                        </h2>
                    </div>
                    <div className="heroBg__des row">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, hic. Repellat obcaecati vero sunt nulla, sit nisi laboriosam at.
                        </p>
                        <br />
                        <p>Lorem ipsum dolor sit amet.</p>
                        <br />
                        <p>
                            <span>
                                <SiSitepoint />
                            </span>
                            Try Lancer today!
                        </p>
                        <button>
                            <font> Let&apos;s Go</font>
                            <span>
                                <FaHandPointRight />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBG;
