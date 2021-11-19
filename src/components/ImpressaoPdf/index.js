import React, { useState } from "react";
import { useHistory } from "react-router";

import {
  Container,
  Row,
  Col,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";

import api from "../../service/api";

export default function PageImpressionPdf(props) {
  const history = useHistory();
  const [id, setId] = useState(false);

  const [nomeCliente, setNomeCliente] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [enderecoCliente, setEnderecoCliente] = useState("");

  const [tipoDeIntalacao, setTipoDeIntalacao] = useState("");
  const [tipoDeParede, setTipoDeParede] = useState("");
  const [tipoDeCabeceira, setTipoDeCabeceira] = useState("");
  const [tipoDeTachas, setTipoDeTachas] = useState("");
  const [abasLaterais, setAbasLaterais] = useState("");
  const [entreVaos, setEntreVaos] = useState("");
  const [tipoDeRodape, setTipoDeRodape] = useState("");
  const [opcaoEscada, setOpcaoEscada] = useState("");
  const [tamanhoEscada, setTamanhoEscada] = useState("");
  const [opcaoImpermeabilizacao, setOpcaoImpermeabilizacao] = useState("");

  const [dimensaoAlturaDireto, setDimensaoAlturaDireto] = useState("");
  const [dimensaoLarguraCima, setDimensaoLarguraCima] = useState("");
  const [dimensaoAlturaEsquerdo, setDimensaoAlturaEsquerdo] = useState("");
  const [dimensaoLarguraEmbaixo, setDimensaoLarguraEmbaixo] = useState("");
  const [dimensaoProfundidade, setDimensaoProfundidade] = useState("");

  const [tomadaMargemEsquerda, setTomadaMargemEsquerda] = useState("");
  const [tomadaMargemChaoEsquerda, setTomadaMargemChaoEsquerda] = useState("");
  const [tomadaMargemDireta, setTomadaMargemDireta] = useState("");
  const [tomadaMargemChaoDireita, setTomadaMargemChaoDireta] = useState("");
  const [tomadaDistanciaDoChao, setTomadaDistanciaDoChao] = useState("");
  const [tomadaNaEstrutura, setTomadaNaEstrutura] = useState("");

  const [intermediario, setIntermediario] = useState("");
  const [bolinha, setBolinha] = useState("");
  const [mesmaDistanciaDeTomada, setMesmaDistanciaDeTomada] = useState("");
  const [entreVaoLateral, setEntreVaoLateral] = useState("");
  const [naEstrutura, setNaEstrutura] = useState("");
  const [tipoPerfil, setTipoPerfil] = useState("");
  const [especDeCabeceira, setEspecDeCabeceira] = useState("");
  const [fitaLed, setFitaLed] = useState("");
  const [projeto, setProjeto] = useState("");
  const [opcaoCabeceiraL, setOpcaoCabeceiraL] = useState("");
  const [medidaDeCabeceira, setMedidaDeCabeceira] = useState("");
  const [medidaLateral, setMedidaLateral] = useState("");

  const [modal, setModal] = useState(false);

  async function openModal() {
    const orderEdit = await api.get(`/pedidos/${props.idOrder}`);
    const data = orderEdit.data;

    history.push({
      pathname: `/impressaopedido/${props.idOrder}`,
      state: { data: data },
    });

    setId(props.idOrder);
    setNomeCliente(orderEdit.data["nome_cliente"]);
    setCpfCliente(orderEdit.data["cpfcnpj"]);

    setTipoDeParede(orderEdit.data["tipo_de_parede"]);
    setTipoDeIntalacao(orderEdit.data["tipo_de_instalacao"]);
    setTipoDeCabeceira(orderEdit.data["tipo_de_cabeceira"]);
    setTipoDeTachas(orderEdit.data["tipo_de_tachas"]);
    setAbasLaterais(orderEdit.data["abas_laterais"]);
    setEntreVaos(orderEdit.data["entre_vaos"]);
    setTipoDeRodape(orderEdit.data["tipo_de_rodape"]);
    setOpcaoEscada(orderEdit.data["escada"]);
    setTamanhoEscada(orderEdit.data["tamanho_escada"]);
    setOpcaoImpermeabilizacao(orderEdit.data["impermeabilizacao"]);

    setDimensaoAlturaDireto(orderEdit.data["dimensao_altura_direto"]);
    setDimensaoLarguraCima(orderEdit.data["dimensao_largura_cima"]);
    setDimensaoAlturaEsquerdo(orderEdit.data["dimensao_largura_lado_esquerdo"]);
    setDimensaoLarguraEmbaixo(orderEdit.data["dimensao_largura_embaixo"]);
    setDimensaoProfundidade(orderEdit.data["dimensao_profundidade"]);

    setTomadaMargemEsquerda(orderEdit.data["tomada_margem_esqueda"]);
    setTomadaMargemChaoEsquerda(orderEdit.data["tomada_margem_chao_esquerda"]);
    setTomadaMargemDireta(orderEdit.data["tomada_margem_direita"]);
    setTomadaMargemChaoDireta(orderEdit.data["tomada_magem_chao_direira"]);
    setTomadaDistanciaDoChao(orderEdit.data["tomada_distancia_do_chao"]);
    setTomadaNaEstrutura(orderEdit.data["tomada_na_estrutura"]);

    setIntermediario(orderEdit.data["intermediario"]);
    setBolinha(orderEdit.data["bolinha"]);
    setMesmaDistanciaDeTomada(orderEdit.data["mesma_distancia_de_tomada"]);
    setEntreVaoLateral(orderEdit.data["entre_vao_lateral"]);
    setNaEstrutura(orderEdit.data["na_estrutura"]);
    setTipoPerfil(orderEdit.data["tipo_de_perfil"]);
    setEspecDeCabeceira(orderEdit.data["espec_de_cabeceira"]);
    setFitaLed(orderEdit.data["fita_led"]);
    setProjeto(orderEdit.data["tem_projeto"]);
    setOpcaoCabeceiraL(orderEdit.data["cabeceiraL"]);
    setMedidaDeCabeceira(orderEdit.data["medida_de_cabeceira"]);
    setMedidaLateral(orderEdit.data["medida_lateral"]);

    setModal(true);
  }

  async function closeModal() {
    setModal(false);
  }

  return (
    <>
      <Button color="primary" onClick={openModal}>
        Imprimir Pedido
      </Button>
      <Modal
        isOpen={modal}
        toggle={openModal}
        size="lg"
        backdrop="static"
        style={{ maxWidth: "9900px", width: "100%" }}
      >
        <ModalHeader toggle={closeModal}>Pedido Nº {id}</ModalHeader>
        <ModalBody>
          <Button color="primary" onClick={openModal}>
            Imprimir Pedido
          </Button>

          <Row>
            <Col lg="4">
              <h4>Nome do Cliente</h4>
              <p>{nomeCliente}</p>
            </Col>

            <Col lg="4">
              <h4>Cpf ou CNPJ do Cliente</h4>
              <p>{cpfCliente}</p>
            </Col>
          </Row>

          <Row>
            <Col lg="4">
              <h4>Tipo Parede</h4>
              <p>{tipoDeParede}</p>
            </Col>

            <Col lg="4">
              <h4>Tipo Cabeceira</h4>
              <p>{tipoDeCabeceira}</p>
            </Col>

            <Col lg="4">
              <h4>Tachas</h4>
              <p>{tipoDeTachas}</p>
            </Col>
          </Row>

          <Row>
            <Col lg="4">
              <h4>Abas Laterais</h4>
              <p>{abasLaterais}</p>
            </Col>

            <Col lg="4">
              <h4>Entre Vãos</h4>
              <p>{entreVaos}</p>
            </Col>

            <Col lg="4">
              <h4>Rodapé</h4>
              <p>{tipoDeRodape}</p>
            </Col>
          </Row>

          <Row>
            <Col lg="4">
              <h4>Led</h4>
              <p>{fitaLed}</p>
            </Col>

            <Col lg="4">
              <h4>Perfil</h4>
              <p>{tipoPerfil}</p>
            </Col>

            <Col lg="4">
              <h4>Especificação Cabeceira</h4>
              <p>{especDeCabeceira}</p>
            </Col>
          </Row>

          <Row>
            <Col lg="4">
              <h4>Tera Projeto?</h4>
              <p>{projeto}</p>
            </Col>

            <Col lg="4">
              <h4>Instalação</h4>
              <p>{tipoDeIntalacao}</p>
            </Col>

            <Col lg="4">
              <h4>Impermeabilizacao</h4>
              <p>{opcaoImpermeabilizacao}</p>
            </Col>
          </Row>

          <Row>
            <Col lg="4">
              <h4>Tera Cabeceira em L?</h4>
              <p>{opcaoCabeceiraL}</p>
            </Col>

            <Col lg="4">
              <h4>Medida Cabeceira</h4>
              <p>{medidaDeCabeceira}</p>
            </Col>

            <Col lg="4">
              <h4>Medida Lateral</h4>
              <p>{medidaLateral}</p>
            </Col>
          </Row>

          <Row>
            <Col lg="4">
              <h4>Escada</h4>
              <p>{opcaoEscada}</p>
            </Col>

            <Col lg="4">
              <h4>Altura Escada</h4>
              <p>{tamanhoEscada}</p>
            </Col>
          </Row>

          <Container style={{ height: "30px" }}></Container>

          <Table>
            <thead>
              <tr>
                <th></th>
                <th>
                  <Label>Tomadas</Label>
                </th>
                <th>
                  <Label>Interruptores</Label>
                </th>
                <th>
                  <Label>Dimensao</Label>
                </th>
              </tr>
            </thead>
          </Table>

          <Row>
            {/* <b>
                    <Label>Tomadas</Label>
                  </b> */}
            <Col>
              <h4>Distancia margem esquerda</h4>
              <p>{tomadaMargemEsquerda}</p>

              <h4>Distancia margem chão esquerda</h4>
              <p>{tomadaMargemChaoEsquerda}</p>

              <h4>Distancia margem direita</h4>
              <p>{tomadaMargemDireta}</p>

              <h4>Distancia de chão margem direita</h4>
              <p>{tomadaMargemChaoDireita}</p>

              <h4>Distancia do chão</h4>
              <p>{tomadaDistanciaDoChao}</p>

              <h4>Na estrutura</h4>
              <p>{tomadaNaEstrutura}</p>
            </Col>

            <Col>
              {/* <b>
                      <Label>Interruptores</Label>
                    </b> */}

              <h4>Intermediario</h4>
              <p>{intermediario}</p>

              <h4>Bolinha</h4>
              <p>{bolinha}</p>

              <h4>Mesma distancia de Tomada</h4>
              <p>{mesmaDistanciaDeTomada}</p>

              <h4>Entre Vãos Laterais</h4>
              <p>{entreVaoLateral}</p>

              <h4>Na estrutura</h4>
              <p>{naEstrutura}</p>
            </Col>

            <Col>
              <h4>Altura Lado Direiro</h4>
              <p>{dimensaoAlturaDireto}</p>

              <h4>Largura cima</h4>
              <p>{dimensaoLarguraCima}</p>

              <h4>Altura lado esquerdo</h4>
              <p>{dimensaoAlturaEsquerdo}</p>

              <h4>Largura embaixo</h4>
              <p>{dimensaoLarguraEmbaixo}</p>

              <h4>Profundidade</h4>
              <p>{dimensaoProfundidade}</p>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={closeModal}>
            Fechar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
