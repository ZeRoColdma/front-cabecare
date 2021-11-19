import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import AuthFooter from "../components/Footers/AuthFooter.js";
import AuthNavbar from "../components/Navbars/AuthNavbar.js";

// reactstrap components
import {
  Button,
  Card,
  Container,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import { login } from "../service/auth";
import api from "../service/api";

const Login = () => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const data = await api.post("/sessions", { email, password });
      const { token } = data.data;
      login(data.data.token.token);
      api.defaults.headers["Authorization"] = `Bearer ${token.token}`;
      history.push({
        pathname: `/index/`,
        state: { idUser: data.data.user_id },
      });
    } catch (error) {
      console.log(error);
      alert("Algo de errado aconteceu... Tente novamente");
    }
  }
  return (
    <>
      <div className="main-content" ref={mainContent}>
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="card-profile-image2">
                    <a href="#">
                      <img
                        alt="..."
                        className=""
                        src={require("../assets/img/brand/logo.png").default}
                      />
                    </a>
                  </div>
                  <div className="text-center text-muted mb-4">
                    <small>Login</small>
                  </div>
                  <Form role="form" onSubmit={handleLogin}>
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          autoComplete="new-email"
                          value={email || ""}
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          autoComplete="new-password"
                          value={password || ""}
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="submit">
                        Entrar
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Row className="mt-3">
                <Col xs="6">
                  <a className="text-light" onClick={(e) => e.preventDefault()}>
                    {/* <small>Esqueceu a senha?</small> */}
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Login;
