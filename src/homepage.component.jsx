import React from 'react'

import './homepage.style.scss'

const HomePage = () => {
    return (
        <div className = "homepage" >
            <div className="directory-menu">
                <div className ="menu-item">
                    <div className="content">
                        <h1 className="title">GORRAS</h1>
                        <span className="subtitle">COMPRA AHORA</span>
                    </div>
                </div>

                <div className ="menu-item">
                    <div className="content">
                        <h1 className="title">POLERAS</h1>
                        <span className="subtitle">COMPRA AHORA</span>
                    </div>
                </div>

                <div className ="menu-item">
                    <div className="content">
                        <h1 className="title">ZAPATILLAS</h1>
                        <span className="subtitle">COMPRA AHORA</span>
                    </div>
                </div>

                <div className ="menu-item">
                    <div className="content">
                        <h1 className="title">MUJERES</h1>
                        <span className="subtitle">COMPRA AHORA</span>
                    </div>
                </div>

                <div className ="menu-item">
                    <div className="content">
                        <h1 className="title">HOMBRES</h1>
                        <span className="subtitle">COMPRA AHORA</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HomePage;