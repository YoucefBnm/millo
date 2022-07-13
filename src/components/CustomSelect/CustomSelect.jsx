import './CustomSelect.scss'
import { useState } from 'react'

const CustomSelect = () => {
    const[isOpen,setOpen] = useState(false)
    const[selected,setSelected] = useState('Sort by')
    
    return (
        <div 
            className={isOpen ? 'customSelect open' : 'customSelect'}
            onClick={() => setOpen(!isOpen)}
        >
            <button type='button' className='customSelect__selected'>
                {selected}
            </button>
            <div className={isOpen ? 'customSelect__items open' : 'customSelect__items'}>
                <button type='button' className="customSelect__item">Featured</button>
                <button type='button' className="customSelect__item">Price: Low to High</button>
                <button type='button' className="customSelect__item">Price: High to Low</button>
            </div>
        </div>
    )
}

export default CustomSelect