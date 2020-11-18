import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
function Houses() {
    return (
        <div>
    <CardDeck>
  <Card>
    <Card.Img variant="top" src="data:image/jpeg;base64,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" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGwOfJYbVbXSgdSH_jIDCohnyNk1N6B61zQ&usqp=CAU" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSos_wumzZpHjkZAQ6K0WNluf6ogckzh6m6iA&usqp=CAU" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjX3v9iGOXgYk7yPwV5yiVtUC1zb63PTFAGQ&usqp=CAU" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-1QQHmTpgDBSgt3U8MGXgXAmwxev6NQ1hg&usqp=CAU" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwj3RM8ubmJgeaVsaFkmRtBdTwvOqOWAW3Q&usqp=CAU" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-THQBDTRvCfxb4L4s1kA9eoXkfaXFVBt3fg&usqp=CAU" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJT1ufqkt4_6mkDZhnlZKauc6uQddq2wa3Q&usqp=CAU" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXDsJAN-kg4vbd5-0csP58Dv31pBrHmkA6A&usqp=CAU" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
            
        </div>
    )
}

export default Houses
