import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import './Categorieslist.css';
function Categorieslist() {
    return (
      <div className="navigation">
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
         ALL categories
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
          <Dropdown.Item href="Jwellery">Jwellery</Dropdown.Item>
          <Dropdown.Item href="Mobilephones">Mobilephones</Dropdown.Item>
          <Dropdown.Item href="Cars">Cars</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
     
      <Nav className="remote" defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/Home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="Cars">Cars</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="Houses">Houses</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/Fashion">fashion</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="Motorcycle">Motorcycle</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="Mobilephone">Mobilephone</Nav.Link>
  </Nav.Item>
</Nav>
</div>


    )
}

export default Categorieslist
