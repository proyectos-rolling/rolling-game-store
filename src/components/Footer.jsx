import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


import './css/footer.css'


const fbIcon = <FontAwesomeIcon icon={faFacebookSquare} size="lg" />;
const igIcon = <FontAwesomeIcon icon={faInstagram} size="lg" />;
const wpIcon = <FontAwesomeIcon icon={faWhatsapp} size="lg" />;

const Footer = () => {
  return (
    <Container
      fluid
      className="d-flex flex-wrap justify-content-around text-center mt-5 footerbg">
      <Row>
        <Col>
          <Image src="/logo500.png" fluid style={{ maxHeight: "250px" }} />
        </Col>
        <Col>
          <h6>Links Útiles</h6>
          <Col>
            Contacto
              </Col>
          <Col>
            FAQ
              </Col>
          <Col>
            Privacy Policy
              </Col>
              <Col>
              Refund Policy
              </Col>
              <Col>
              Terminos de servicio
              </Col>

        </Col>
        <Col>
          <h6>Contacto</h6>
          <a href="https://www.facebook.com">{fbIcon}</a>
          <a href="https://www.instagram.com/">{igIcon}</a>
          <a href="https://www.whatsapp.com/?lang=es">{wpIcon}</a>  
        </Col>
        <Col>
        <a href="http://qr.afip.gob.ar/?qr=YXKxvKnIS73rllqkgSWURw,," target="_blank" title="AFIP">
            <Image src="https://www.carrefour.com.ar/media/wysiwyg/footer/afip.png" alt="AFIP"/>
        </a>
        </Col>
      </Row>
      <Row>
        <Col>
        <h6> &copy;Copyright 2020</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
