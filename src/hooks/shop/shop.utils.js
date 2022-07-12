import { useState, useCallback } from "react";
import { SHOP_DATA } from "../../assets/data/SHOP_DATA";
import { removeItem } from "./shop.removeItem";

export default function ShopUtils() {
    const[shopProducts,setShopProducts] = useState(SHOP_DATA)
    const[filtredProducts,setFiltredProducts] = useState([])
    const[selectedTags,setSelectedTags] = useState([])

    

    const displayFilterResult = useCallback((value,tag) => {
        const productsINdex = filtredProducts.map(product => product.brand).indexOf(value)
        const chunk = shopProducts.filter(product =>
            tag === 'brand' ? product.brand === value 
            : product.category === value 
        )

        if(productsINdex === -1) {
            setFiltredProducts(filtredProducts.unshift(...chunk))
            setSelectedTags(selectedTags.unshift(value))
        } else {
            setFiltredProducts(removeItem(filtredProducts,chunk,selectedTags,productsINdex,value))
        }
        setShopProducts(filtredProducts)
    }, [])
    return {shopProducts,filtredProducts,selectedTags}
}