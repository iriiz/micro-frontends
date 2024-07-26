import React from 'react';
import './Menu.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Menu({ handleLogin, menuData }) {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {menuData.map((item) => (
                    item.sub.length > 0 ? (
                        <li className="nav-item dropdown" key={item.id}>
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {item.menu}
                            </a>
                            <ul className="dropdown-menu">
                                {item.sub.map((subItem) => (
                                    <li key={subItem.id}>
                                        <a className="dropdown-item" href={subItem.link}>
                                            {subItem.subMenu}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ) : (
                        <li className="nav-item" key={item.id}>
                            <a className="nav-link" aria-current="page" href={item.link}>
                                {item.menu}
                            </a>
                        </li>
                    )
                ))}
            </ul>
            <form className="d-flex">
                <button className="btn btn-outline-primary space-button container-btn-menu btn-font" type="submit" onClick={handleLogin}>Iniciar Sesión</button>
                <button className="btn btn-outline-success container-btn-menu btn-font" type="submit">Contacto</button>
            </form>
        </div>
    )
}

export default Menu