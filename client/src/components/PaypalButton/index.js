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
      <div>
        <h1>Congrats, you just bought {product.name}!</h1>
        {/* <img alt={product.description} src={gif} /> */}
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <h4>
        {product.description}
      </h4>
      <h5><strong>Total Price: </strong> $ {product.price}</h5>
      <h5><strong>Pet Name: </strong> {product.name}</h5>
      {/* <img alt={product.description} src={product.image} width="200" /> */}
      <div ref={paypalRef} />
    </div>
  );
}

function App(props) {
  console.log(props);
  const product = {
    price: props.price,
    name: props.name,
    description: 'Select Payment Method',
    // image: chair,
  };

  return (
    <div className="App">
      <Product product={product} />
    </div>
  );
}

export default App;
