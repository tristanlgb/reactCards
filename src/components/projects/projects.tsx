import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const Projects: React.FC = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', width: '100vw' }}
    >
      <Card style={{ width: '90%', height: '90%' }} id='projects'>
        <Card.Body>
          <Card.Title>Projects</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis soluta molestias sint ad deleniti unde voluptatum veritatis quisquam voluptatem, fugit aspernatur! Eum, labore voluptates! Debitis earum expedita eum fugiat vero ad quisquam corrupti ea ipsa reprehenderit! At, veritatis. Id, voluptatum eum ad ex et excepturi aspernatur ab fugiat. Officiis quisquam maxime debitis repellat tenetur iusto, perferendis voluptate molestias quae blanditiis consequatur, unde quibusdam exercitationem suscipit esse fugiat reiciendis amet eum quia sunt odio! Quod harum, unde accusantium nam quis dolores voluptates veritatis esse quibusdam dolorem cumque exercitationem maiores beatae ad.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;
