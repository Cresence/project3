// import './App.css';
import React, { useState, useRef, useEffect } from 'react';
// import chair from './chair.jpg';
// import gif from './giphy.gif';

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
        <h1 className="text-success">Congrats, Your  Booking is Conformed {product.name}!</h1>
        <a href="#" className="btn btn-theme">Print Your Receipt</a>
      </div>
    );
  }

  return (
    <div>
      {error && <div><h1 className="text-danger text-center">Uh oh, an error occurred! {error.message}</h1></div>}
      {/* <a href="#" className="btn btn-theme">Print Your Receipt</a> */}
      <table className="table table-bordered">
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
            <td>{product.select_date_from} <strong> To </strong>{product.select_date_to}</td>
          </tr>
          <tr>
            <th scope="row">No Of Days:</th>
            <td> {product.days}</td>
          </tr>
        </tbody>
      </table>
      {/* <img alt={product.description} src={product.image} width="200" /> */}
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

  };

  return (
    <div className="App">
      <Product product={product} />
    </div>
  );
}

export default App;
