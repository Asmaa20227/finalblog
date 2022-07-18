import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import React from "react";
import { Link} from "react-router-dom";
 

function CollapsibleExample() {
  return(
 
    
    <Navbar  defult collapseOnSelect className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" >
      
      <Container> <img src="https://youthink.la/wp-content/themes/youthinkadult/assets/images/footer-logo.svg" alt="YouThink"></img>
        <Navbar.Brand href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
                      <Nav.Link as={Link} to="/Home"> Home </Nav.Link>
        
                   <Nav.Link as={Link} to="/Bloge"> Bloge</Nav.Link>   
          
                  
          </Nav>
          <Nav>
        
            <Nav.Link eventKey={2} href="#memes">
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
      
    

  );
}

export default CollapsibleExample;