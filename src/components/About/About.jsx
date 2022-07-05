import './About.scss'
import { Link } from 'react-router-dom'

const About = () => (
    <section className="about">
        <h2 className="heading heading--hero heading--dark">crawl walk run</h2> 
        <p>In Millo our main focus is to get you the maximum impact for your workout activities wether you are a professional or an amateur, wherever the sitiation indoor or outdoor, with our experts who makes our picked shoes living to a large excepectations hosting all necessary features to face the most challenging and demanding sessions.</p>
        <Link to='/shop' className='btn btn--border'>shop now</Link>
    </section>
)

export default About