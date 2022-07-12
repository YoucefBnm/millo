export const removeItem = (shopItems,chunk,tags, index, value) => {
    shopItems.splice(index, chunk.length)
    tags.splice(tags.findIndex(val => val === value), 1)
}