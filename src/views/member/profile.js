import React, { useEffect, useState } from "react"

import SEO from "../../components/seo"
import { useSelector, shallowEqual } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import defaultAva from "../../assets/img/avatar.png"

const Profile = () => {
  const memberData = useSelector(state => state.auth.memberData, shallowEqual);
  const [avatar, setAvatar] = useState("")

  useEffect(() => {
    setAvatar(memberData.data.image)
  }, [memberData]);
  return (
    <>
      <SEO title="Profile" />
      <h1>Profile</h1>
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={avatar ? avatar : defaultAva} style={{ width: '25%' }} />
          <Card.Title>Member infomation</Card.Title>
          <Row>
            <Col xs={4}>
              Full name
            </Col>
            <Col xs={8}>
              {memberData.data.full_name}
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              Email
            </Col>
            <Col xs={8}>
              {memberData.data.email}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default Profile