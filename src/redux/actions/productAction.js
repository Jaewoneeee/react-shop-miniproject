function getProducts(searchQuery) {

    return async (dispatch, getState) => {

        let url = `https://my-json-server.typicode.com/Jaewoneeee/react-shop-miniproject/products?q=${searchQuery}`
        let res = await fetch(url)
        let data = await res.json();
        console.log('여기가 액션', data)
        
        dispatch({type:"GET_PRODUCT_SUCCESS", payload : {data}})
    }

} 


// 여러개의 함수를 하나의 객채에 담아서 리턴할 예정 
export const productAction={getProducts}