import React, { Component } from 'react'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';

class Team extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <section>
                <div className="team__section row aligner">
                    <div className="team__wrap">
                        <div className="team__des">
                            <h2>Team</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quos perspiciatis tempore odio! Voluptate doloremque sequi quisquam, maiores adipisci delectus?
                            </p>
                        </div>
                        <div className="team__carousel ">
                            <div className="team__member-container row">
                                <div className="slick-list">
                                    <ul>
                                        <li className="aligner">
                                            <figure className="avatar">
                                                <img src="https://unsplash.it/300" alt="" />
                                            </figure>
                                            <div className="member__description row">
                                                <div className="member-name">
                                                    <h4>
                                                        Lorem, ipsum.
                                                    </h4>
                                                </div>
                                                <div className="member-role">
                                                    <code>
                                                        frontend web developer
                                                    </code>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <nav className="team__member-toggle">
                                <button className="hand">
                                    <BiUpArrowAlt />
                                </button>
                                <button className="hand">
                                    <BiDownArrowAlt />
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;
