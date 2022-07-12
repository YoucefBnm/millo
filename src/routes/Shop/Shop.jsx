import './Shop.scss'
import { SHOP_DATA, CATEGORIES, BRANDS, COLORS, SIZES } from '../../assets/data/SHOP_DATA'
import { useState } from "react"
import { useCallback } from "react"
import SideNavItem from '../../components/SideNavItem/SideNavItem'
import Card from '../../components/Card/Card'

const Shop = () => {
    
    const[shopProducts,setShopProducts] = useState(SHOP_DATA)
    const[filtredProducts,setFiltredProducts] = useState([])
    const[initTags,setInitTags] = useState([])
    const[selectedTags,setSelectedTags] = useState([])

    const displayFilterResult = useCallback((value, tag) => {
        const productsIndex = filtredProducts.map(product => tag === 'brand' ? product.brand : product.category).indexOf(value)
        const getProducts = shopProducts.filter(product => tag === 'brand' ? product.brand === value : product.category === value)

        if(productsIndex === -1) {
            setFiltredProducts(filtredProducts.unshift(...getProducts))
            setSelectedTags(selectedTags.unshift(value))
        } else {
            setFiltredProducts(filtredProducts.splice(productsIndex,getProducts.length))
            setSelectedTags(selectedTags.splice(selectedTags.findIndex(val => val === value), 1))
        }
        setShopProducts(filtredProducts)
        setInitTags(selectedTags)
        console.log('selected tags: ',selectedTags,filtredProducts)
    },[])

    return(
        <section className="shop">
            <div className="shop__container">
                <nav className="sideNav">
                    <div className="sideNav__container">
                        <div className="sideNav__tags">
                            {
                                initTags.length
                                ? initTags.map(tag => (
                                    <div onClick={() => displayFilterResult(tag,null)} className="tag">{tag}</div>
                                ))
                                : null
                            }
                        </div>
                        <div className="sideNav__items">
                            <SideNavItem
                                title='category'
                                items={CATEGORIES}
                                handleClick={displayFilterResult}
                                tag='category'
                            />
                            <SideNavItem
                                title='brand'
                                items={BRANDS}
                                handleClick={displayFilterResult}
                                tag='brand'
                            />
                            <SideNavItem
                                title='color'
                                items={COLORS}
                                handleClick={displayFilterResult}
                                tag='color'
                            />
                            <SideNavItem
                                title='sizes'
                                items={SIZES}
                                handleClick={displayFilterResult}
                                tag='size'
                            />
                        </div>
                    </div>
                </nav>
                <div className="shop__sort">
                    sort 
                </div>
                <div className="shop__products">
                    {
                        shopProducts.map(product => (
                            <Card
                                key={product.id}
                                image={product.colors.image}
                                colors={product.colors}
                                title={product.title}
                                price={product.price}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )

}

export default Shop