import React from 'react'
import { Navigate } from 'react-router-dom'
import { ProductDetail } from '../page'

const PrivateRoute = ({loginCheck}) => {
  return (
    <div>
        {
            loginCheck === true ? <ProductDetail/> : <Navigate to='/login' />
        }
    </div>
  )
}

export default PrivateRoute