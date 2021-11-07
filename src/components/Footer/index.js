import React from 'react';

function Footer() {


    return (
        <div className="bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-row-reverse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://github.com/juju669">Github</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/julian-wilson-b86692104/">LinkedIn</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" target="_blank" rel="noopener noreferrer" href="">Twitter</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>


    )
}

export default Footer;