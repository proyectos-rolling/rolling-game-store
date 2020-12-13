import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './css/conocenos.css'



const Conocenos = () => {
    return (
        <Container className="p-4 mt-4 mb-4 fondito">
                <h3 id="meetteam">Meet the Team</h3>
            <Row className="justify-content-md-center p-4 m-4">
                <Col className="styles" xs={6} md={4}>
                    <Image src="https://styles.redditmedia.com/t5_cx5jc/styles/profileIcon_ic1jtsozihj51.jpg?width=256&height=256&crop=256:256,smart&frame=1&s=5c2267dfecef81912668250d14041f14d3018849" fluid roundedCircle />
                    <h3  className="teamnames">Benjamín Lavena</h3>
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://styles.redditmedia.com/t5_1ul7lh/styles/profileIcon_n62ttl461vr41.jpg?width=256&height=256&crop=256:256,smart&frame=1&s=399d7fe90c6dd53f003bf0f7e11c7efb3038a9c6" fluid roundedCircle />
                    <h3 className="teamnames">Lucas Soria</h3>
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://i.pinimg.com/474x/88/e4/68/88e4684c9c5f138390ee81a9fa7bca5d.jpg" fluid roundedCircle />
                    <h3 className="teamnames">Gianina Moreno</h3>
                </Col>
            </Row>
            <Row className="justify-content-md-center p-4 m-4">
                <Col xs={6} md={4}>
                    <Image src="https://i.pinimg.com/474x/d6/24/ca/d624cad73f5da91927b099de423cdb4e.jpg" fluid roundedCircle />
                    <h3 className="teamnames">Nicolas Delgado</h3>
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://styles.redditmedia.com/t5_2fbx9e/styles/profileIcon_zpx8h8dwbrx51.jpg?width=256&height=256&crop=256:256,smart&frame=1&s=84bbf970332f9cb8820e7446fbe1ab95872aa7c5" fluid roundedCircle />
                    <h3 className="teamnames">Valeria Lopez</h3>
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://i.pinimg.com/originals/ee/08/9b/ee089b7f776c5c5a09c788bbf4a82f9a.jpg" fluid roundedCircle />
                    <h3 className="teamnames">Daniel German</h3>
                </Col>
            </Row>
        </Container>
    )
}
export default Conocenos
