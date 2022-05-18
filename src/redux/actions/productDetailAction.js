function getProductDetail(id) {
    return async (dispatch, getState) => {
        
        // store에 저장되어있는 모든 state를 가져오는 함수 
        //console.log(getState)
        console.log(getState())
        console.log(getState().login)
        console.log(getState().login.id)
        console.log(getState().product)
        
        let url = `https://my-json-server.typicode.com/Jaewoneeee/react-shop-miniproject/products/${id}`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        
        dispatch({type : "GET_DETAIL_SUCCESS" , payload : {data}})
    }
}

export const productDetailAction = {getProductDetail}