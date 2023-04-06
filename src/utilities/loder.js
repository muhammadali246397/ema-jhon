import { getShoppingCart } from "./fakedb";

const CartProductsLoded = async () => {
    const productsLoded = await fetch('products.json')
    const products = await productsLoded.json()

    const getCartProducts = getShoppingCart()
    const cardproduct = [];
    for (const id in getCartProducts){
        const addedProduct = products.find(pd => pd.id === id)
        if(addedProduct){
            const quantity = getCartProducts[id]
            addedProduct.quantity=quantity
            cardproduct.push(addedProduct);
        } 
    }
    return cardproduct; 
}
export{CartProductsLoded};