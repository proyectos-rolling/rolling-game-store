import React, {useState} from 'react'
import {Accordion, Card, Button} from "react-bootstrap"
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./css/cart.css"

const Checkout = ({totalPrice}) => {

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
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Checkout
