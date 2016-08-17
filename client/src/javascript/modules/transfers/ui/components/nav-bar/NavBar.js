import React, { PropTypes } from 'react';
import './nav-bar.sass';

function NavBar(props, context) {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <span className="navbar-brand">Finance accounting APP</span>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;