import React, { useState, useEffect } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";

import api from "../../service/api";

export default function ModalEditComponent(props) {
  const [id, setId] = useState(false);

  const [nomeCliente, setNomeCliente] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");

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
  const [enderecoDeEntrega, setEnderecoDeEntrega] = useState("");

  const [modal, setModal] = useState(false);

  async function openModal() {
    const orderEdit = await api.get(`/pedidos/${props.idOrder}`);
    // console.log(orderEdit);

    setId(props.idOrder);
    setNomeCliente(orderEdit.data["nome_cliente"]);
    setCpfCliente(orderEdit.data["cpfcnpj"]);
    setEnderecoDeEntrega(orderEdit.data["endereco_de_entrega"]);
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

  async function handleSubmitEdit(event) {
    event.preventDefault();
    try {
      let data = {
        tipo_de_parede: tipoDeParede,
        tipo_de_instalacao: tipoDeIntalacao,
        tipo_de_cabeceira: tipoDeCabeceira,
        tipo_de_tachas: tipoDeTachas,
        abas_laterais: abasLaterais,
        entre_vaos: entreVaos,
        tipo_de_rodape: tipoDeRodape,
        escada: opcaoEscada,
        tamanho_escada: tamanhoEscada,
        impermeabilizacao: opcaoImpermeabilizacao,

        dimensao_altura_direto: dimensaoAlturaDireto,
        dimensao_largura_cima: dimensaoLarguraCima,
        dimensao_largura_lado_esquerdo: dimensaoAlturaEsquerdo,
        dimensao_largura_embaixo: dimensaoLarguraEmbaixo,
        dimensao_profundidade: dimensaoProfundidade,

        tomada_margem_esqueda: tomadaMargemEsquerda,
        tomada_margem_chao_esquerda: tomadaMargemChaoEsquerda,
        tomada_margem_direita: tomadaMargemDireta,
        tomada_magem_chao_direira: tomadaMargemChaoDireita,
        tomada_distancia_do_chao: tomadaDistanciaDoChao,
        tomada_na_estrutura: tomadaNaEstrutura,

        intermediario: intermediario,
        bolinha: bolinha,
        mesma_distancia_de_tomada: mesmaDistanciaDeTomada,
        entre_vao_lateral: entreVaoLateral,
        na_estrutura: naEstrutura,
        tipo_de_perfil: tipoPerfil,
        espec_de_cabeceira: especDeCabeceira,
        fita_led: fitaLed,
        tem_projeto: projeto,
        cabeceiraL: opcaoCabeceiraL,
        medida_de_cabeceira: medidaDeCabeceira,
        medida_lateral: medidaLateral,
      };
      await api.put(`/pedidos/${id}`, data);
      setModal(false);
    } catch (error) {
      console.log(error);
      console.log("Erro ao editar");
    }
  }

  return (
    <>
      <Button color="warning" onClick={openModal}>
        Editar Pedido
      </Button>
      <Modal isOpen={modal} toggle={openModal} size="xl">
        <ModalHeader toggle={closeModal}>Pedido Nº {id}</ModalHeader>
        <Container fluid>
          <ModalBody>
            <Form>
              <FormGroup controlId="formBasicEmail">
                <Row>
                  <Col lg="4">
                    <Label>Nome do Cliente</Label>
                    <Input
                      value={nomeCliente}
                      onChange={(event) => {
                        setNomeCliente(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Cpf ou Cnpj do Cliente</Label>
                    <Input
                      value={cpfCliente}
                      onChange={(event) => {
                        setCpfCliente(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Endereço De Entrega</Label>
                    <Input
                      value={enderecoDeEntrega}
                      onChange={(event) => {
                        setEnderecoDeEntrega(event.target.value);
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="4">
                    <Label>Tipo Parede</Label>
                    <Input
                      value={tipoDeParede}
                      onChange={(event) => {
                        setTipoDeParede(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Tipo Cabeceira</Label>
                    <Input
                      value={tipoDeCabeceira}
                      onChange={(event) => {
                        setTipoDeCabeceira(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Tachas</Label>
                    <Input
                      value={tipoDeTachas}
                      onChange={(event) => {
                        setTipoDeTachas(event.target.value);
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="4">
                    <Label>Abas Laterais</Label>
                    <Input
                      value={abasLaterais}
                      onChange={(event) => {
                        setAbasLaterais(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Entre Vãos</Label>
                    <Input
                      value={entreVaos}
                      onChange={(event) => {
                        setEntreVaos(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Rodapé</Label>
                    <Input
                      value={tipoDeRodape}
                      onChange={(event) => {
                        setTipoDeRodape(event.target.value);
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="4">
                    <Label>Led</Label>
                    <Input
                      value={fitaLed}
                      onChange={(event) => {
                        setFitaLed(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Perfil</Label>
                    <Input
                      value={tipoPerfil}
                      onChange={(event) => {
                        setTipoPerfil(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Especificação Cabeceira</Label>
                    <Input
                      value={especDeCabeceira}
                      onChange={(event) => {
                        setEspecDeCabeceira(event.target.value);
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="4">
                    <Label>Tera Projeto?</Label>
                    <Input
                      value={projeto}
                      onChange={(event) => {
                        setProjeto(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Instalação</Label>
                    <Input
                      value={tipoDeIntalacao}
                      onChange={(event) => {
                        setTipoDeIntalacao(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Impermeabilizacao</Label>
                    <Input
                      value={opcaoImpermeabilizacao}
                      onChange={(event) => {
                        setOpcaoImpermeabilizacao(event.target.value);
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="4">
                    <Label>Tera Cabeceira em L?</Label>
                    <Input
                      value={opcaoCabeceiraL}
                      onChange={(event) => {
                        setOpcaoCabeceiraL(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Medida Cabeceira</Label>
                    <Input
                      value={medidaDeCabeceira}
                      onChange={(event) => {
                        setMedidaDeCabeceira(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Medida Lateral</Label>
                    <Input
                      value={medidaLateral}
                      onChange={(event) => {
                        setMedidaLateral(event.target.value);
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="4">
                    <Label>Escada</Label>
                    <Input
                      value={opcaoEscada}
                      onChange={(event) => {
                        setOpcaoEscada(event.target.value);
                      }}
                    />
                  </Col>

                  <Col lg="4">
                    <Label>Altura Escada</Label>
                    <Input
                      value={tamanhoEscada}
                      onChange={(event) => {
                        setTamanhoEscada(event.target.value);
                      }}
                    />
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
                    <Label>Distancia margem esquerda</Label>
                    <Input
                      value={tomadaMargemEsquerda}
                      onChange={(event) => {
                        setTomadaMargemEsquerda(event.target.value);
                      }}
                    />

                    <Label>Distancia margem chão esquerda</Label>
                    <Input
                      value={tomadaMargemChaoEsquerda}
                      onChange={(event) => {
                        setTomadaMargemChaoEsquerda(event.target.value);
                      }}
                    />

                    <Label>Distancia margem direita</Label>
                    <Input
                      value={tomadaMargemDireta}
                      onChange={(event) => {
                        setTomadaMargemDireta(event.target.value);
                      }}
                    />

                    <Label>Distancia de chão margem direita</Label>
                    <Input
                      value={tomadaMargemChaoDireita}
                      onChange={(event) => {
                        setTomadaMargemChaoDireta(event.target.value);
                      }}
                    />

                    <Label>Distancia do chão</Label>
                    <Input
                      value={tomadaDistanciaDoChao}
                      onChange={(event) => {
                        setTomadaDistanciaDoChao(event.target.value);
                      }}
                    />

                    <Label>Na estrutura</Label>
                    <Input
                      value={tomadaNaEstrutura}
                      onChange={(event) => {
                        setTomadaNaEstrutura(event.target.value);
                      }}
                    />
                  </Col>

                  <Col>
                    {/* <b>
                      <Label>Interruptores</Label>
                    </b> */}

                    <Label>Intermediario</Label>
                    <Input
                      value={intermediario}
                      onChange={(event) => {
                        setIntermediario(event.target.value);
                      }}
                    />

                    <Label>Bolinha</Label>
                    <Input
                      value={bolinha}
                      onChange={(event) => {
                        setBolinha(event.target.value);
                      }}
                    />

                    <Label>Mesma distancia de Tomada</Label>
                    <Input
                      value={mesmaDistanciaDeTomada}
                      onChange={(event) => {
                        setMesmaDistanciaDeTomada(event.target.value);
                      }}
                    />

                    <Label>Entre Vãos Laterais</Label>
                    <Input
                      value={entreVaoLateral}
                      onChange={(event) => {
                        setEntreVaoLateral(event.target.value);
                      }}
                    />

                    <Label>Na estrutura</Label>
                    <Input
                      value={naEstrutura}
                      onChange={(event) => {
                        setNaEstrutura(event.target.value);
                      }}
                    />
                  </Col>

                  <Col>
                    {/* <b>
                      <Label>Dimensões</Label>
                    </b> */}

                    <Label>Altura Lado Direiro</Label>
                    <Input
                      value={dimensaoAlturaDireto}
                      onChange={(event) => {
                        setDimensaoAlturaDireto(event.target.value);
                      }}
                    />

                    <Label>Largura cima</Label>
                    <Input
                      value={dimensaoLarguraCima}
                      onChange={(event) => {
                        setDimensaoLarguraCima(event.target.value);
                      }}
                    />

                    <Label>Altura lado esquerdo</Label>
                    <Input
                      value={dimensaoAlturaEsquerdo}
                      onChange={(event) => {
                        setDimensaoAlturaEsquerdo(event.target.value);
                      }}
                    />

                    <Label>Largura embaixo</Label>
                    <Input
                      value={dimensaoLarguraEmbaixo}
                      onChange={(event) => {
                        setDimensaoLarguraEmbaixo(event.target.value);
                      }}
                    />

                    <Label>Profundidade</Label>
                    <Input
                      value={dimensaoProfundidade}
                      onChange={(event) => {
                        setDimensaoProfundidade(event.target.value);
                      }}
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </ModalBody>
        </Container>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmitEdit}>
            Salvar Alterações
          </Button>{" "}
          <Button color="secondary" onClick={closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
