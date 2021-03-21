import React from 'react';
import { TiTickOutline } from 'react-icons/ti'
function ShBG() {
    return (
        <section>
            <div className="sh__section row">
                <div className="sh__section-wrap">
                    <ul className="sh__section-items mask">
                        <li className="sh__section-item">
                            <span>
                                <TiTickOutline />
                            </span>
                            <font>
                                Web Development
                            </font>
                        </li>
                        <li className="sh__section-item">
                            <span>
                                <TiTickOutline />
                            </span>
                            <font>
                                App Development
                            </font>
                        </li>
                        <li className="sh__section-item">
                            <span>
                                <TiTickOutline />
                            </span>
                            <font>
                                Animations
                            </font>
                        </li>
                        <li className="sh__section-item">
                            <span>
                                <TiTickOutline />
                            </span>
                            <font>
                                Product Design
                            </font>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ShBG;
