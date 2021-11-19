import React, { useState, useEffect } from "react";
import api from "../../service/api";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  const [compraMaterial, setCompraMaterial] = useState(0);
  const [checkList, setCheckList] = useState(0);
  const [producao, setProducao] = useState(0);
  const [entrega, setEntrega] = useState(0);
  const [embalagem, setEmbalagem] = useState(0);
  const [projeto, setProjeto] = useState(0);
  const [orcamento, setOrcamento] = useState(0);

  const [totalPedidos, setTotalPedidos] = useState(0);

  useEffect(async () => {
    const data = await api.get("/contagempedidos");
    const dataTotal = await api.get("/contagempedidostotal");

    const totalData = data.data;

    for (let index = 0; index < totalData.length; index++) {
      const element = totalData[index];

      if (element.status_pedido === "EMBALAGEM") {
        setEmbalagem(element.count);
      }
      if (element.status_pedido === "ORÇAMENTO") {
        setOrcamento(element.count);
      }
      if (element.status_pedido === "COMPRA DE MATERIAL") {
        setCompraMaterial(element.count);
      }
      if (element.status_pedido === "CHECKLIST") {
        setCheckList(element.count);
      }
      if (element.status_pedido === "PRODUÇÃO") {
        setProducao(element.count);
      }
      if (element.status_pedido === "ENTREGA/DESPACHO") {
        setEntrega(element.count);
      }
    }

    setTotalPedidos(dataTotal.data[0]["count"]);
  }, []);

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total de Pedidos
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {totalPedidos}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Em Produção
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {producao}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Orçamento
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {orcamento}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Entregues
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {entrega}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
