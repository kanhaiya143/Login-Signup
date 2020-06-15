import React, { useState,useEffect  } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Col, Button, Container } from "react-bootstrap";
import axios from "axios";
import {
  Link,
  BrowserRouter as Router,
  Route,
  IndexRoute,
} from "react-router-dom";

const SignUp = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [newdata,setNewdata]=useState("");
 
    
       

  const headStyle = {
    textAlign: "center",
    fontSize: 40,
  };
  const subheadStyle = {
    textAlign: "center",
    fontSize: 30,
  };
  
  const Submit=(event)=>{
    event.preventDefault();
    const user={
      first,
      last,
      email,
      password,
      type,
      category
    }
    
    axios.post('/signup', { user })
      .then(res=>{
        console.log(res);
        console.log(res.data);
        // window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
      })

      setFirst("");
      setLast("");
      setCategory("");
      setEmail("");
      setPassword("");
      setType("");
      
   
  }
  const First = (e) => {
    setFirst(e.target.value);
  };
  const Last = (e) => {
    setLast(e.target.value);
  };
  const Email = (e) => {
    setEmail(e.target.value);
  };
  const Password = (e) => {
    setPassword(e.target.value);
  };
  const Type = (e) => {
    setType(e.target.value);
  };
  const Category = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Container fluid>
      <div className="Signup">
        <br />
        <Form className="Fields" onSubmit={Submit}>
          <Form.Row>
            <Col>
              <Form.Text style={headStyle}>TREAD</Form.Text>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Text style={subheadStyle}>Signup and get started</Form.Text>
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control onChange={First}  required/>
            </Col>

            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control onChange={Last} required/>
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={Email}
                required
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={Password}
                required
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Label>Number of clients</Form.Label>
              
              <Form.Control as="select" onChange={Type} required>
              
                <option>1-1 clients</option>
                <option>1-2 clients</option>
                <option>1-3 clients</option>
                <option>1-4 clients</option>
                <option>1-5 clients</option>
            
              </Form.Control>
              
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Label>Trainer Category</Form.Label>
              
              <Form.Control as="select" onChange={Category} required novalidate>
                <option>HIIT</option>
                <option>HIIT</option>
                <option>HIIT</option>
                <option>HIIT</option>
                <option>HIIT</option>
              </Form.Control>
              
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Button variant="primary" type="submit" block size="md" >
                Create your account
              </Button>
            </Col>
          </Form.Row>
          <br />
          {/* <Form.Text style={{ textAlign: "center", fontSize: 12 }}>
            Already registered <Link to="/signin">Sign in?</Link>
          </Form.Text> */}
        </Form>
      </div>
    </Container>
  );
};

export default SignUp;
