import React, { useState } from "react";
import RequestResult from "./RequestResult";
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
    phone: "54",
    comment: "",
    whatsapp: false,
  });

  const [loading, setloading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("")

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
        setCompleted(true)
        setTimeout(() => {
          setCompleted(false);
          setResponseMessage("")
        }, 5000);
      })
      .catch((error) => {console.error("Hubo un error en el fetch: ", error)});
  };

  return (
    <Container className="py-5">
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
            No te vamos a manadar spam!
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
        <Button className="btn-block" variant="primary" type="submit" size="lg">
          Submit
        </Button>
      </Form>
      {loading && <h2 className="text-center pt-5">Enviando...</h2>}
      {completed && <RequestResult msg={responseMessage} />}
    </Container>
  );
};

export default Contact;
