import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Card,
  Image,
  Form,
  Col,
  Row,
  icon,
  Button,
  ButtonGroup,
  ToggleButton,
  InputGroup,
} from "react-bootstrap";

import Avatar from "react-avatar";

const SignIn = () => {
  const headStyle = {
    textAlign: "center",
    fontSize: 40,
  };
  const subheadStyle = {
    textAlign: "center",
    fontSize: 20,
  };
  const textbody = {
    fontSize: 15,
  };
  const avatar = {
    margin: 0,
    textAlign: "center",
  };

  return (
    <Container fluid>
      <br />
      <div className="Signin">
        <Card>
          <Card.Body>
            <Card.Text style={headStyle}>TREAD</Card.Text>
            <Card.Text style={subheadStyle}>
              Create your client account
            </Card.Text>
            <Card.Text style={textbody}>
              Hi
              {/* {name.client} */}, i'm inviting you to join Tread - platform
              where you will receive your workout schedules, log them, chat with
              me and track your progress
            </Card.Text>

            <Card.Text style={avatar}>
              {/* <Image roundedCircle src="holder.js/171x180" /> */}
              <Avatar
                name="lal"
                size="30"
                round={true}
                style={{ marginRight: 10 }}
              />
              name
              {/* {name.trainer} */}
            </Card.Text>
          </Card.Body>
        </Card>

        <br />

        <br />
        <Form className="Fields">
          <Form.Row>
            <Col>
              <Avatar
                name="X"
                size="80"
                round={true}
                style={{ marginLeft: 90 }}
              />
              <br />
              <Form.Control
                type="file"
                style={{ marginTop: 45 }}
              ></Form.Control>

              {/* <Form.File id="custom-file" label="upload" data-browse="Bestand kiezen" custom/> */}
            </Col>

            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control></Form.Control>
              <br />
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Col>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Label>Phone Number</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <Form.Control as="select">
                    <option>+91</option>
                    <option>+91</option>
                    <option>+91</option>
                    <option>+91</option>
                    <option>+91</option>
                  </Form.Control>
                </InputGroup.Prepend>
                <Form.Control></Form.Control>
              </InputGroup>
            </Col>
            <Col>
              <Form.Label>Time Zone</Form.Label>
              <Form.Control as="select">
                <option>Asia/cacutta</option>
                <option>Asia/cacutta</option>
                <option>Asia/cacutta</option>
                <option>Asia/cacutta</option>
                <option>Asia/cacutta</option>
              </Form.Control>
            </Col>
          </Form.Row>
          <br />

          <Form.Row>
            <Col xs={3}>
              <Form.Label>Height</Form.Label>
              <InputGroup>
                <Form.Control></Form.Control>
                <InputGroup.Append>
                  <InputGroup.Text>Ft</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col xs={3} style={{ marginTop: 8 }}>
            <Form.Label></Form.Label>
              <InputGroup>
                <Form.Control></Form.Control>
                <InputGroup.Append>
                  <InputGroup.Text>In</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col>
              <Form.Label>Weight</Form.Label>
              <InputGroup>
                <Form.Control></Form.Control>
                <InputGroup.Append>
                  <InputGroup.Text>Kg</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Label>Gender</Form.Label>
              <ButtonGroup toggle>
                <ToggleButton type="checkbox">Male</ToggleButton>
                <ToggleButton type="checkbox">Female</ToggleButton>
                <ToggleButton type="checkbox">Others</ToggleButton>
              </ButtonGroup>
            </Col>
            <Col>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control placeholder="DD/MM/YYYY" />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Label>Whats your fitness goal?</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Tell us more about your fitness goals!"
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Button variant="primary" type="submit" block size="md">
                Create your profile
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <br />
      </div>
    </Container>
  );
};

export default SignIn;
