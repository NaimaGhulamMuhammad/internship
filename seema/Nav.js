import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
    Nav,
    Navbar,
    Form,
    FormControl,
    NavDropdown,
  } from "react-bootstrap";
  import Link from 'react-router-dom'
export default function Navv() {
  return (

  <div className="App">
        <Navbar bg="light" variant="light">
          <Navbar.Brand to="#">JOBSTOCK</Navbar.Brand>
          <Nav className="mr-auto">
            <FormControl
              type="text"
              placeholder="Find Freelancer"
              className="mr-sm-6"
            />
            <NavDropdown title="BROWS" id="collasible-nav-dropdown">
              <NavDropdown.Item to="/Home/JobDetails">
                Manage employee
              </NavDropdown.Item>
              <NavDropdown.Item to="/Home/NewSearchJob">
                Employer Profile
              </NavDropdown.Item>
              <NavDropdown.Item to="/Home/NewSearchJob">
                Freelance Detail
              </NavDropdown.Item>
              <NavDropdown.Item to="/Home/NewSearchJob">
                Freelancers
              </NavDropdown.Item>
              <NavDropdown.Item to="/Home/NewSearchJob">
                Freelancers 2
              </NavDropdown.Item>
              <NavDropdown.Item to="/Home/NewSearchJob">
                JobDetails
              </NavDropdown.Item>
              <NavDropdown.Item to="/Home/NewSearchJob">
                premiumCandidate
              </NavDropdown.Item>
              <NavDropdown.Item to="/Home/NewSearchJob">
                premiumCandidatedetails
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/Home/NewSearchJob">BLOGg</Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link >SIGNIN</Nav.Link>
            <Nav.Link >PRICING</Nav.Link>
            <Button variant="outline-success" size="lg" active>
              Signin
            </Button>
          </Form>
        </Navbar>
</div>
  );
}