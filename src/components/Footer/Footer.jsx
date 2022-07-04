import { Fragment } from 'react'
import './Footer.scss'
import { ReactComponent  as IconFacebook } from '../../assets/logo-facebook.svg'
import { ReactComponent  as IconTwitter } from '../../assets/logo-twitter.svg'
import { ReactComponent  as IconInstagram } from '../../assets/logo-instagram.svg'
import { ReactComponent  as IconPinterest} from '../../assets/logo-pinterest.svg'

const Footer = () => (
    <Fragment>
        <footer className="footer">
            <div className="footer__col">
                <h2 className="heading heading--title heading--light">SERVICES</h2>
                <ul className="footer__list">
                    <li className="footer__item">
                        <span className="link link--grey">promotions</span>
                    </li>
                    <li className="footer__item">
                        <span className="link link--grey">find store</span>
                    </li>
                    <li className="footer__item">
                        <span className="link link--grey">newsletter</span>
                    </li>
                    <li className="footer__item">
                        <span className="link link--grey">community</span>
                    </li>
                </ul>
            </div>

            <div className="footer__col">
                <h2 className="heading heading--title heading--light">GET HELP</h2>
                <ul className="footer__list">
                    <li className="footer__item">
                        <span className="link link--grey">order status</span>
                    </li>
                    <li className="footer__item">
                        <span className="link link--grey">shipping &amp; delivery</span>
                    </li>
                    <li className="footer__item">
                        <span className="link link--grey">returns</span>
                    </li>
                    <li className="footer__item">
                        <span className="link link--grey">payment options</span>
                    </li>
                    <li className="footer__item">
                        <span className="link link--grey">gift card balance</span>
                    </li>
                    <li className="footer__item">
                        <span className="link link--grey">contact us</span>
                    </li>
                </ul>
            </div>

            <div className="footer__col">
                <h2 className="heading heading--title heading--light">ABOUT</h2>
                <ul className="footer__list">
                    <li className="footer__item">
                        <span className="link link--grey">blog</span>
                    </li>
                    <li className="footer__item">
                        <span className="link link--grey">careers</span>
                    </li>
                    <li className="footer__item">
                        <span className="link link--grey">investors</span>
                    </li>
                    <li className="footer__item">
                        <span className="link link--grey">purpose</span>
                    </li>
                </ul>
            </div>

            <div className="footer__col footer__social">
                <h2 className="heading heading--title heading--light">FOLLOW US</h2>
                <ul className="footer__list footer__list-social">
                    <li className="footer__item">
                        <IconFacebook />
                    </li>
                    <li className="footer__item">
                        <IconTwitter />
                    </li>
                    <li className="footer__item">
                        <IconInstagram />
                    </li>
                    <li className="footer__item">
                        <IconPinterest />
                    </li>
                </ul>
                <span>&copy; develped by YCF-Dev 2022.all rights reserved.</span>
            </div>
        </footer>
    </Fragment>
)

export default Footer