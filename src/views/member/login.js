import React, { useState, useEffect } from "react"

import SEO from "../../components/seo"
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { navigate } from "gatsby"

import { login } from "../../redux/actions/auth"

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn, shallowEqual);
  const errorMessage = useSelector(state => state.auth.errorMessage, shallowEqual);

  const handleLogin = (e) => {
    e.preventDefault();
    const params = { email: email, password: password };
    dispatch(login(params));
    setPassword("")
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/member/profile")
    }
  }, [isLoggedIn]);

  return (
    <>
      <SEO title="Login" />
      <h1>Login</h1>
      {
        errorMessage.length > 0 ? (
          <div id="errorMsg">
            <ul>
              {errorMessage.map((err, i) => (
                <li key={`err_${i}`}>{err}</li>
              ))}
            </ul>
          </div>
        ) : null
      }

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={e => handleLogin(e)}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Login