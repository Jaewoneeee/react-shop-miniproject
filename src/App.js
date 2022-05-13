import  React , { useState, useEffect } from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
// import ProductAll from './page/ProductAll';
// import Login from './page/Login';
// import ProductDetail from './page/ProductDetail';
import  { Login, ProductAll, ProductDetail } from './page'
import  NavBar  from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './routes/PrivateRoute';


// 1. 전체상품페이지, 로그인, 상품상세페이지
// 2. 전체상품페이지에서는 전체 상품을 볼 수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 4. 상품디테일을 눌렀으나, 로그인이 안되어있을경우 로그인페이지가 먼저 나온다
// 5. 로그인 되어있을 경우 상품디테일페이지를 볼 수 있다 
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.(로그아웃 => 상품디테일 볼 수 없음)
// 7. 오른쪽 상단 버튼에 로그인,로그아웃 상태표시
// 8. 상품검색 


function App() {

  const [loginCheck, setLoginCheck] = useState(false) // true면 로그인이됨

  useEffect( () => {
    console.log(loginCheck)
  },[loginCheck]) 
  //console.log(loginCheck)

  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="login" element={<Login loginCheck={setLoginCheck}/>} />
        <Route path="product/:id" element={<PrivateRoute loginCheck={loginCheck}  />} />
      </Routes>
    </div>
  );
}

export default App;
