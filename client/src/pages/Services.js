import React from "react";
import { Col, Row, Container } from "../components/Grid";
import images from "../images"


function Services() {
  return (
    <Container>
      <Row>
        <Col size="sm-12">
        <h1>Pet Services</h1>
        <p>We welcome your pet at our comfy place at Sandy’s. We will be sure to accommodate your pets needs and hospitality. We take care of the following animals:</p> 

        <div className="card-deck">
        <div className="card">
        <img src={`${images[2]}`} alt="banner" width="100%"/>

          <div className="card-body">
            <h5 className="card-title">Dogs</h5>
            <ul>
          <li>We take all dogs out for walks</li>
          <li>Playtime (Toys included!)</li>
          <li>Training if you'd like</li>
          <li>Lots of cuddles</li>
          <li>Grooming</li>
          <li>Treats!</li>
        </ul>
          </div>
        </div>
        <div className="card">
        <img src={`${images[3]}`} alt="banner" width="100%"/>
          <div className="card-body">
            <h5 className="card-title">Cats</h5>
          <ul>
          <li>Playtime (Toys included!)</li>
          <li>Cat nip</li>
          <li>Cuddles</li>
          <li>Grooming</li>
          <li>Treats!</li>
          <li>Relief area with litter boxes</li>
        </ul>
          </div>
        </div>
        <div className="card">
        <img src={`${images[4]}`} alt="banner" width="100%"/>
          <div className="card-body">
            <h5 className="card-title">Small Animal (Hamsters, Guinea Pigs, Rats, Gerbils, Mice,Ferrets, Rabbits)</h5>
            <ul>
          <li>Hamsters will each receive 700sqft cage, 12inch wheel, obstacles, treats, they’ll never be bored with soft bedding.</li>
          <li>Rabbits will snack on Timothy hay.</li>
          <li>All small animals will be seperate from reptiles, cats and dogs.</li>
        </ul>
          </div>
        </div>
      </div>

<br/>
<div className="card-deck">
        <div className="card">
        <img src={`${images[6]}`} alt="banner" width="100%"/>
          <div className="card-body">
            <h5 className="card-title">Reptiles (Snakes, Iguana, Lizards)</h5>
            <p>We provide appropriate environment standards, heat lamp etc.</p>
            <ul>
          <li>We have several 30-gallon tanks for each reptile</li>
          <li>Includes proper equipment such as lighting, lamps, bedding/substrate stc.</li>
        </ul>
          </div>
        </div>
        <div className="card">
        <img src={`${images[5]}`} alt="banner" width="100%"/>
          <div className="card-body">
            <h5 className="card-title">Birds</h5>
          <ul>
          <li>Appropriate cages depending on species</li>
          <li>Toys</li>
          <li>Hiding places</li>
          <li>Proper food</li>
        </ul>
          </div>
        </div>
        <div className="card">
        <img src={`${images[7]}`} alt="banner" width="100%"/>
          <div className="card-body">
            <h5 className="card-title">Fish (freshwater/saltwater)</h5>
            <ul>
          <li>Moving to a different tank is stressful for any fish but our tanks are cycled for both freshwater and marine.</li>
          <li>Tanks are limited to 5 gallons each</li>
          <li>Hospital tanks and treatments are on stand by if needed.</li>
        </ul>
          </div>
        </div>
      </div>

      <h3>All rooms include:</h3>
      <ul>
        <li>24/7 onsite care &#38; on-call veterinarian</li>
        <li>Convenient drop off &#38; pick up times</li>
        <li>Temperature-controlled environments with separate ventilation systems for all animals</li>
        <li>Exercise walks at least twice daily in our large playrooms (dogs only)</li>
        <li>Individual playtime daily with pet-loving staff</li>
        <li>Pets Eat Free - complimentary meals provided by Authority® & Simply Nourish® (Food or treats can also be brought from home. Single-meal servings or treats must be in containers labeled with pet's name & include written instructions.)</li>
        <li>Medication dispensing – must be in original packaging (additional cost)</li>
      </ul>

        <p>We can schedule to pick up your family pet in a luxury fashion to our facility within a 30 mile radius. Just let us know when!</p>
        <p>Call us at 1-800-Sandys</p>
   
        </Col>
      </Row>
    </Container>
   
  );
}

export default Services;