import Footer from "../../components/Footer/Footer"
import './Shop.scss'
import { SHOP_DATA,CATEGORIES, BRANDS, SIZES } from '../../assets/data/SHOP_DATA'
import { useCallback, useState } from "react"
import SideNavItem from "../../components/SideNavItem/SideNavItem"
import Card from '../../components/Card/Card'

const Shop = () => {
    const[shopProducts,setShopProducts] = useState(SHOP_DATA)
    const[filtredProducts,setFiltredProducts] = useState([])
    const[selectedTags,setSelectedTags] = useState([])

    const displayFilterResult = useCallback((tag,value) => {
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
    }, [])
    return (
        <>
            <section className="shop">
                <div className="shop__container">
                    <nav className="shop__nav">
                  <div className="shop__group">
                        <h2 className="shop__title">filtered by</h2>
                            {
                                selectedTags.length ? (
                                    <ul className="shop__tags">
                                        {
                                            selectedTags?.map((tag,index) => (
                                                <li key={index}>
                                                    <span className="tag">{tag}</span>
                                                </li>
                                            )) 
                                        }
                                    </ul>
                                ) : null
                            }
                   </div>
                   <div className="shop__group">
                    <SideNavItem
                        title='categories'
                        items={CATEGORIES}
                        tag='category'
                        handleClick={displayFilterResult}
                    />
                   </div>
                   <div className="shop__group">
                    <SideNavItem
                        title='brands'
                        items={BRANDS}
                        tag='brand'
                        handleClick={displayFilterResult}
                    />
                   </div>
                   <div className="shop__group">
                    <SideNavItem
                        title='sizes'
                        items={SIZES}
                        tag='size'
                        handleClick={displayFilterResult}
                    />
                   </div>
                    </nav>
                    
                    <div className="shop__sort">
                        sort items
                    </div>
                    <div className="shop__products">
                        {
                            shopProducts.map(product => (
                                <Card 
                                    key={product.id}
                                    image={product.colors.imageUrl}
                                    colors={product.colors}
                                    title={product.brand}
                                    price={product.price}
                                />
                            ))
                        }
                    </div>
                </div> 
            </section>
            <Footer />
        </>
    )
}

export default Shop