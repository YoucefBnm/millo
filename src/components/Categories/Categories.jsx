import { Link } from "react-router-dom"
import RunningThumb from '../../assets/running-thumb.jpg'
import ClimbingThumb from '../../assets/climbing-thumb.jpg'
import CrossFitThumb from '../../assets/crossfit-thumb.jpg'

import './Categories.scss'

const Categories = () => {

    return(
        <section className="categories">
            <div className="categories__card">
                <div className="categories__text">
                    <h2 className="heading heading--title heading--light">running club</h2>     
                    <Link to='/running'>
                        <div className="btn btn--light">collection</div>
                    </Link>
                </div>   
                <div className="categories__img">
                    <img src={RunningThumb} alt="running machine" />    
                </div> 
            </div> 
            <div className="categories__card">
                <div className="categories__text">
                    <h2 className="heading heading--title heading--light">climbing club</h2>     
                    <Link to='/climbing'>
                        <div className="btn btn--light">collection</div>
                    </Link>
                </div>   
                <div className="categories__img">
                    <img src={ClimbingThumb} alt="person climbing outdoor" />    
                </div> 
            </div> 
            <div className="categories__card">
                <div className="categories__text">
                    <h2 className="heading heading--title heading--light">crossfit club</h2>     
                    <Link to='/crossfit'>
                        <div className="btn btn--light">collection</div>
                    </Link>
                </div>   
                <div className="categories__img">
                    <img src={CrossFitThumb} alt="person workout" />    
                </div> 
            </div> 
        </section>
    )
}

export default Categories