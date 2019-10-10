import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Services() {
  return (
    <Container>
      <Row>
        <Col size="sm-12">
        <h1>Pet Services</h1>
        <p>We welcome your pet at our comfy place at Sandy’s. We will be sure to accommodate your pets needs and hospitality.</p> 
        <h6>Dogs</h6>
        <ul>
          <li>Walks</li>
          <li>Playtime (Toys included!)</li>
          <li>Training</li>
          <li>Cuddles</li>
          <li>Grooming</li>
        </ul>

        
        <h6>Cats</h6>
        <p>Note: We keep our feline friends separate from our canine friends.</p>
        <ul>
          <li>Playtime (Toys included!)</li>
          <li>Cat nip</li>
          <li>Cuddles</li>
          <li>Grooming</li>
        </ul>

        <h6>Small animal boarding (Hamsters, Guinea Pigs, Rats, Gerbils, Mice,Ferrets, Rabbits)</h6>
        <ul>
          <li>Hamsters will each receive 700sqft cage, 12inch wheel, obstacles, treats, they’ll never be bored with soft bedding.</li>
          <li>Rabbits will snack on Timothy hay</li>
          <li>All small animals will be seperate from reptiles, cats and dogs.</li>
        </ul>

        <h6>Reptiles (Snakes, Iguana, Lizards)</h6>
        <ul>
          <li>We provide appropriate environment standards, heat lamp etc.</li>
        </ul>

        <h6>Birds</h6>
        <ul>
          <li>Big cages</li>
        </ul>

        <p>We can schedule to pick up your family pet in a luxury fashion to our facility within a 30 mile radius. Just let us know when!</p>
        <p>Call us at 1-800-Sandys</p>
   
        </Col>
      </Row>
    </Container>
   
  );
}

export default Services;