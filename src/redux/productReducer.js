const ProductReducer = (state, action) => {
    console.log("state", state,)
    console.log("action", action)
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                products: state.products.concat({
                    name: action.name,
                    type: action.category,
                    purchasePrice: action.purchasePrice,
                    photo: action.imageSource.path,
                    id: action.id
                }),
            };
        default:
            throw new Error();
    }
};

export default ProductReducer