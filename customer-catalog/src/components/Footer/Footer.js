import React from 'react';
import "./Footer.css";

function Footer({ fixed = true }) {
    return (
        <footer className={`${fixed ? "fixed-bottom " : ""}p-3`}>
            <div>Footer</div>
        </footer>
    )
}

export default Footer