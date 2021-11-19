import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import AdminFooter from "../components/Footers/AdminFooter.js";
import Sidebar from "../components/Sidebar/Sidebar";
import routes from "../routes";

import api from "../service/api";

import { Pie } from "react-chartjs-2";

import Chart from "chart.js";

import { chartOptions, parseOptions } from "../variables/charts";
// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";

import Header from "../components/Headers/Header";

const Index = (props) => {
  const mainContent = useRef(null);
  const location = useLocation();

  const [compraMaterial, setCompraMaterial] = useState(0);
  const [checkList, setCheckList] = useState(0);
  const [producao, setProducao] = useState(0);
  const [entrega, setEntrega] = useState(0);
  const [embalagem, setEmbalagem] = useState(0);
  const [projeto, setProjeto] = useState(0);
  const [orcamento, setOrcamento] = useState(0);
  const [totalPedidos, setTotalPedidos] = useState(0);

  useEffect(async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;

    const data = await api.get("/contagempedidos");
    const dataTotal = await api.get("/contagempedidostotal");

    const totalDataIndex = data.data;

    for (let index = 0; index < totalDataIndex.length; index++) {
      const element = totalDataIndex[index];

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
      if (element.status_pedido === "PROJETO (SE TIVER)") {
        setProjeto(element.count);
      }
    }

    try {
      setTotalPedidos(dataTotal.data[0]["count"]);
    } catch (error) {
      setTotalPedidos(0);
    }
  }, [location]);

  let chartExample3 = {
    labels: [
      "Em Produção",
      "Em Orçamento",
      "Entregues",
      "Compra de Material",
      "Checklist",
      "Embalando",
      "Projeto",
    ],
    datasets: [
      {
        label: "Overwiew",
        data: [
          producao,
          orcamento,
          entrega,
          compraMaterial,
          checkList,
          embalagem,
          projeto,
        ],
        backgroundColor: [
          "rgb(255, 112, 112)",
          "rgb(255, 205, 86)",
          "rgb(0, 128, 255)",
          "rgb(204, 0, 102)",
          "rgb(32,178,170)",
          "rgb(32,178,0)",
          "rgb(0,0,128)",
        ],
        // hoverOffset: 5,
      },
    ],
  };

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
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
        <Container className="mt--7" fluid>
          <Row>
            <Col xl="12">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Performance
                      </h6>
                      <h2 className="mb-0">Total de Pedidos</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Pie
                      data={chartExample3}
                      options={{
                        title: {
                          display: true,
                          text: "",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                          position: "top",
                        },
                      }}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Index;
