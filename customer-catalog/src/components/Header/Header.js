import React from 'react';

import Menu from '../Menus/Menu';

function Header({ logo, handleLogin, fixed = true, menuData }) {

    return (
        <header className={`${fixed ? "fixed-top " : ""} headers`}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> {logo} </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Menu handleLogin={handleLogin} menuData={menuData} />
                </div>
            </nav>
        </header>
    )
}

export default Header