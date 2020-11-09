import React from 'react'

import './menu-item.style.scss'

export const MenuItem = ({ title, id, imageUrl, size }) => {
    return (
        <div className ={`${size} menu-item`}>
            <div 
                className = "background-image" 
                style = {{ 
                backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{ title }</h1>
                <span className="subtitle">COMPRA AHORA</span>
            </div>
        </div>
    )
}

export default MenuItem;
