import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container
      fluid
      className="bg-warning d-flex flex-wrap justify-content-around text-center mt-5">
      <Row>
        <Col>
          <Image src="/logo500.png" fluid style={{maxHeight:"250px"}}/>
        </Col>
        <Col>
          <h6>Links Columna 1</h6>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            provident, veritatis minima nesciunt necessitatibus tenetur quaerat
            dicta maxime dignissimos, obcaecati saepe eius? Dolorem vitae
            accusamus aut maxime sunt alias inventore.
          </div>
        </Col>
        <Col>
          <h6>Links Columna 2</h6>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            totam corporis sequi minima modi facere commodi optio tempora
            facilis incidunt, illo sapiente fuga praesentium? Obcaecati corporis
            veritatis libero iure dignissimos.
          </div>
        </Col>
        <Col>
          <h6>Redes sociales + info contacto + QR Data Fiscal</h6>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            totam corporis sequi minima modi facere commodi optio tempora
            facilis incidunt, illo sapiente fuga praesentium? Obcaecati corporis
            veritatis libero iure dignissimos.
          </div>
        </Col>
      </Row>
      <Row>
        <h6> &copy;Copyright 2020</h6>
      </Row>
    </Container>
  );
};

export default Footer;
