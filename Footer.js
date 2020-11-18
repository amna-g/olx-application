import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Footer.css';
function Footer() {
    return (
        <div>
            <Card>
  <Card.Header></Card.Header>
  <Card.Body>
      <img className="footer_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDXK5vVerR_Ci-f4rdKETRrUb-k-dWmVH4w&usqp=CAU "alt=""></img>
    <Card.Title>TRY OLX APP</Card.Title>
    <Card.Text>
      <ul className="text">
          <h2>categories </h2>
          <li>motorcycle</li>
          <li>mobilephones</li>
          <li>houses</li>
          <li>cars</li>
         
      </ul>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>

</Card>
        </div>
    )
}

export default Footer
