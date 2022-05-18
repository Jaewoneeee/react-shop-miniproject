import React, { useState } from 'react'
import { Form , Button, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginCheckAction } from '../redux/actions/loginCheckAction'


const Login = () => {

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (event) => {
    event.preventDefault()
    
    console.log("되냐?")
    dispatch(loginCheckAction.login(id,password))
    //props.loginCheck(true)

    navigate('/')
    // onSubmit을 하면 페이지를 새로고침하기떄문에 콘솔에 잠깐 찍히고 사라짐 
  }

  return (
    <Container>
    <Form onSubmit={(event) => loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setId(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="dark" type="submit">
        로그인
      </Button>
    </Form>
    </Container>
  )
}

export default Login