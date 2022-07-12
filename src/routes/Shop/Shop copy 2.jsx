import './Shop.scss'
import { COLORS } from '../../assets/data/SHOP_DATA'
import { useState } from "react"
import { useCallback } from "react"

const items = [
    {
        id: 1,
        brand: 'nike',
        name: 'air jordan'
    },
    {
        id: 2,
        brand: 'adidas',
        name: 'mercurial'
    },
    {
        id: 3,
        brand: 'adidas',
        name: 'stan smith'
    },
    {
        id: 4,
        brand: 'nike',
        name: 'air max'
    },
    {
        id: 5,
        brand: 'nike',
        name: 'tn'
    },
    {
        id: 6,
        brand: 'asics',
        name: 'venom'
    }
]
const getbrands = [...new Set(items.map(brand => brand.brand))]
const Shop = () => {
    
    const[shopProducts,setShopProducts] = useState(items)
    const[filtredProducts,setFiltredProducts] = useState([])
    const[initTags,setInitTags] = useState([])
    const[selectedTags,setSelectedTags] = useState([])

    const displayFilterResult = useCallback((value) => {
        const productsIndex = filtredProducts.map(product => product.brand).indexOf(value)
        const chunk = shopProducts.filter(product => product.brand === value)

        if(productsIndex === -1) {
            setFiltredProducts(filtredProducts.unshift(...chunk))
            setSelectedTags(selectedTags.unshift(value))
        } else {
            setFiltredProducts(filtredProducts.splice(productsIndex,chunk.length))
            setSelectedTags(selectedTags.splice(selectedTags.findIndex(val => val === value), 1))
        }
        setShopProducts(filtredProducts)
        setInitTags(selectedTags)
        console.log('selected tags: ',selectedTags,filtredProducts)
    },[])

    return(
        <section className="shop">
            <nav>
                {
                    initTags.length ?
                    initTags.map(tag => (
                        <div>
                            <strong style={{marginRight: '5px'}}>{tag}</strong>
                            <span onClick={() => displayFilterResult(tag)}>x</span>
                        </div>
                    )) : null
                }
            </nav>
            <nav>
                {
                    getbrands.map(brd => (
                        <span 
                            style={{marginRight: '25px'}}
                            onClick={() => displayFilterResult(brd)}
                        >{brd}</span>
                    ))
                }
            </nav>

            <div style={{display: 'flex'}}>
                {
                    shopProducts.map(product => (
                        <div style={{marginRight: '25px'}} key={product.id}>
                            <div>{product.name}</div>
                            <div>{product.brand}</div>
                            <div>${product.id}</div>
                        </div>
                    ))
                }
            </div>
            {console.log(COLORS)}
        </section>
    )

}

export default Shop