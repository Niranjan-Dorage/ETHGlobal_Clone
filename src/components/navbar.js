import React from "react";
function Navbar() {
    return (

        <div className="navbar">
            <div className="logo">
                <img className="logoimg" src="https://cdn-icons-png.flaticon.com/128/3064/3064836.png" alt="" />
                <div className="logoname">
                    ETH
                </div>
                <div className="logoname2">
                    Bingo
                </div>
            </div>
            
            <div className="navbuttons">
                <ul>
                    <li className="li">Events</li>
                    <li className="li" >Showcase</li>
                    <li className="li">Talks</li>
                    <li className="li">Guides</li>
                    <li className="li">Perks</li>
                    <li className="li">About</li>
                </ul>
            </div>
            <div className="loginbutton">
                <div className="logintext">
                    Login
                </div>
            </div>
        </div>
    );

}
export default Navbar;