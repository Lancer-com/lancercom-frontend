import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RiMenu4Fill } from 'react-icons/ri'
import { GrFormClose } from 'react-icons/gr';

function Header(props) {

    const [isClicked, setIsClicked] = useState(false);

    const handleToggle = e => {
        setIsClicked(!isClicked);
    }

    return (
        <>
            <header>
                <div className="header__container row">
                    <div className="header-wrap">
                        <div className="header_logo">
                            <h1>
                                Lancer Technologies
                            </h1>
                        </div>
                        <nav className="header__navs">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/projects">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                            </ul>
                            <div className="hamburger-menu" onClick={handleToggle}>
                                {isClicked ? (
                                    <span>
                                        <GrFormClose />

                                    </span>
                                ) : (
                                    <span>
                                        <RiMenu4Fill />
                                    </span>
                                )}
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;









