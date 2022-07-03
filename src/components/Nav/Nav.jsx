import './Nav.scss'
import Logo from '../../assets/logo.png'
import { ReactComponent  as IconSearch } from '../../assets/icon-search.svg'
import { ReactComponent  as IconUser } from '../../assets/icon-user.svg'
import { ReactComponent  as IconCart } from '../../assets/icon-cart.svg'

const Nav = () => {

    return (
        <nav className="nav">
            <div className="nav__logo">
                <img src={Logo} alt='millo logo' />
            </div>
            <ul className="nav__list nav__list--links">
                <li className="nav__item">
                    <a href="/" className="nav__link link link--light">HOME</a>
                </li>
                <li className="nav__item">
                    <a href="/" className="nav__link link link--light">SHOP</a>
                </li>
                <li className="nav__item">
                    <a href="/" className="nav__link link link--light">CATEGORIES</a>
                </li>
                <li className="nav__item">
                    <a href="/" className="nav__link link link--light">BRANDS</a>
                </li>
            </ul>
            <ul className="nav__list nav__list--utils">
            <li className="nav__item">
                    <IconSearch />
                </li>
                <li className="nav__item">
                    <IconUser />
                </li>
                <li className="nav__item">
                    <IconCart />
                </li>
            </ul>
        </nav>
    )
}

export default Nav