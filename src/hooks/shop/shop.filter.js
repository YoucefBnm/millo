
export const filterItem = (products,filtredProducts,tags,tag,value) => {
    const productsIndex = filtredProducts.map(product => 
        tag === 'brand' ? product.brand
        : product.category
        ).indexOf(value)
    const chunk = products.filter(product => 
        tag === 'brand' ? product.brand === value 
        : product.category === value 
        )
    
}