import React, { useState, useEffect } from "react";
import { Container, Row, Col, Label, Table } from "reactstrap";

const logo = require("../assets/img/brand/logo.png");

export default function Impressao(props) {
  const [dataPedido, setDataPedido] = useState("");

  useEffect(async () => {
    setDataPedido(props.location.state.data);
    setNomeCliente(dataPedido["nome_cliente"]);
    setEnderecoCliente(dataPedido["endereco_de_entrega"]);
    setCpfCliente(dataPedido["cpfcnpj"]);
    setTipoDeParede(dataPedido["tipo_de_parede"]);
    setTipoDeIntalacao(dataPedido["tipo_de_instalacao"]);
    setTipoDeCabeceira(dataPedido["tipo_de_cabeceira"]);
    setTipoDeTachas(dataPedido["tipo_de_tachas"]);
    setAbasLaterais(dataPedido["abas_laterais"]);
    setEntreVaos(dataPedido["entre_vaos"]);
    setTipoDeRodape(dataPedido["tipo_de_rodape"]);
    setOpcaoEscada(dataPedido["escada"]);
    setTamanhoEscada(dataPedido["tamanho_escada"]);
    setOpcaoImpermeabilizacao(dataPedido["impermeabilizacao"]);
    setDimensaoAlturaDireto(dataPedido["dimensao_altura_direto"]);
    setDimensaoLarguraCima(dataPedido["dimensao_largura_cima"]);
    setDimensaoAlturaEsquerdo(dataPedido["dimensao_largura_lado_esquerdo"]);
    setDimensaoLarguraEmbaixo(dataPedido["dimensao_largura_embaixo"]);
    setDimensaoProfundidade(dataPedido["dimensao_profundidade"]);
    setTomadaMargemEsquerda(dataPedido["tomada_margem_esqueda"]);
    setTomadaMargemChaoEsquerda(dataPedido["tomada_margem_chao_esquerda"]);
    setTomadaMargemDireta(dataPedido["tomada_margem_direita"]);
    setTomadaMargemChaoDireta(dataPedido["tomada_magem_chao_direira"]);
    setTomadaDistanciaDoChao(dataPedido["tomada_distancia_do_chao"]);
    setTomadaNaEstrutura(dataPedido["tomada_na_estrutura"]);
    setIntermediario(dataPedido["intermediario"]);
    setBolinha(dataPedido["bolinha"]);
    setMesmaDistanciaDeTomada(dataPedido["mesma_distancia_de_tomada"]);
    setEntreVaoLateral(dataPedido["entre_vao_lateral"]);
    setNaEstrutura(dataPedido["na_estrutura"]);
    setTipoPerfil(dataPedido["tipo_de_perfil"]);
    setEspecDeCabeceira(dataPedido["espec_de_cabeceira"]);
    setFitaLed(dataPedido["fita_led"]);
    setProjeto(dataPedido["tem_projeto"]);
    setOpcaoCabeceiraL(dataPedido["cabeceiraL"]);
    setMedidaDeCabeceira(dataPedido["medida_de_cabeceira"]);
    setMedidaLateral(dataPedido["medida_lateral"]);
  }, [dataPedido["id"]]);

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

  return (
    <>
      <Container style={{ marginBottom: "15px" }}>
        <img
          style={{ width: "15%", height: "15%" }}
          src={require("../assets/img/brand/logo.png").default}
        />
      </Container>
      <Container>
        <Row>
          <Col>
            <h4>Nome do Cliente</h4>
            <p>{nomeCliente}</p>
          </Col>

          <Col>
            <h4>Cpf ou CNPJ do Cliente</h4>
            <p>{cpfCliente}</p>
          </Col>
        </Row>

        <Row>
          <Col lg="4">
            <h4>Endereço de Entrega</h4>
            <p>{enderecoCliente}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4>Tipo Parede</h4>
            <p>{tipoDeParede}</p>

            <h4>Tipo Cabeceira</h4>
            <p>{tipoDeCabeceira}</p>

            <h4>Tachas</h4>
            <p>{tipoDeTachas}</p>
          </Col>

          <Col>
            <h4>Abas Laterais</h4>
            <p>{abasLaterais}</p>

            <h4>Entre Vãos</h4>
            <p>{entreVaos}</p>

            <h4>Rodapé</h4>
            <p>{tipoDeRodape}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4>Led</h4>
            <p>{fitaLed}</p>

            <h4>Perfil</h4>
            <p>{tipoPerfil}</p>

            <h4>Especificação Cabeceira</h4>
            <p>{especDeCabeceira}</p>
          </Col>

          <Col>
            <h4>Tera Projeto?</h4>
            <p>{projeto}</p>

            <h4>Instalação</h4>
            <p>{tipoDeIntalacao}</p>

            <h4>Impermeabilizacao</h4>
            <p>{opcaoImpermeabilizacao}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4>Tera Cabeceira em L?</h4>
            <p>{opcaoCabeceiraL}</p>

            <h4>Medida Cabeceira</h4>
            <p>{medidaDeCabeceira}</p>

            <h4>Medida Lateral</h4>
            <p>{medidaLateral}</p>
          </Col>

          <Col>
            <h4>Escada</h4>
            <p>{opcaoEscada}</p>

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
      </Container>
    </>
  );
}
