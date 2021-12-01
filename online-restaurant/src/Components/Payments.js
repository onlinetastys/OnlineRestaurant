import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import data from '../data';


// DOCS  ---------------------------------
// React buttons
// https://developer.paypal.com/docs/business/checkout/configure-payments/single-page-app/

// Button style
// https://developer.paypal.com/docs/business/checkout/reference/style-guide/
// ---------------------------------------

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function CheckOut() {
  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          description: "test transaction",
          amount: {
            currency_code: "EUR",
            value: "10.01", // get from dom
            breakdown: {
              item_total: {
                currency_code: "EUR",
                value: "10.01"
              }
            }
          },
          items: [
          {
            name: "Teste item 1",
            unit_amount: {
              currency_code: "EUR",
              value: "5.01"
            },
            quantity: "1"
          },
          {
            name: "Teste item 2",
            unit_amount: {
              currency_code: "EUR",
              value: "5.00"
            },
            quantity: "1"
          }
        ]
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

// .then(function(details){
//       alert('Transaction completed by ' + details.payer.name.given_name)
//     })

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      onError={error => console.log("SHIT! " + error)}
    />
  );
}

const List = () => {
  const [products, setProducts] = useState(data);

  return (
    <div>
       {products.map((p) => {
            return (<Item key={p.id} {...p}></Item>)
          })}
    </div>
  );
}

const Item = ({name, description}) => {
  return (
    <div>
    <p style={{fontWeight: 'bold'}}>Name:</p>
    <p>{name}</p>
    <p style={{fontWeight: 'bold'}}>Description:</p>
    <p>{description}</p>
    <br />
    <br />
    <br />
    </div>
  )
}

export { List, Item, CheckOut };
