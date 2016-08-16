import React, { PropTypes } from 'react';
import './nav-bar.sass';

function NavBar(props, context) {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">

                <div className="navbar-header">
                    <span className="navbar-brand">Finance accounting APP</span>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">snap_alex_19...</a></li>
                        <li><a href="#">Выход</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;