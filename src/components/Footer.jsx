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
import { Button } from "react-bootstrap";


const fbIcon = <FontAwesomeIcon icon={faFacebookSquare} size="lg" />;
const igIcon = <FontAwesomeIcon icon={faInstagram} size="lg" />;
const wpIcon = <FontAwesomeIcon icon={faWhatsapp} size="lg" />;

const Footer = () => {
  return (
    <Container
      fluid
      className=" flex-wrap justify-content-around text-center mt-5 footerbg">
      <Row>
        <Col>
          <Image src="/logo500.png" fluid style={{ maxHeight: "250px" }} />
        </Col>
        <Col>
          <h6>Links Útiles</h6>
          <Col>
            <a href="/contacto">Contacto</a>
              </Col>
          <Col>
            <a href="/error404">FAQ</a>
              </Col>
        </Col>
        <Col className="m-2">
          <h6>Contacto</h6>
          <a className="m-2" href="https://www.facebook.com">{fbIcon}</a>
          <a className="m-2" href="https://www.instagram.com/">{igIcon}</a>
          <a className="m-2" href="https://www.whatsapp.com/?lang=es">{wpIcon}</a>
          </Col>
        <Col>
        <h6>Legal</h6>
          <Col>
            <a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy</a>
              </Col>
          <Col>
            <a href="https://www.termsfeed.com/blog/sample-return-policy-ecommerce-stores/#What_Is_A_Return_Refund_Policy">Refund Policy</a>
              </Col>
          <Col>
           <a href="https://support.google.com/drive/answer/2450387?hl=en#:~:text=As%20our%20Terms%20of%20Service,store%20in%20your%20Drive%20account."> Terminos de servicio</a>
              </Col>
        </Col>
    
        <Col>
            <a href="http://qr.afip.gob.ar/?qr=YXKxvKnIS73rllqkgSWURw,," target="_blank" rel="noreferrer" title="AFIP">
              <Image src="https://1.bp.blogspot.com/-tyDj3FH73V0/UVugtbI_MYI/AAAAAAAAGYE/TzM5UBA57QQ/s1600/Data-fiscal-Web.jpg" alt="AFIP" id="dataqr" />
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
