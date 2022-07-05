import './Cta.scss'
import CtaImage from '../../assets/cta-thumb.jpg'
import { Link } from 'react-router-dom'

const Cta = () => (
    <section className="cta">
        <div className="cta__text">
            <h2 className="heading heading--hero heading--dark">start your new habbit &amp; join the club</h2>
            <p className="hero-text">Living up to a large scale of excepectations, hosting all necessary features to face the most demanding sessions and competitions, our shoes are highly stable for the different movements from lifting, jumbing and sprinting and all your activities.</p>
            <Link className='btn btn--dark' to='/shop'>Learn More</Link>
        </div> 
        <div className="cta__img">
            <img src={CtaImage} alt="person lifting" />
        </div>
    </section>
)

export default Cta