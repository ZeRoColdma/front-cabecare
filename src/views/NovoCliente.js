import React, { useState, useRef } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import routes from "../routes";
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import api from "../service/api";

// reactstrap components
import {
  // Alert,
  Card,
  CardHeader,
  Col,
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "../components/Headers/HeaderPedidos.js";

// const statusCadastro = (prop) => {
//   return (
//     <div>
//       {(() => {
//         if (prop === true) {
//           return <Alert color="success">Cliente Cadastrado com Sucesso!</Alert>;
//         } else {
//           <Alert color="warning">Cliente Já Cadastrado no Sistema!</Alert>;
//         }
//       })()}
//     </div>
//   );
// };

let status = null;
const NovoCliente = (props) => {
  const mainContent = useRef(null);

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [cpfcnpj, setCpfCnpj] = useState();
  const [endereco, setEndereco] = useState();
  const [cidade, setCidade] = useState();
  const [pais, setPais] = useState();
  const [cep, setCep] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = {
        nome,
        email,
        telefone,
        cpfcnpj,
        endereco,
        cidade,
        pais,
        cep,
      };
      await api.post("/clientes", { ...data });
      alert("Cliente criado com sucesso!");

      setNome("");
      setEmail("");
      setTelefone("");
      setCpfCnpj("");
      setCidade("");
      setEndereco("");
      setPais("");
      setCep("");

      status = true;
    } catch (error) {
      // status = false;
      alert("Cliente já cadastrado!");
    }
  }
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
        <AdminNavbar {...props} />
        <Header />
        {/* Page content */}
        <Container className="mt--6" fluid>
          <Row>
            <Col className="order-xl-1">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Novo Cliente</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#"
                        size="sm"
                        onClick={handleSubmit}
                      >
                        Criar
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Informações do Cliente
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Nome
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder=""
                              type="text"
                              name="nome"
                              value={nome}
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
                              htmlFor="input-email"
                            >
                              Endereço de E-mail
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder=""
                              type="email"
                              name="email"
                              value={email}
                              required
                              onChange={(event) => {
                                setEmail(event.target.value);
                              }}
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
                              Telefone
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-first-name"
                              type="text"
                              name="phone"
                              value={telefone}
                              onChange={(event) => {
                                setTelefone(event.target.value);
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
                              CPF/CNPJ
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              type="text"
                              name="cpfcnpj"
                              value={cpfcnpj}
                              onChange={(event) => {
                                setCpfCnpj(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
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
                              id="input-address"
                              type="text"
                              name="endereco"
                              value={endereco}
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
                              id="input-city"
                              type="text"
                              name="cidade"
                              value={cidade}
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
                              id="input-country"
                              type="text"
                              name="pais"
                              value={pais}
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
                              type="number"
                              name="cep"
                              value={cep}
                              onChange={(event) => {
                                setCep(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
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

export default NovoCliente;
