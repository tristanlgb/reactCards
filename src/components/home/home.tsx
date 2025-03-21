
import React from 'react';
import { Card, Carousel, Accordion } from 'react-bootstrap';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', width: '100vw' }}
    >
      <Card
        style={{ width: '90%', height: '90%', overflowY: 'auto' }}
        id="home"
        className={darkMode ? 'bg-dark text-light' : ''}
      >
        <Card.Body>
          <Card.Title className="fs-2 mb-3">👋 Welcome to my Portfolio</Card.Title>
          <Card.Subtitle className="mb-4 text-muted">A Pokémon Showcase</Card.Subtitle>

          {/* Carousel with Pokémon image URLs */}
          <Carousel className="mb-4">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                alt="Charizard"
              />
              <Carousel.Caption>
                <h3>Charizard</h3>
                <p>Fire-type Pokémon</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
                alt="Blastoise"
              />
              <Carousel.Caption>
                <h3>Blastoise</h3>
                <p>Water-type Pokémon</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
                alt="Pidgeot"
              />
              <Carousel.Caption>
                <h3>Pidgeot</h3>
                <p>Wind/Flying-type Pokémon</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* Accordion Categories */}
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>🔥 Fire-Type Pokémon</Accordion.Header>
              <Accordion.Body>
                Charizard, Arcanine, Flareon, Moltres
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>💧 Water-Type Pokémon</Accordion.Header>
              <Accordion.Body>
                Blastoise, Vaporeon, Gyarados, Suicune
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>🌪️ Wind-Type Pokémon</Accordion.Header>
              <Accordion.Body>
                Pidgeot, Aerodactyl, Lugia, Rayquaza
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
