import React from "react";

const Nav = () => {
    return (
        <nav className="navMenu">
            <div className="NavDiv">
                <div className="Logo">MyApp</div>
                <ul>
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/aboutme">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;