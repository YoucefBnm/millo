import './Card.scss'
import Asics from '../../assets/asics.jpg'
const Card = () => {
    
    return (
        <div className="card">
            <div className="card__img">
                <img src={Asics} alt="" />
            </div>
            <div className="card__detail">
                <p className="card__name">ASICS</p>
                <p className="card__price">$154.44</p>
            </div>
            <div className="card__colors">
                <span style={{backgroundColor: '#00AED1'}} className='active'/>
                <span style={{backgroundColor: '#FFFFFF'}}/>
                <span style={{backgroundColor: '#000'}}/>
            </div>
        </div>
    )
}

export default Card