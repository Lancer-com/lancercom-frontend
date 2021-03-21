import React, { Component } from 'react';
import { SiWebauthn } from 'react-icons/si';

export class Services extends Component {
    render() {
        return (
            <section>
                <div className="services__section row mask">
                    <div className="services__wrap">
                        <div className="services__heading">
                            <h2>
                                Our services
                            </h2>
                        </div>
                        <div className="services__description">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod accusamus non magnam. Labore ducimus impedit unde sequi repudiandae odio blanditiis? Ad iure doloribus enim?
                            </p>
                        </div>
                        <div className="services__boxes-illus">
                            <ul>
                                <li>
                                    <span>
                                        <SiWebauthn />
                                    </span>
                                    <p>
                                        Lorem, ipsum.
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <SiWebauthn />
                                    </span>
                                    <p>
                                        Lorem ipsum dolor.
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <SiWebauthn />
                                    </span>
                                    <p>
                                        Lorem ipsum dolor.
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <SiWebauthn />
                                    </span>
                                    <p>
                                        Lorem, ipsum.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;
