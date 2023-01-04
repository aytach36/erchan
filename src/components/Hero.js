// Styles
import "./Hero.css"
import HeroImage from "../img/hero.png"

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-container container">
                <div className="hero-description">
                    <p className="sub-heading">Χειρουργος</p>
                    <h1 className="heading-primary">Μουσταφά Ερχάν</h1>
                    <p className="hero-text">ΔΙΑΓΝΩΣΗ & ΑΝΤΙΜΕΤΩΠΙΣΗ ΧΕΙΡΟΥΡΓΙΚΩΝ ΠΑΘΗΣΕΩΝ</p>
                    <div className="hero-buttons">
                        <a href="#" className="btn">ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ</a>
                        <a href="#" className="btn">ΡΩΤΗΣΤΕ ΤΟΝ ΓΙΑΤΡΟ ΣΑΣ</a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img className="hero-image" src={HeroImage} alt="Doctor image" />
                </div>
            </div>
        </div>
    )
}
