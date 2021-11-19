import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import api from "../../service/api";

const UserHeader = () => {
  async function indexProfile() {
    const response = await api.get("/perfils");
    const data = response.data.perfil;
    // const { email, username } = response.data.user;

    try {
      setNome(data.nome);
    } catch (error) {}
  }

  const [userName, setNome] = useState("");

  useEffect(() => {
    indexProfile();
  }, []);

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "100px",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Olá {userName}</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
