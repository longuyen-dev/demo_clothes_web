import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import { Card } from 'react-bootstrap';
import FloatingLabelInput from 'react-floating-label-input';
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
      <Card style={{ background: 'none', border: 'none', marginTop: '30px' }}>
        <Card.Body>
          <h3 style={{ textAlign: 'center' }}>Sign in to your account</h3>
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
          <p style={{ textAlign: 'center', fontSize: '14px' }}>Don't have an account? <Link to="/">Sign Up</Link></p>
          <form>
            <FloatingLabelInput
              id="email"
              label="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <br />
            <FloatingLabelInput
              type="password"
              id="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <br />
            <input
              type="submit"
              className="custom-button-dark"
              value="Log in"
              onClick={e => handleLogin(e)} />
          </form>
          <Link to="/" style={{ fontSize: '14px', color: 'inherit' }}>Can't remember your password?</Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default Login