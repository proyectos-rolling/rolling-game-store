import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./css/registro.css";
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const trashIcon = <FontAwesomeIcon icon={faTrash} />;
const editIcon = <FontAwesomeIcon icon={faEdit} />;

const CargaJuegos = ({ setGames, games, loggedUser }) => {
  const [allGames, setAllGames] = useState([])
  const [datos, setDatos] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    categories: "",
    active: false,
    featured: false, //caracteristica
    banner_image_url: "",
    poster_image_url: "",
  });
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const root_url = process.env.REACT_APP_API_ROOT_URL; //del post

  useEffect(() => {
    fetch(`${root_url}/games/`)
      .then((res) => res.json())
      .then((json) => {
        setAllGames(json);
      })
      .catch((error) => console.error("Hubo un error en el fetch: ", error));
  }, [root_url]);
  const handleClose = ({ setGames, games }) => {
    setShow(false);
    setDatos({
      name: "",
      description: "",
      price: "",
      discount: "",
      categories: "",
      active: false,
      featured: false, //caracteristica
      banner_image_url: "",
      poster_image_url: "",
    });
  };

  const handleInputChange = (event) => {
    try {
      if (event.target.type === "checkbox") {
        setDatos({ ...datos, [event.target.name]: event.target.checked });
        return;
      }
      setDatos({ ...datos, [event.target.name]: event.target.value });
    } catch (error) {
      console.log(event.target);
      console.log(error);
    }
  };

  const handleEdit = (game) => { //cuando hago click en el boton editar de la lista
    setDatos({
      name: game.name,
      description: game.description,
      price: game.price,
      discount: game.discount,
      categories: game.categories,
      active: game.active,
      featured: game.featured, //caracteristica
      banner_image_url: game.banner_image_url,
      poster_image_url: game.poster_image_url,
      id: game._id,
    });
  };
  const handleDelete = async (game) => {
    setDatos({
      _id: game._id,
    });
    const confirmation = window.confirm("Está seguro?")
    if (confirmation) {
      const res = await fetch(`${root_url}/games/${game._id}/`, {
        //revisar
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", //fijarse en postman
        },
        body: JSON.stringify(datos),
      });
      const result = await res.json();

      setMensaje(result.msg);
      setShow(true);

      const res2 = await fetch(`${root_url}/games`);
      const json = await res2.json();
      setAllGames(json);
      setGames(json.filter((game) => game.active));
    }

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
  };
  const validarDatos = () => {
    if (!datos.name.trim()) {
      setError("El nombre es obligatorio");
      return false;
    }
    if (!datos.description.trim()) {
      setError("La descripcion es obligatoria");
      return false;
    }
    if (!datos.price) {
      setError("Olvido ingresar un precio");
      return false;
    }
    // Descuento no tiene validacion
    setError(null);
    return true;
  };

  const saveDatos = async () => {
    const res = await fetch(`${root_url}/games/new`, {
      //revisar
      method: "POST",
      headers: {
        "Content-Type": "application/json", //fijarse en postman
      },
      body: JSON.stringify(datos),
    });
    const result = await res.json();

    setMensaje(result.msg);
    setShow(true);

    const res2 = await fetch(`${root_url}/games/active`);
    const json = await res2.json();
    setGames(json);
  };

  const updateDatos = async () => { //cuando hago click en el editar grande verde
    const res = await fetch(`${root_url}/games/edit/`, {
      //revisar
      method: "PUT",
      headers: {
        "Content-Type": "application/json", //fijarse en postman
      },
      body: JSON.stringify(datos),
    });
    const result = await res.json();

    setMensaje(result.msg);
    setShow(true);

    const res2 = await fetch(`${root_url}/games`);
    const json = await res2.json();
    setAllGames(json);
    setGames(json.filter((game) => game.active))
  };

  if (!loggedUser.admin) {
    return (<h1 className="text-center">Debe ser admin para ver esta página</h1>)
  }
  return (
    <Container>
      <h3 id="titulo-carga-juegos" className="text-center">Cargar Juego</h3>
      <Form onSubmit={enviarDatos}>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            name="name"
            value={datos.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio"
            name="price"
            value={datos.price}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="descuento">
          <Form.Label>Descuento</Form.Label>
          <Form.Control
            type="number"
            placeholder="Descuento"
            name="discount"
            value={datos.discount}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="categoria">
          <Form.Label>Categorias</Form.Label>
          <Form.Control
            type="text"
            placeholder="Categoria"
            name="categories"
            value={datos.categories}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="activo">
          <Form.Label>Activo</Form.Label>
          <Form.Check
            name="active"
            type="checkbox"
            checked={datos.active}
            label="Activo"
            onChange={handleInputChange}
          />
          
          <Form.Group controlId="descripcion">
          <Form.Label>Decripcion</Form.Label>
          <Form.Control
            as="textarea"
            type="textarea"
            rows="10"
            cols="30"
            placeholder="Descripcion"
            name="description"
            value={datos.description}
            onChange={handleInputChange}
          />
        </Form.Group>


        </Form.Group>
        <Form.Group controlId="images">
          <Form.Label>Imagen Poster</Form.Label>
          <Form.File
            label="Imagen"
            name="poster_image_url"
            value={datos.poster_image_url}
            onChange={handleInputChange}
            custom
          />
        </Form.Group>
        <Form.Group controlId="images">
          <Form.Label>Imagen Banner</Form.Label>
          <Form.File
            label="Imagen"
            name="banner_image_url"
            value={datos.banner_image_url}
            onChange={handleInputChange}
            custom
          />
        </Form.Group>

        <Button variant="primary" type="submit" size="lg" block>
          Finalizar carga
        </Button>
      </Form>
      <Button className="mt-2" variant="success" size="lg" block onClick={() => updateDatos()}>
        actualizar juego
      </Button>


      <Table bordered hover variant="primary" className="mt-4">
        <thead>
          <tr>
            <th>Juegos</th>
          </tr>
        </thead>
        <tbody>
          {allGames.map((game) => (
            <tr key={game._id}>
              <td >
                <div className=" row p-2 justify-content-between">
                  {game.name}{" "}
                  <div>
                  <a className="btn btn-success m-1" href="#titulo-carga-juegos" onClick={() => handleEdit(game)}>{editIcon}</a>
                  <a className="btn btn-danger m-1" href="#titulo-carga-juegos" onClick={() => handleDelete(game)}>{trashIcon}</a>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <ul>
        {allGames.map((game) => (
          <li key={game._id}>
            {game.name}{" "}
            <a href="#titulo-carga-juegos" onClick={() => handleEdit(game)}>
              editar
            </a>
            <a href="#titulo-carga-juegos" onClick={() => handleDelete(game)}>
              BORRAR
            </a>
          </li>
        ))}
      </ul> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carga de juego </Modal.Title>
        </Modal.Header>
        <Modal.Body>{mensaje}</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" size="lg" block onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CargaJuegos;