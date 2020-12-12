import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import "./css/registro.css";

const Registro = () => {

    const [datos, setDatos] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const root_url = process.env.REACT_APP_API_ROOT_URL;


    const handleClose = () => {
        setShow(false)
        setDatos({
            name: "",
            email: "",
            password: "",
            passwordConfirmation: ""

        });
    }

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        validarDatos();
        const validateData = validarDatos();
        if (validateData) {
            saveDatos();
        }

    }
    const validarDatos = () => {
        if (!datos.name.trim()) {
            setError('El nombre es obligatorio!');
            return false
        }
        if (!datos.email.trim()) {
            setError('Ingrese mail');
            return false
        }
        if (!datos.password.trim()) {

            setError('Ingrese password');
            return false
        }
        if (datos.password.length < 6) {
            setError('Password de 6 caracteres o más');
            return false
        }
        if (datos.password !== datos.passwordConfirmation) {
            setError('Las contraseñas no son iguales');
            return false
        }
        setError(null);
        return true
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
            .then((result) => {
                setMensaje(result.msg);
                setShow(true);
            })
            .catch((err) => console.log('error'))
    };

    return (
        <Container className="py-5 mt-5 mb-5 register">
            <h3 className="text-center uwu">Registro de usuarios</h3>
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
                        value={datos.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="mail">
                    <Form.Label >Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese el mail"
                        name="email"
                        value={datos.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label >Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese password"
                        name="password"
                        value={datos.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="passwordConfirmation">
                    <Form.Label >Confirme Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese password"
                        name="passwordConfirmation"
                        value={datos.passwordConfirmation}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" size="lg" block>
                    Registrarse
             </Button>
            </Form>
            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title ></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {mensaje}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" size="lg" block onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>



    )
}

export default Registro
