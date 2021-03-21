import React from 'react'
// import PropTypes from 'prop-types'

function Header(props) {
    return (
        <>
            <header>
                <main>
                    <div>
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded text-light" aria-label="Eleventh navbar example">
                            <div class="container-fluid">
                                <a className="navbar-brand" href="/">Lancer Technologies </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarsExample09">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a className="nav-link active" href="/">Projects</a>
                                        </li>
                                        <li class="nav-item">
                                            <a className="nav-link active" href="/" tabindex="-1">Blog</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="/" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                            <ul class="dropdown-menu " aria-labelledby="dropdown09">
                                                <li><a class="dropdown-item" href="/">Services</a></li>
                                                <li><a class="dropdown-item" href="/">Contacts</a></li>
                                                <li><a class="dropdown-item" href="/">About Us</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <form action="#">
                                        <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </main>
            </header>
        </>
    )
}

export default Header;


