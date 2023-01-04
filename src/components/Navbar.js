import logo from "../img/logo.png"
import "./Navbar.css"

import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        if (open) {
            return setOpen(false)
        }
        setOpen(true)
    }


    return (
        <nav className={open ? "navbar open" : "navbar"}>
            <div className="social-container">
                <div className="social container">
                    <a href="" className="social-link">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a href="" className="social-link">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="" className="social-link">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </div>
            </div>
            <div className="logo-and-details-container">
                <div className="logo-and-details container">
                    <img className="logo" src={logo} />
                    <div className="icon-and-details-container">
                        <div className="icon-and-details">
                            <ion-icon name="call"></ion-icon>
                            <div className="details">
                                <p className="detail-title">Καλέστε τώρα:</p>
                                <a className="phone-number" href="tel:2531404007">2531 404 007</a>
                                <a className="phone-number" href="tel:6978 327 774">6978 327 774</a>
                            </div>
                        </div>
                        <div className="icon-and-details">
                            <ion-icon name="location"></ion-icon>
                            <div className="details">
                                <p className="detail-title">Διεύθυνση:</p>
                                <p className="detail-description">Ορφέως 12</p>
                                <p className="detail-description">Κομοτηνή</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-links-container">
                <div className="nav-links container">
                    <NavLink className="nav-link" onClick={() => setOpen(false)} to="/">Αρχική</NavLink>
                    <NavLink className="nav-link" onClick={() => setOpen(false)} to="/">Παθήσεις</NavLink>
                    <NavLink className="nav-link" onClick={() => setOpen(false)} to="/">Επεμβάσεις</NavLink>
                    <NavLink className="nav-link" onClick={() => setOpen(false)} to="/faq">Συχνές Ερωτήσεις</NavLink>
                    <NavLink className="nav-link" onClick={() => setOpen(false)} to="/">Βιογραφικό</NavLink>
                    <NavLink className="nav-link" onClick={() => setOpen(false)} to="/">Επικοινωνία</NavLink>
                </div>
                <button className="mobile-nav-btn" onClick={handleClick}>
                    <ion-icon name="menu-outline"></ion-icon>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
        </nav>
    )
}
