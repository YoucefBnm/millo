import { Link } from 'react-router-dom'
import HeroImage from '../../assets/hero-img.jpg'
import './Header.scss'

const Header = () => (
    <header className="header">
        <div className="header__img">
            <img src={HeroImage} alt="person climbing" />
        </div>
        <div className="header__text">
            <h2 className="heading--hero heading--hero--sup heading--light">join the climbing club</h2>
            <h2 className="heading heading--hero heading--light">discover our new climbing collection</h2>
            <Link to="/shop" className="btn btn--light">DISCOVER MORE</Link>
        </div>
    </header>
)

export default Header