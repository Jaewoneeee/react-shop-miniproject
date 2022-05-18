import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container , Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { productDetailAction } from '../redux/actions/productDetailAction'

const ProductDetail = () => {

  // useParams가 객체 그 위에 App.js 에서 우리가 :id를 넣어줬었지! 

  let {id} = useParams()
  //const [product, setProuct] = useState(null)
  const product = useSelector((state) => state.product.productDetail)

  const dispatch = useDispatch();

  const getProductDetail = async () => {

    dispatch(productDetailAction.getProductDetail(id))

    // let url = `https://my-json-server.typicode.com/Jaewoneeee/react-shop-miniproject/products/${id}`;
    // let res = await fetch(url);
    // let data = await res.json();
    // console.log(data);
    // setProuct(data)
  }

  useEffect( () => {
    getProductDetail();
  },[])

  return (
    <div>
      <Container>
        <Row>
          <Col className='product-img'>
            <img src={product?.img} />
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
          </Col>
        </Row>
      </Container>
  
    </div>
  )
}

export default ProductDetail