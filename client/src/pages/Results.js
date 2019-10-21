import React from "react";
import { Col, Row, Container } from "../components/Grid";
import {Mainheading} from "../components/Mainheading"
import ReactToPrint from "react-to-print";


function Results() {
  return (
    <div class="py-5">
    <Container>
        <Mainheading color="dark">Details for (Pet Name's) Stay</Mainheading>
        
        <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <Results ref={el => (this.componentRef = el)} />
      </div>


        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Container>
    </div>

  );
}

export default Results;
