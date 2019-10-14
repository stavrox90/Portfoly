import React from 'react'
import logo from './logo.jpg'

function Logo() {
    return (
        <div>
            <img
                src={logo}
                width="10%"
                height="auto"
                alt="Z'yev"
                style={{
                    border: "4px inset gold",
                    borderRadius: "50%",
                    padding: "0.25rem",
                    margin: "20px 0 20px 0",
                }}
            />
        </div>
    )
}

export default Logo
