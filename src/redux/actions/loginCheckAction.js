function login (id, password) {
    return (dispatch, getState) => {
        // dispatch가 이 액션과 데이터를 던지면 reducer가 싹 잡는다
        dispatch({type:"LOGIN_SUCCESS", payload : {id, password}})
    }
}

export const loginCheckAction = {login}