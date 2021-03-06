import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'

function HiwBg() {
    return (
        <section>
            <div className="hiwBg__section row aligner">
                <div className="hiwBg__wrap">
                    <div className="hiwBg__subtitle row">
                        <h1>
                            How we work
                        </h1>
                    </div>
                    <div className="hiwBg__details row">
                        <div className="hiwBg__detail-intro row">
                            <p>
                                At Lancer-coms we&apos;ve made our development procedure to be simple as:
                            </p>
                        </div>
                        <div className="hiwBg__acc-create">
                            <ul>
                                <li>
                                    <span>1</span>
                                    <h4>
                                        Allow us create you an account:
                                    </h4>
                                    <div >
                                        <Link to="/signup" className="linkto__signup mask">
                                            <font>
                                                Create account
                                            </font>
                                            <code>
                                                <BsArrowRight />
                                            </code>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <span>2</span>
                                    <h4>
                                        Talk to one of our dedicated team member
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sequi eos rem.
                                    </p>
                                </li>
                                <li>
                                    <span>3</span>
                                    <h4>
                                        You&apos;re done!
                                    </h4>
                                    <p>
                                        Follow your project&apos;s progress <Link to="/dashboard">here</Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HiwBg;
