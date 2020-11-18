import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
function Mobilephone() {
  return (
    <div>
      <CardDeck>
  <Card>
    <Card.Img variant="top" src="data:image/jpeg;base64,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" />
    <Card.Body>
      <Card.Title>12000</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvKxXZTShENtV9BWHdIgG9Fws2KLn2GSkrA&usqp=CAU" />
    <Card.Body>
      <Card.Title>15000</Card.Title>
      <Card.Text>
        {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUVRYGmCQ6g_CX8nvDKvnOBz8Jcwr7Qtf8w&usqp=CAU" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</CardDeck>

<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrX4TOJuxSfWjiA1sJOpfL7RPq_5xgLXXqTg&usqp=CAU" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNiiDCQr7Sb6S46QKlYrWVXmNtYLtcbwD32w&usqp=CAU" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcUeiVItFLBdmzcmsmrQY28RS2Z-LmCz4Ng&usqp=CAU" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
     
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</CardDeck>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1iwbMxAxT8wKROJlvLMOpMsulRrNN6oczg&usqp=CAU" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxzlzV5V6AkvX6i8jcDZOlU-6bNxjZw0_CNQ&usqp=CAU" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI73Z3aY2u6Iz6CvY2TeuS7E_Ruz02GNgqyQ&usqp=CAU" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</CardDeck>

    </div>
  )
}

export default Mobilephone
