import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { navigate } from "gatsby"
import { logout } from "../redux/actions/auth"
import searchIco from "../assets/icon/search.png"
import likeIco from "../assets/icon/like.png"
import userIco from "../assets/icon/user.png"
import cartIco from "../assets/icon/cart.png"

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
        background: `#fff`,
        color: `rgb(0, 0, 0)`,
      }}
    >
      <Navbar expand="md" fixed="top">
        <Navbar.Brand href="/" style={{ fontWeight: "600" }}>{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">Men</Link>
            <Link className="nav-link" to="/">Women</Link>
            <Link className="nav-link" to="/">Journal</Link>
          </Nav>
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">
              <img src={searchIco} alt="search icon" />
            </Link>
            <Link className="nav-link" to="/member/profile">
              <img src={userIco} alt="user icon" />
            </Link>
            <Link className="nav-link" to="/">
              <img src={likeIco} alt="like icon" />
            </Link>
            <Link className="nav-link" to="/">
              <img src={cartIco} alt="cart icon" />
            </Link>
            {
              isLoggedIn ? <Link className="nav-link" to="#" onClick={() => signOut()}>Logout</Link> : null
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
