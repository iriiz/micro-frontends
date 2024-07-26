import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Main() {
    const navigate = useNavigate();

    const handleLogin = async () => {
        navigate("/login");
    }

    const menuData = [
        { id: 1, menu: 'Inicio', link: './home', icon: '', sub: [], isLogin: false },
        {
            id: 2, menu: 'Productos', link: '', icon: '', sub: [
                { id: 1, subMenu: 'Opción 1', link: '' },
                { id: 2, subMenu: 'Opción 2', link: '' },
                { id: 3, subMenu: 'Opción 3', link: '' },
            ], isLogin: false
        },
        {
            id: 3, menu: 'Soluciones', link: '', icon: '', sub: [
                { id: 1, subMenu: 'Opción 1', link: '' },
                { id: 2, subMenu: 'Opción 2', link: '' },
            ], isLogin: false
        },
        { id: 4, menu: 'Novedades', link: '', icon: '', sub: [], isLogin: false }
    ];

    return (
        <div className='container-fluid d-flex flex-column min-vh-100'>
            <Header logo={'LogoClientes'} handleLogin={handleLogin} menuData={menuData} />
            <Footer />
        </div>
    )
}

export default Main