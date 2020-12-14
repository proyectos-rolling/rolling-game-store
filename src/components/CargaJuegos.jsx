import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import "./css/registro.css";

const Carga = () => {

    const [datos, setDatos] = useState({
        name: '',
        description: '',
        price: '',
        discount: '',
        categories: '',
        active: '',
        featured: '', //caracteristica
        images: '',
        banner_image_url: ''
    });
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const root_url = process.env.REACT_APP_API_ROOT_URL; //del post

    const handleClose = () => {
        setShow(false)
        setDatos({
            name: "",
            description: "",
            price: "",
            discount: "",
            categories: "",
            active: "",
            featured: "",
            images: "",
            banner_image_url: ""

        });
    }

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    }
    const enviarDatos = (event) => {
        event.preventDefault(); //no recarga la pagina
        //saveDatos();
        validarDatos();
        const validateData = validarDatos();
        if (validateData) {
            saveDatos();
        }
//return
    }
    const validarDatos = () => {
        if (!datos.name.trim()) {
            setError('El nombre es obligatorio');
            return false
        }
        if (!datos.description.trim()) {
            setError('La descripcion es obligatoria');
            return false
        }
        if (!datos.price.trim()) {

            setError('Olvido ingresar un precio');
            return false
        }
        // Descuento no tiene validacion
        setError(null);
        return true
    };

    const saveDatos = () => {
        fetch(`${root_url}/admin`, { //revisar
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //fijarse en postman
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
        <Container >
            <h3 >Cargar Juego</h3>
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
                <Form.Group controlId="descripcion">
                    <Form.Label >Decripcion</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Descripcion"
                        name="descripcion"
                        value={datos.description}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label >Precio</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Precio"
                        name="precio"
                        value={datos.price}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="descuento">
                    <Form.Label >Descuento</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Descuento"
                        name="descuento"
                        value={datos.discount}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="categoria">
                    <Form.Label >Categorias</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Categoria"
                        name="categoria"
                        value={datos.categories}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="activo">
                    <Form.Label >Activo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Activo"
                        name="activo"
                        value={datos.active}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="images">
                    <Form.Label >Imagen</Form.Label>
                    <Form.Control
                        type="url"
                        placeholder="Imagen"
                        name="images"
                        value={datos.images}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" size="lg" block>
                    Finalizar carga 
             </Button>
            </Form>
            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title >Carga de juego </Modal.Title>
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

export default Carga;
