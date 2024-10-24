import React from 'react';
  import Card from 'react-bootstrap/Card';
  import 'bootstrap/dist/css/bootstrap.min.css';

const HireMe: React.FC = () => {



    return (

      <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', width: '100vw' }}
    >
      <Card style={{ width: '90%', height: '90%' }} id='hireme'>
        <Card.Body>
          <Card.Title>Hire Me</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
   
   </div> );
  }
  


export default HireMe;
