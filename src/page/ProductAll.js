import  React , { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Container ,Row, Col } from 'react-bootstrap' 
import { useSearchParams} from 'react-router-dom'
import { productAction } from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

const ProductAll = () => {

    // 이제 이걸 안쓰고 useSelector로 가는거지
    //const [productList, setProductList] = useState('')
    const productList = useSelector((state) => state.product.productList)

    const [query, setQuery] = useSearchParams()

    const dispatch = useDispatch()

    const getProducts = () => {
        let searchQuery = query.get('q') || ""
        console.log("쿼리 : " , searchQuery)

        // 바로 reducer로 가는게 아니라 미들웨어를 한번 거쳤다가감 / 매개변수로 searchQuery 전달 
        dispatch(productAction.getProducts(searchQuery))

        // 여기부분 짤라서 Action쪽에 넣음
        // let url = `https://my-json-server.typicode.com/Jaewoneeee/react-shop-miniproject/products?q=${searchQuery}`
        // let res = await fetch(url)
        // let data = await res.json();
        // console.log(data)
        // setProductList(data)
    }

    useEffect( () => {
        getProducts()
    },[query])

  return (
    <div>
        <Container>
            <Row>
            {
                productList.map((menu, index) => {
                    return <Col lg={3} key={index}> <ProductCard item={menu}/></Col>
                })
            }
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll