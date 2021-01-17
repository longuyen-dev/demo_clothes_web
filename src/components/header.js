import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { navigate } from "gatsby"
import { logout } from "../redux/actions/auth"

const Header = ({ siteTitle }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn, shallowEqual);
  const dispatch = useDispatch();

  const signOut = () => {
    localStorage.removeItem('access_token');
    dispatch(logout());
    navigate("/");
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >

      <Navbar expand="md" >
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/member/profile">Profile</Link>
            {
              isLoggedIn ? <Link className="nav-link" to="#" onClick={() => signOut()}>Logout</Link> : <Link className="nav-link" to="/member/login">Login</Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
