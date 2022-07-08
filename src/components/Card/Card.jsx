import './Card.scss'
import { useState } from 'react'

const Card = ({image,colors,title,price}) => {
    const[activeImage,setActiveImage] = useState(0)
    
    return (
        <div className="card">
            <div className="card__tag">
                <span>best seller</span>
            </div>
            <div className="card__img">
                {
                    colors.map((img,index) => (
                        <img 
                            src={image} 
                            alt={`${title} shoes`} 
                            data-active={activeImage === index}
                        />
                    ))
                }
            </div>
            <div className="card__colors">
                {
                    colors.map((color,index) => (
                        <span 
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={index===activeImage && 'active'}
                            style={{backgroundColor: color.color}}
                        />
                    ))
                }
            </div>
            <div className="card__detail">
                <p className="card__name">{title}</p>
                <p className="card__price">${Number(price).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Card