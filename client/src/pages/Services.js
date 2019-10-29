import React from "react";
import { Col, Row, Container } from "../components/Grid";
import images from "../images"
import smallpetimage from "../images/small-pet.jpg"
import {Mainheading} from "../components/Mainheading"

function Services() {
  return (
    <div className="pt-5 services-page">
    <Container>
      <Row>
        <Col size="sm-12">
        <Mainheading  color="dark">Pet Services</Mainheading>
        <p className="text-center">We welcome your pet at our comfy place at Sandy’s. We will be sure to accommodate your pets needs and hospitality. We take care of the following animals:</p> 

        <div className="card-deck">
        <div className="card">
        <img src={`${images[2]}`} alt="banner" width="100%"/>

          <div className="card-body">
            <h5 className="card-title">Dogs</h5>
            <ul>
            <li>We take all dogs out for walks on a daily basis</li>
          <li>Spacious, crate-free suites</li>
          <li>Rooms have beds toys dishes</li>
          <li>Playtime (Toys included!)</li>
          <li>Playgroup</li>
          <li>Professional Dog Training</li>
          <li>Lots of cuddles</li>
          <li>Spa and Grooming: Bath and Haircut</li>
          <li>Treats!</li>
        </ul>

          </div>
        </div>
        <div className="card">
        <img src={`${images[3]}`} alt="banner" width="100%"/>
          <div className="card-body">
            <h5 className="card-title">Cats</h5>
          <ul>
          <li>Spacious, crate-free suites</li>
          <li>Playtime (Toys included!)</li>
          <li>Scratching posts are provided</li>
          <li>Cat nip</li>
          <li>Cuddles</li>
          <li>Spa and Grooming: Bath and nail trim</li>
          <li>Treats!</li>
          <li>Relief area with litter boxes</li>
          <li>We provide clean and tidy litter spaces</li>
        </ul>
          </div>
        </div>
        <div className="card">
        <img src={smallpetimage} alt="banner" width="100%"/>
          <div className="card-body">
            <h5 className="card-title">Small Animal</h5>
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
            <h5 className="card-title">Reptiles</h5>
            <ul>
            <li>We provide appropriate environment standards, heat lamp etc.</li>
          <li>We have several 30-gallon tanks for each reptile</li>
          <li>Includes proper equipment such as lighting, lamps, bedding/substrate etc</li>
          <li>Temperatures and humidity are checked regularly</li>
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
          <li>Ventilation</li>
          <li>Proper indoor lighting</li>
          <li>Varied diet, not just seeds or pellets, but grains, beans, fruits and vegetables too</li>
          <li>A room to free roam outside of their cages</li>
        </ul>
          </div>
        </div>
        <div className="card">
        <img src={`${images[7]}`} alt="banner" width="100%"/>
          <div className="card-body">
            <h5 className="card-title">Fish</h5>
            <ul>
            <li>Moving to a different tank is stressful for any fish but our tanks are cycled for both freshwater and marine.</li>
          <li>Tanks are limited to 5 gallons each</li>
          <li>Hospital tanks and treatments are on stand by if needed.</li>
          <li>Decor for hiding and plants in each tank</li>
        </ul>
          </div>
        </div>
      </div>
        </Col>
      </Row>
    </Container>
    <div className="services-bottom-section py-5">
    <Container>
      <Row>
        <Col size="sm-12">
          <Mainheading color="light">All rooms include:</Mainheading>
          <ul>
            <li>24/7 onsite care &#38; on-call veterinarian</li>
            <li>Convenient drop off &#38; pick up times</li>
            <li>Temperature-controlled environments with separate ventilation systems for all animals</li>
            <li>Exercise walks at least twice daily in our large playrooms (dogs only)</li>
            <li>Individual playtime daily with pet-loving staff</li>
            <li>Pets Eat Free - complimentary meals provided by Authority® &#38;Simply Nourish® (Food or treats can also be brought from home. Single-meal servings or treats must be in containers labeled with pet's name &#38; include written instructions.)</li>
            <li>Webcams are available whenever you miss your pet</li>
          </ul>
          <p>We can schedule to pick up your family pet in a luxury fashion to our facility within a 30 mile radius. Just let us know when!</p>
          <p>Call us at : 2155350610</p>
        </Col>
      </Row>
    </Container>
    </div>
   </div>
  );
}

export default Services;