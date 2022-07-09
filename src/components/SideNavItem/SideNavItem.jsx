import { useState } from "react";
import './SideNavItem.scss'

const SideNavItem = ({title,items,handleClick,tag}) => {
    const[open,setOpen] = useState(false)

    return(
        <div className="sideNavItem">
            <div className="sideNavItem__group">
                <h2 
                    onClick={() => setOpen(!open)}
                    className={open 
                        ? "sideNavItem__title sideNavItem__title--open"
                        : "sideNavItem__title"
                }
                >
                    {title}
                </h2>
                <ul 
                    className={open 
                        ? "sideNavItem__list sideNavItem__list--open"
                        : "sideNavItem__list"
                    }
                >
                    {
                        items.map((item,index) => (
                            <li 
                                key={index}
                                className="sideNavItem__item"
                                onClick={() => handleClick(tag,item)}
                            >
                                <span>{item}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SideNavItem