import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import * as LS from "../helpers/LSmanager";


const Login = () => {

    const [datos, setDatos] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const root_url = process.env.REACT_APP_API_ROOT_URL;
    //para que no se cierre el Form Login del collapse
    const dontClose = (e) => {
        e.target.focus();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }

    const handleClose = () => {
        setShow(false)
        setDatos({
            email: "",
            password: ""
        });
    }
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    }

    const validarDatos = () => {
        if (!datos.email.trim()) {
            setError('Ingrese mail');
            return false
        }
        if (!datos.password.trim()) {
            setError('Ingrese password');
            return false
        }
        setError(null);
        return true
    };

    const enviarDatos = (event) => {
        event.preventDefault();
        validarDatos();
        const validateData = validarDatos();
        if (validateData) {
            hacerLogin();
        }

    }
    const hacerLogin = () => {
        fetch(`${root_url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        })
            .then((res) => res.json())
            .then((result) => {
                LS.Add("loggedUser", { email: result.mail, admin: result.admin })
                setMensaje(result.msg);
                setShow(true);
            })
            .catch((err) => console.log('error'))
    };


    return (
        <Container>
            <Form onSubmit={enviarDatos}>
                {
                    error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )
                }
                <Form.Group controlId="email">
                    <Form.Label>Ingrese email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese email"
                        name="email"
                        value={datos.email}
                        onChange={handleInputChange}
                        onClick={dontClose}
                    />
                    <Form.Text className="text-muted">
                        Nunca compartiremos su correo electrónico con nadie.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={datos.password}
                        onChange={handleInputChange}
                        onClick={dontClose}
                    />
                </Form.Group>

                <Button variant="dark" size="lg" block type="submit">
                    Ingresar
                </Button>
            </Form>

            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title >Login de Usuario</Modal.Title>
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

export default Login
