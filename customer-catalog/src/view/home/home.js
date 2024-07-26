import React from "react";

import MenuLateral from "../../components/MenuLateral/MenuLateral";

function Home() {
    return (
        <div className='container-fluid container-body'>
            <div className="row">
                <div className="col-1 col-menu-lateral">
                    <MenuLateral />
                </div>
                <div className="col-11">
                    <div className="d-flex flex-column  align-items-center">
                        <h1 className="text-center">Home</h1>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home