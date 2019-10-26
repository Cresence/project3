// import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import {Mainheading} from "../Mainheading"


function Product({ product }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: 'USD',
                  value: product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.description, product.price]);

  if (paidFor) {
    return (
      <div className="text-center">
        <h3 className="text-success">Congrats, Your  Booking is Conformed !</h3>
        <button className="btn btn-theme" onClick={product.jsPDFGenerator} >
          Print Your Receipt
        </button>
        {product.handleUpdateBookingStatus()}
      </div>
    );
  }

  return (
    <div className="payment-box">
      {error && <div><h1 className="text-danger text-center">Uh oh, an error occurred! {error.message}</h1></div>}
      <Mainheading color="dark">Pay Now</Mainheading>
     
      <table className="table ">
        <tbody>
          <tr>
            <th scope="row">Total Price:</th>
            <td>$ {product.price}</td>
          </tr>
          <tr>
            <th scope="row">Pet : </th>
            <td>{product.select_pet}</td>
          </tr>
          <tr>
            <th scope="row">No. Of Pet:</th>
            <td>{product.pet_count}</td>
          </tr>
          <tr>
            <th scope="row">Booking:</th>
            <td>{product.select_date_from} <strong> To </strong> {product.select_date_to}</td>
          </tr>
          <tr>
            <th scope="row">No Of Days:</th>
            <td> {product.days}</td>
          </tr>
        </tbody>
      </table>
      <div ref={paypalRef} />
    </div>
  );
}

function App(props) {
  //console.log(props);
  const product = {
    price: props.total_price,
    name: props.name,
    select_pet: props.select_pet,
    select_date_to: props.select_date_to,
    select_date_from: props.select_date_from,
    pet_count: props.pet_count,
    days:props.days,
    jsPDFGenerator:props.jsPDFGenerator,
    booking_status:props.booking_status,
    handleUpdateBookingStatus:props.handleUpdateBookingStatus,
  };

  return (
    <div className="App">
      <Product product={product} />
    </div>
  );
}

export default App;
