import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import routes from "../routes";

import api from "../service/api";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Alert,
} from "reactstrap";
// core components
import UserHeader from "../components/Headers/UserHeader.js";

const Profile = (props) => {
  const [show, setShow] = useState(false);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [userId, setUserId] = useState(0);
  const [profileId, setProfileId] = useState("");

  const [nome, setNome] = useState("");
  const [ultimonome, setUltimonome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [pais, setPais] = useState("");
  const [cep, setCep] = useState("");
  const [sobre, setSobre] = useState("");
  const [cpf, setCpf] = useState("");

  const mainContent = useRef(null);

  async function indexProfile() {
    const response = await api.get("/perfils");
    const data = response.data.perfil;
    const { email, username } = response.data.user;

    const { id } = response.data.perfil;

    setProfileId(id);

    try {
      setUserId(data.user_id);
      setNome(data.nome);
      setUltimonome(data.ultimonome);
      setTelefone(data.telefone);
      setEndereco(data.endereco);
      setCidade(data.cidade);
      setPais(data.pais);
      setCep(data.cep);
      setSobre(data.sobre);
      setCpf(data.cpf);

      setUserName(username);
      setUserEmail(email);
    } catch (error) {
      console.log(error + " " + userId);
      alert("Perfil ainda não criado");
    }
  }

  async function updateProfile() {
    let data = {
      nome,
      ultimonome,
      telefone,
      endereco,
      cidade,
      pais,
      cep,
      sobre,
      cpf,
    };
    try {
      await api.put(`/perfils/${profileId}`, data).then((response) => {
        if (response.status === 200) {
          setShow(true);
          setTimeout(function () {
            setShow(false);
          }, 3000);
        } else {
          alert("Erro ao atualizar perfil");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
    indexProfile();
  }, []);

  const perfilAlert = (
    <div
      style={{
        align: "center",
        position: "static",
        width: "100%",
      }}
    >
      <Alert>Perfil Atualizado com Sucesso</Alert>
    </div>
  );

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/index",
          imgSrc: require("../assets/img/brand/logo.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--6" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="3">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/theme/william.jpg").default}
                      />
                    </div>
                  </Col>
                </Row>

                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5"></div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>{nome}</h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {cidade}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      {show && perfilAlert}
                      <h3 className="mb-0">Meu Perfil</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button color="primary" onClick={updateProfile} size="sm">
                        Salvar
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Informações do Usuário
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={userName}
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Endereço de E-mail
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder={userEmail}
                              type="email"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Primeiro Nome
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={nome}
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                              onChange={(event) => {
                                setNome(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Ultimo Nome
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={ultimonome}
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                              onChange={(event) => {
                                setUltimonome(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Informações de contato
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Endereço
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={endereco}
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                              onChange={(event) => {
                                setEndereco(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Cidade
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={cidade}
                              id="input-city"
                              placeholder="City"
                              type="text"
                              onChange={(event) => {
                                setCidade(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              País
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={pais}
                              id="input-country"
                              placeholder="Country"
                              type="text"
                              onChange={(event) => {
                                setPais(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              CEP
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              value={cep}
                              placeholder="Postal code"
                              type="number"
                              onChange={(event) => {
                                setCep(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Telefone
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-phone-number"
                              value={telefone}
                              placeholder="Telefone"
                              type="number"
                              onChange={(event) => {
                                setTelefone(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Cpf
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-phone-cpf"
                              value={cpf}
                              placeholder="Cpf"
                              type="number"
                              onChange={(event) => {
                                setCpf(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>Sobre mim</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue={sobre}
                          type="textarea"
                          onChange={(event) => {
                            setSobre(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Profile;
