import React, { useState } from "react";
import {Form, Button, Container, Modal} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import es from "react-phone-input-2/lang/es.json";
import './contacto.css'

const Contact = ({ rootUrl }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "54",
    comment: "",
    whatsapp: false,
  });

  const [loading, setloading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

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
    setloading(true)
    fetch(`${rootUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if(response.ok){
          setData({
            name: "",
            email: "",
            phone: "54",
            comment: "",
            whatsapp: false,
          });
        }
        return response.json()
      })
      .then((json) => {
        setResponseMessage(json.msg)
        setloading(false)
        setShow(true)
        setTimeout(() => {
          setShow(false);
          setResponseMessage("")
        }, 5000);
      })
      .catch((error) => {console.error("Hubo un error en el fetch: ", error)});
  };

  return (
    <Container className="py-5 mt-5 mb-5 formutext">
      <h3 className="text-center uwu">Contactanos!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nombre (Opcional)</Form.Label>
          <Form.Control
            value={data.name}
            type="text"
            placeholder="Ingresá tu nombre"
            size="lg"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={data.email}
            type="email"
            placeholder="Ingresá tu email"
            size="lg"
            required
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            No te vamos a mandar spam!
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Celular (Opcional)</Form.Label>
          <PhoneInput
            inputClass="w-100 w-lg-50 form-control-lg"
            country={"ar"}
            placeholder="54"
            localization={es}
            enableAreaCodes={true}
            masks={{ ar: "(....) . ......." }}
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
            checked={data.whatsapp}
            label="Marcá esto si preferís que nos contactemos por whatsapp"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="comment" size="lg">
          <Form.Label>Comentario</Form.Label>
          <Form.Control
            value={data.comment}
            as="textarea"
            type="textarea"
            placeholder="Dejanos tu comentario o tu consulta"
            rows="10"
            cols="30"
            required
            onChange={handleChange}
          />
        </Form.Group>
        {loading && <h2 className="text-center py-2">Enviando...</h2>}
        <Button className="btn-block" variant="primary" type="submit" size="lg">
          Enviar
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>{responseMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" size="lg" block onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contact;
