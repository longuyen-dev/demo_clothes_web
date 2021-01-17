import React from "react"
import { Link } from "gatsby"
import { Row, Col } from 'react-bootstrap';
import fbIco from "../assets/icon/fb.png"
import igIco from "../assets/icon/ig.png"
import twIco from "../assets/icon/tw.png"
import userIco from "../assets/icon/user_ft.png"
import infoIco from "../assets/icon/info.png"

const Footer = () => (
  <footer style={{
    marginTop: `2rem`
  }}>
    <Row>
      <Col id="info-footer" md={6}>
        <h3 style={{ fontFamily: "'Dancing Script', cursive" }}>Info</h3>
        <ul>
          <Link className="nav-link" to="/member/profile">
            <li>
              <img src={userIco} alt="user icon" />
              Sign Out
              </li>
          </Link>
          <Link className="nav-link" to="/member/profile">
            <li>
              <img src={infoIco} alt="infomation icon" />
              Help Center
              </li>
          </Link>
        </ul>
        <ul id="list-sns">
          <Link className="nav-link" to="/">
            <li>
              <img src={fbIco} alt="facebook icon" />
            </li>
          </Link>
          <Link className="nav-link" to="/">
            <li>
              <img src={igIco} alt="instagram icon" />
            </li>
          </Link>
          <Link className="nav-link" to="/">
            <li>
              <img src={twIco} alt="twitter icon" />
            </li>
          </Link>
        </ul>
      </Col>
      <Col id="interested-footer" md={6}>a</Col>
    </Row>
  </footer>
)

export default Footer