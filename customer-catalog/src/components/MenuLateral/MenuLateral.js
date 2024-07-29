import React from 'react';
import './MenuLateral.css';

import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function MenuLateral() {
    const navigate = useNavigate();
    const handleExit = async (event) => {
        navigate("/");
    };
    return (
        <div>
            <div className='container-body-menuLateral'>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">
                        <i className="bi bi-clipboard2-check icon-menu"></i>
                    </Nav.Link>
                    <Nav.Link href="/registro">
                        <i className="bi bi-person-vcard icon-menu "></i>
                    </Nav.Link>
                    <Nav.Link>
                        <i className="bi bi-person icon-menu"></i>
                    </Nav.Link>
                    <Nav.Link>
                        <i className="bi bi-file-earmark-plus icon-menu"></i>
                    </Nav.Link>
                    <Nav.Link>
                        <i className="bi bi-layout-text-sidebar-reverse icon-menu"></i>
                    </Nav.Link>
                </Nav>
                <div className="spaces-button">
                    <i className="bi bi-box-arrow-left icon-exit" onClick={handleExit}></i>
                </div>
            </div>
        </div>
    )
}

export default MenuLateral