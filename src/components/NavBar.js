import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {

    const menuList = ['여성', 'Divided', '남성', '유아', '아동', 'Sale', "Home"]

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login')
    }

    const search = (event) => {
        if(event.key === "Enter") {
            // 입력한 검색어를 읽어와서
            let keyword = event.target.value;
            
            // url을 바꿔준다
            navigate(`/?q=${keyword}`)
        }
    }

  return (
    <div>
        <div>
            <div className='login-button' onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>

        <div className="logo-img">
            <img src="https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2020/12/23170354/7f6c0d38bb47dd88ae792b2fc0e3ac9adb7d1f408dd7e9499df1999858e34c9cb8483d369c7ecf1f1793ddd3f27abd20ebcf0411dfe7a7871a3d024d83cf81a5283dc74532d2aad598f8e60854eaf0fff82fb5c65a67fea46a1da1e1f488da65.png" width={250}/>
        </div>

        <div className='menu-area'>
            <ul className='menu-list'>
            {
                menuList.map( (menu, index) => <li key={index}>{menu}</li>)
            }
            </ul>
            <div className='search-bar'>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" onKeyPress={(event)=>search(event)} />
            </div>
        </div>
    </div>
  )
}

export default NavBar