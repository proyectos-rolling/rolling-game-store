import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Container from "react-bootstrap/Container";


const Registro = () => {

    const [datos, setDatos] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const root_url = process.env.REACT_APP_API_ROOT_URL;

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        validarDatos();
        saveDatos();
    }
    const validarDatos = () => {
        if (!datos.name.trim()) {
            setError('El nombre es obligatorio!');
            return
        }
        if (!datos.email.trim()) {
            setError('Ingrese mail');
            return
        }
        if (!datos.password.trim()) {

            setError('Ingrese password');
            return
        }
        if (datos.password.length < 6) {
            setError('Password de 6 caracteres o más');
            return
        }
        setError(null);
    };

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
                {
                    error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )
                }
                <Form.Group controlId="nombre">
                    <Form.Label >Nombre</Form.Label>
                    <Form.Control type="text"
                        placeholder="Nombre"
                        name="name"
                        //required
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="mail">
                    <Form.Label >Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese el mail"
                        name="email"
                        //required
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label >Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese password"
                        name="password"
                        //required
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
