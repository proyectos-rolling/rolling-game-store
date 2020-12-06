import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import es from "react-phone-input-2/lang/es.json";

const Contact = ({ rootUrl }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    whatsapp: false,
  });

  const handleChange = (e) => {
    try {
      if (e.target.type === "checkbox") {
        setData({ ...data, [e.target.id]: e.target.checked });
        return;
      }
      setData({ ...data, [e.target.id]: e.target.value });
    } catch (error) {
      console.log(e.target);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${rootUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => console.error("Hubo un error en el fetch: ", error));
  };

  return (
    <Container className="py-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nombre (Opcional)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresá tu nombre"
            size="lg"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresá tu email"
            size="lg"
            required
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            No te vamos a manadar spam!
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Celular (Opcional)</Form.Label>
          <PhoneInput
            inputClass="w-100 w-lg-50 form-control-lg"
            country={"ar"}
            placeholder="+54"
            localization={es}
            enableAreaCodes={true}
            masks={{ar: "(....) . ......."}}
            enableAreaCodeStretch
            value={data.phone}
            onChange={(phone) => setData({ ...data, phone })}
          />
          <Form.Text className="text-muted">
            Ingresá tu celular sin el 0 y sin el 15
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="whatsapp" size="lg">
          <Form.Check
            type="checkbox"
            label="Marcá esto si preferís que nos contactemos por whatsapp"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="comment" size="lg">
          <Form.Label>Comentario</Form.Label>
          <Form.Control
            as="textarea"
            type="textarea"
            placeholder="Dejanos tu comentario o tu consulta"
            rows="10"
            cols="30"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Button className="btn-block" variant="primary" type="submit" size="lg">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
