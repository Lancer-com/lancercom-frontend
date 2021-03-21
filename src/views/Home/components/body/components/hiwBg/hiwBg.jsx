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
                                At Lancer-coms we've made our development procedure to be simple as:
                            </p>
                        </div>
                        <div className="hiwBg__acc-create">
                            <ul>
                                <li>
                                    <span>Step 1:</span>
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
                                    <span>Step 2:</span>
                                    <h4>
                                        Talk to one of our dedicated team member
                                    </h4>
                                    <p>
                                        Always ready to help customer with all issues!
                                    </p> 
                                </li>
                                <li>
                                    <span>Step 3:</span>
                                    <h4>
                                        You're done!
                                    </h4>
                                    <p>
                                        Follow your project's progress <Link to="/dashboard">here</Link>
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
