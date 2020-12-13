import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/conocenos.css";

const Conocenos = () => {
  const team = [
    {
      name: "Benjamín Lavena",
      avatarUrl:
        "https://styles.redditmedia.com/t5_cx5jc/styles/profileIcon_ic1jtsozihj51.jpg?width=256&height=256&crop=256:256,smart&frame=1&s=5c2267dfecef81912668250d14041f14d3018849",
    },
    {
      name: "Lucas Soria",
      avatarUrl:
        "https://styles.redditmedia.com/t5_1ul7lh/styles/profileIcon_n62ttl461vr41.jpg?width=256&height=256&crop=256:256,smart&frame=1&s=399d7fe90c6dd53f003bf0f7e11c7efb3038a9c6",
    },
    {
      name: "Gianina Moreno",
      avatarUrl:
        "https://i.pinimg.com/474x/88/e4/68/88e4684c9c5f138390ee81a9fa7bca5d.jpg",
    },
    {
      name: "Nicolas Delgado",
      avatarUrl:
        "https://i.pinimg.com/474x/d6/24/ca/d624cad73f5da91927b099de423cdb4e.jpg",
    },
    {
      name: "Valeria Lopez",
      avatarUrl:
        "https://styles.redditmedia.com/t5_2fbx9e/styles/profileIcon_zpx8h8dwbrx51.jpg?width=256&height=256&crop=256:256,smart&frame=1&s=84bbf970332f9cb8820e7446fbe1ab95872aa7c5",
    },
    {
      name: "Daniel German",
      avatarUrl:
        "https://i.pinimg.com/originals/ee/08/9b/ee089b7f776c5c5a09c788bbf4a82f9a.jpg",
    },
  ];
  return (
    <Container className="p-4 mt-4 mb-4 fondito">
      <h3 id="meetteam">Meet the Team</h3>
      <Row className="justify-content-md-center p-4 m-4">
        {team.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            avatarUrl={member.avatarUrl}
          />
        ))}
      </Row>
    </Container>
  );
};

const TeamMemberCard = ({name, avatarUrl}) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <Image
        src={avatarUrl}
        fluid
        roundedCircle
      />
      <h3 className="teamnames">{name}</h3>
    </Col>
  );
};

export default Conocenos;
