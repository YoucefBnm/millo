import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent  as Logo } from '../../assets/logo.svg'
import { ReactComponent  as IconSearch } from '../../assets/icon-search.svg'
import { ReactComponent  as IconUser } from '../../assets/icon-user.svg'
import { ReactComponent  as IconCart } from '../../assets/icon-cart.svg'
import './Nav.scss'

const Nav = () => {

    return (
        <Fragment>
            <nav className="nav">
                <Link to="/" className="nav__logo">
                    <Logo />
                </Link>
                <ul className="nav__list nav__list--links">
                    <li className="nav__item">
                        <Link to="/" className="nav__link link link--light">HOME</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/shop" className="nav__link link link--light">SHOP</Link>
                    </li>
                    <li className="nav__item nav__dropdown">
                        <span href="/" className="nav__link link link--light">CATEGORIES</span>
                    </li>
                    <li className="nav__item nav__dropdown">
                        <span href="/" className="nav__link link link--light">BRANDS</span>
                    </li>
                </ul>
                <ul className="nav__list nav__list--utils">
                <li className="nav__item">
                        <IconSearch />
                    </li>
                    <li className="nav__item">
                        <Link to='/login'>
                            <IconUser />
                        </Link>
                    </li>
                    <li className="nav__item">
                        <IconCart />
                    </li>
                </ul>
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default Nav