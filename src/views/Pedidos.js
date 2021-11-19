import React, { useRef, useEffect, useState } from "react";
import api from "../service/api";
import Sidebar from "../components/Sidebar/Sidebar";
import routes from "../routes";
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
// reactstrap components
import { Input, Card, CardHeader, Table, Container, Row } from "reactstrap";
import "../App.css";

import Header from "../components/Headers/HeaderPedidos.js";
import EditOrder from "../components/EdicaoPedido/IndexEdicao";
import PageImpressionPdf from "../components/ImpressaoPdf/index";

const Pedidos = (props) => {
  const mainContent = useRef(null);

  const [pedidos, setPedidos] = useState([]);
  const [pedidosEdit, setPedidosEdit] = useState([]);

  async function handlePedidos() {
    const response = await api.get("/pedidos");
    const data = response.data;
    const { pedido } = data;
    setPedidos(pedido);
  }

  async function handleEditPedidos(event, id) {
    event.preventDefault();
    let data = { status_pedido: pedidosEdit };
    try {
      await api.put(`/pedidos/${id}`, data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(async () => {
    await handlePedidos();
  }, []);

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
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Pedidos</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Numero Do Pedido</th>
                      <th scope="col">Nome Do Cliente</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pedidos.map((pedido) => (
                      <tr key={pedido.id}>
                        <td>{pedido.id}</td>
                        <td>{pedido.nome_cliente}</td>
                        <Input
                          type="select"
                          onChange={(event) =>
                            setPedidosEdit(event.target.value)
                          }
                          onClick={(event, id) =>
                            handleEditPedidos(event, pedido.id)
                          }
                        >
                          <option>{pedido.status_pedido}</option>
                          <option>ORÇAMENTO</option>
                          <option>COMPRA DE MATERIAL</option>
                          <option>PROJETO (SE TIVER)</option>
                          <option>PRODUÇÃO</option>
                          <option>CHECKLIST</option>
                          <option>EMBALAGEM</option>
                          <option>ENTREGA/DESPACHO</option>
                        </Input>
                        <td></td>
                        <EditOrder idOrder={pedido.id} />
                        <PageImpressionPdf idOrder={pedido.id} />
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Pedidos;
