let initailState = {
    productList : []
}

function productReducer(state=initailState, action) {
    let {type, payload} = action
    switch (type) {
        case "GET_PRODUCT_SUCCESS" :
            return {...state , productList : payload.data}
        default :
            return { ...state };
    }
}

// default 있으면 하나만 export한다는것
export default productReducer;