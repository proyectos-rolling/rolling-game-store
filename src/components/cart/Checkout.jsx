import React, {useState, useEffect} from 'react'
import {Accordion, Card, Button} from "react-bootstrap"
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./css/cart.css"
const root_url = process.env.REACT_APP_API_ROOT_URL;

const Checkout = ({totalPrice}) => {
  const [redirectUrl, setRedirectUrl] = useState("")

  const [data, setData] = useState({
    cvc:"",
    expiry:"",
    name:"",
    number:"",
  })

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetch(`${root_url}/checkout/mp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Juegos RollinGame Store",
        price: totalPrice,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setRedirectUrl(result.redirectUrl);
      })
      .catch((err) => console.log("error"));
  }, [totalPrice]);

  return (
    <div className="fondo">
      <h2 className="text-center">El total de la compra es ${totalPrice}</h2>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              className="btn-block"
              as={Button}
              variant="link"
              eventKey="0"
            >
              Pagar con tarjeta de crédito/débito
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div id="PaymentForm">
                <Cards
                  cvc={data.cvc}
                  expiry={data.expiry}
                  focused={data.focused}
                  name={data.name}
                  number={data.number}
                />
                <form>
                  <input
                    type="text"
                    name="expiry"
                    placeholder="Expire Date"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleInputChange}
                  />
                  <input
                    type="number"
                    name="number"
                    placeholder="Card Number"
                    onChange={handleInputChange}
                  />
                </form>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              className="btn-block"
              as={Button}
              variant="link"
              eventKey="1"
            >
              Pagar con MercadoPago
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <button
              className="btn btn-primary btn-block my-3"
              
            >
              Ir a Mercado Pago y pagar
            </button>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <a
        href={redirectUrl}
        className="btn btn-primary btn-block my-3"
        target="_blank"
        rel="noreferrer"
      >
        Ir a Mercado Pago y pagar
      </a>
    </div>
  );
}

export default Checkout
