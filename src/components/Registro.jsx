import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Container from "react-bootstrap/Container";


const Registro = () => {

    const [datos, setDatos] = useState({
        name: '',
        email: '',
        password: ''
    });
    const root_url = process.env.REACT_APP_API_ROOT_URL;

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        saveDatos();
    }
    const saveDatos = () => {
        fetch(`${root_url}/users/new/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        })
            .then((res) => res.json())
            .then((result) => console.log(result))//usar en el alert 
            .catch((err) => console.log('error'))
    };

    return (
        <Container className="py-5">
            <h3 className="text-center">Registro de usuarios</h3>
            <Form onSubmit={enviarDatos}>
                <Form.Group controlId="nombre">
                    <Form.Label >Nombre</Form.Label>
                    <Form.Control type="text"
                        placeholder="Nombre"
                        name="name"
                        required
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="mail">
                    <Form.Label >Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese el mail"
                        name="email"
                        required
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label >Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese password"
                        name="password"
                        required
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" size="lg" block>
                    Registrarse
             </Button>
            </Form>
        </Container>



    )
}

export default Registro
