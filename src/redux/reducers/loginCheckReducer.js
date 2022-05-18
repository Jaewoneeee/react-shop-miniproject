let initailState = {
    id : '',
    password : '',
    loginCheck : false
}

function loginCheckReducer(state=initailState, action) {
    let {type, payload} = action 
    switch(type) {
        case "LOGIN_SUCCESS" :
            console.log("로그인성공? 리듀서")
            return { ...state, id : payload.id, password : payload.password, loginCheck : true}

            default :
            return { ...state };
    }
    
}

export default loginCheckReducer