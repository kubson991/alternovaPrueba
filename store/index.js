export const state = () => ({
    store: {
        "products":
            [
                { "name": "redbull", "unit_price": 5000, "stock": 5 },
                { "name": "rice", "unit_price": 2000, "stock": 0 },
                { "name": "papitas de limón margarita", "unit_price": 1500, "stock": 1 },
                { "name": "meat / pound", "unit_price": 500, "stock": 8 }
            ]
    },
    shoppingCart: []
})

export const mutations = {
    sold(state) {
        state.store.products.forEach(product => {
            const index = state.shoppingCart.findIndex(productSold => {
                return productSold.name === product.name
            })
            if (index >= 0) {
                product.stock = product.stock - state.shoppingCart[index].quantity
            }
        });
        state.shoppingCart = []
    },
    addShoppingCart(state, product) {
        state.shoppingCart.push(product)
    },
    removeFromShoppingCart(state, product) {
        state.shoppingCart = state.shoppingCart.filter((p) => {
            return product.name !== p.name
        })
    },
    setStore(state, store) {
        state.store = { ...store }
    }
}


export const getters = {
    getProducts(state) {
        return state.store
    },
    getShoppingCart(state) {
        return state.shoppingCart
    }
}