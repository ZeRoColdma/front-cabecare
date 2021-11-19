import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import api from "../service/api";
import Sidebar from "../components/Sidebar/Sidebar";
import routes from "../routes";
import AdminNavbar from "../components/Navbars/AdminNavbar.js";

// reactstrap components
import {
  Label,
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

const NovoPedido = (props) => {
  const history = useHistory();
  const mainContent = useRef(null);

  const [nomeCliente, setNomeCliente] = useState("");
  const [cpfcnpj, setCpfCnpj] = useState("");
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
  const [medidadDeCabeceira, setMedidadDeCabeceira] = useState("");
  const [medidaLateral, setMedidaLateral] = useState("");
  const [enderecoDeEntrega, setEnderecoDeEntrega] = useState("");

  async function handleNovoPedido(event) {
    event.preventDefault();
    const data = {
      endereco_de_entrega: enderecoDeEntrega,
      nome_cliente: nomeCliente,
      cpfcnpj: cpfcnpj,
      tem_projeto: projeto,
      tipo_de_instalacao: tipoDeIntalacao,
      tipo_de_parede: tipoDeParede,
      tipo_de_cabeceira: tipoDeCabeceira,
      tipo_de_tachas: tipoDeTachas,
      abas_laterais: abasLaterais,
      entre_vaos: entreVaos,
      tipo_de_rodape: tipoDeRodape,
      escada: opcaoEscada,
      tamanho_escada: tamanhoEscada,
      impermeabilizacao: opcaoImpermeabilizacao,
      dimensao_altura_direto: dimensaoAlturaDireto,
      dimensao_largura_lado_esquerdo: dimensaoAlturaEsquerdo,
      dimensao_largura_cima: dimensaoLarguraCima,
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
      cabeceiraL: opcaoCabeceiraL,
      medida_lateral: medidaLateral,
      medida_de_cabeceira: medidadDeCabeceira,
      status_pedido: "ORÇAMENTO",
    };

    try {
      if (nomeCliente === "") {
        alert("Preencha o Pedido");
      } else {
        const sendData = await api.post("/pedidos", data);
        history.push("/pedidos");
        return sendData;
      }
    } catch (error) {
      console.log(error);
    }
  }

  const EscadaT = (prop) => {
    return (
      <div>
        {(() => {
          if (prop === "Sim") {
            return (
              <div>
                <Label className="form-control-label" for="escada">
                  Tamanho da Escada
                </Label>
                <Input
                  type="text"
                  className="form-control-alternative"
                  style={{ padding: 5 }}
                  onChange={(event) => {
                    setTamanhoEscada(event.target.value);
                  }}
                />
              </div>
            );
          }
        })()}
      </div>
    );
  };

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
        <Container className="mt--6" fluid>
          <Row>
            <Col className="order-xl-1">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Novo Pedido</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        onClick={handleNovoPedido}
                        size="sm"
                      >
                        Criar
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Informações do Pedido
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="5">
                          <FormGroup>
                            <Label
                              className="form-control-label"
                              for="tipoparede"
                            >
                              Nome do Cliente
                            </Label>

                            <Input
                              className="form-control-alternative"
                              style={{ padding: 5 }}
                              name="cliente"
                              onChange={(event) => {
                                setNomeCliente(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="5">
                          <FormGroup>
                            <Label
                              className="form-control-label"
                              for="tipoparede"
                            >
                              Cpf ou Cnpj do Cliente
                            </Label>

                            <Input
                              className="form-control-alternative"
                              style={{ padding: 5 }}
                              name="cliente"
                              onChange={(event) => {
                                setCpfCnpj(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="9">
                          <FormGroup>
                            <Label
                              className="form-control-label"
                              for="tipoparede"
                            >
                              Endereço de Entrega
                            </Label>

                            <Input
                              className="form-control-alternative"
                              style={{ padding: 5 }}
                              name="cliente"
                              onChange={(event) => {
                                setEnderecoDeEntrega(event.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="3">
                          <FormGroup>
                            <Label
                              className="form-control-label"
                              for="tipoparede"
                            >
                              Tipo de Parede
                            </Label>
                            <Input
                              className="form-control-alternative"
                              type="select"
                              name="select"
                              id="tipoparede"
                              onChange={(event) => {
                                setTipoDeParede(event.target.value);
                              }}
                            >
                              <option></option>
                              <option>ALVENARIA</option>
                              <option>GESSO</option>
                              <option>MADEIRA</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="3">
                          <FormGroup>
                            <Label
                              className="form-control-label"
                              for="tipocabeceira"
                            >
                              Tipos de Cabeceira
                            </Label>
                            <Input
                              className="form-control-alternative"
                              type="select"
                              name="select"
                              id="tipocabeceira"
                              onChange={(event) => {
                                setTipoDeCabeceira(event.target.value);
                              }}
                            >
                              <option></option>
                              <option>TAMANHO PADRAO</option>
                              <option>TIPO PAINEL</option>
                              <option>SOB MEDIDA</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="3">
                          <FormGroup>
                            <Label className="form-control-label" for="tachas">
                              Tachas
                            </Label>
                            <Input
                              className="form-control-alternative"
                              type="select"
                              name="select"
                              id="tachas"
                              onChange={(event) => {
                                setTipoDeTachas(event.target.value);
                              }}
                            >
                              <option></option>
                              <option>DOURADA</option>
                              <option>FUME</option>
                              <option>PRATA</option>
                              <option>ROSE</option>
                              <option>PRETA</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="3">
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label
                                  className="form-control-label"
                                  for="abaslateraislabel"
                                >
                                  Abas Laterais
                                </Label>
                                <Input
                                  className="form-control-alternative"
                                  type="select"
                                  name="select"
                                  id="abaslateraioption"
                                  onChange={(event) => {
                                    setAbasLaterais(event.target.value);
                                  }}
                                >
                                  <option></option>
                                  <option>SIM</option>
                                  <option>NÃO</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg="3">
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label
                                  className="form-control-label"
                                  for="entrevao"
                                >
                                  Entre Vãos
                                </Label>
                                <Input
                                  className="form-control-alternative"
                                  type="select"
                                  name="select"
                                  id="entrevaoselect"
                                  onChange={(event) => {
                                    setEntreVaos(event.target.value);
                                  }}
                                >
                                  <option></option>
                                  <option>NÃO</option>
                                  <option>ENTRE VÃOS CHÃO E TETO</option>
                                  <option>ENTRE VAO TODOS OS CANTOS</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg="3">
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label
                                  className="form-control-label"
                                  for="rodape"
                                >
                                  Rodapé
                                </Label>
                                <Input
                                  className="form-control-alternative"
                                  type="select"
                                  name="select"
                                  onChange={(event) => {
                                    setTipoDeRodape(event.target.value);
                                  }}
                                >
                                  <option></option>
                                  <option>SEM RODAPÉ</option>
                                  <option>INSTALAR ACIMA RODAPÉ</option>
                                  <option>RODAPÉ LATERAL</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="3">
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label className="form-control-label" for="led">
                                  Led
                                </Label>
                                <Input
                                  className="form-control-alternative"
                                  type="select"
                                  name="select"
                                  onChange={(event) => {
                                    setFitaLed(event.target.value);
                                  }}
                                >
                                  <option></option>
                                  <option>3000K</option>
                                  <option>6000K</option>
                                  <option>SEM LED</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>

                        <Col lg="3">
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label
                                  className="form-control-label"
                                  for="perfil"
                                >
                                  Perfil
                                </Label>
                                <Input
                                  className="form-control-alternative"
                                  type="select"
                                  name="select"
                                  id="perfil"
                                  onChange={(event) => {
                                    setTipoPerfil(event.target.value);
                                  }}
                                >
                                  <option></option>
                                  <option>DOURADO</option>
                                  <option>PRATA</option>
                                  <option>ROSE</option>
                                  <option>PRETO</option>
                                  <option>LOSANGO COM TACHA</option>
                                  <option>OUTRA COR</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>

                        <Col>
                          <Row>
                            <Col lg="6">
                              <Row>
                                <Col>
                                  <FormGroup>
                                    <Label
                                      className="form-control-label"
                                      for="cabeceira"
                                    >
                                      Especificação Cabeceira
                                    </Label>
                                    <Input
                                      className="form-control-alternative"
                                      type="select"
                                      name="select"
                                      id="cabeceira"
                                      onChange={(event) => {
                                        setEspecDeCabeceira(event.target.value);
                                      }}
                                    >
                                      <option></option>
                                      <option>DIANA COM DE BRUM</option>
                                      <option>DIANA COM TACHAS</option>
                                      <option>DIANA COM PERFIL</option>
                                      <option>DIANA BOTONE</option>
                                      <option>DIANA LISA</option>
                                      <option>DIANA CAPITONE</option>
                                      <option>LOSANGO COM PERFIL</option>
                                    </Input>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="3">
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label
                                  className="form-control-label"
                                  for="projeto"
                                >
                                  Tera Projeto?
                                </Label>
                                <Input
                                  className="form-control-alternative"
                                  type="select"
                                  name="select"
                                  onChange={(event) => {
                                    setProjeto(event.target.value);
                                  }}
                                >
                                  <option></option>
                                  <option>SIM</option>
                                  <option>NÃO</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>

                        <Col lg="3">
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label
                                  className="form-control-label"
                                  for="rodape"
                                >
                                  Instalação
                                </Label>
                                <Input
                                  className="form-control-alternative"
                                  type="select"
                                  name="select"
                                  id="instalacao"
                                  onChange={(event) => {
                                    setTipoDeIntalacao(event.target.value);
                                  }}
                                >
                                  <option></option>
                                  <option>KIT FRAME</option>
                                  <option>MÃO AMIGA</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>

                        <Col lg="3">
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label
                                  className="form-control-label"
                                  for="impermeabilizacao"
                                >
                                  Impermeabilizacao
                                </Label>
                                <Input
                                  className="form-control-alternative"
                                  type="select"
                                  name="select"
                                  id="impermeabilizacao"
                                  onChange={(event) => {
                                    setOpcaoImpermeabilizacao(
                                      event.target.value,
                                    );
                                  }}
                                >
                                  <option></option>
                                  <option>SIM</option>
                                  <option>NÃO</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="3">
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label
                                  className="form-control-label"
                                  for="projeto"
                                >
                                  Tera Cabeceira em L?
                                </Label>
                                <Input
                                  className="form-control-alternative"
                                  type="select"
                                  name="select"
                                  id="cabeceiraL"
                                  onChange={(event) => {
                                    setOpcaoCabeceiraL(event.target.value);
                                  }}
                                >
                                  <option></option>
                                  <option>SIM</option>
                                  <option>NÃO</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>

                        <Col lg="3">
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label
                                  className="form-control-label"
                                  for="rodape"
                                >
                                  Medida Cabeceira
                                </Label>
                                <Input
                                  className="form-control-alternative"
                                  name="select"
                                  id="cabeceira_em_l"
                                  onChange={(event) => {
                                    setMedidadDeCabeceira(event.target.value);
                                  }}
                                ></Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>

                        <Col lg="3">
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label
                                  className="form-control-label"
                                  for="impermeabilizacao"
                                >
                                  Medida Lateral
                                </Label>
                                <Input
                                  className="form-control-alternative"
                                  name="select"
                                  id="impermeabilizacao"
                                  onChange={(event) => {
                                    setMedidaLateral(event.target.value);
                                  }}
                                ></Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="2">
                          <FormGroup>
                            <Label className="form-control-label" for="escada">
                              Escada
                            </Label>
                            <Input
                              className="form-control-alternative"
                              type="select"
                              name="select"
                              id="escada"
                              onChange={(event) => {
                                setOpcaoEscada(event.target.value);
                              }}
                            >
                              <option></option>
                              <option>Sim</option>
                              <option>Não</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>{EscadaT(opcaoEscada)}</FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="3">
                          <FormGroup>
                            <Label className="form-control-label">
                              Dimensões
                            </Label>
                            <Input
                              className="form-control-alternative"
                              id="altura-lado-direito"
                              placeholder="Altura lado direito"
                              onChange={(event) => {
                                setDimensaoAlturaDireto(event.target.value);
                              }}
                            />
                          </FormGroup>

                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              id="largura-em-cima"
                              placeholder="Largura cima"
                              onChange={(event) => {
                                setDimensaoLarguraCima(event.target.value);
                              }}
                            />
                          </FormGroup>

                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              id="altura-lado-esquerdo"
                              placeholder="Altura lado esquerdo"
                              onChange={(event) => {
                                setDimensaoAlturaEsquerdo(event.target.value);
                              }}
                            />
                          </FormGroup>

                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              id="largura-embaixo"
                              placeholder="Largura embaixo"
                              onChange={(event) => {
                                setDimensaoLarguraEmbaixo(event.target.value);
                              }}
                            />
                          </FormGroup>

                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              id="profundidade"
                              placeholder="Profundidade"
                              onChange={(event) => {
                                setDimensaoProfundidade(event.target.value);
                              }}
                            >
                              <option></option>
                              <option>PADRÃO</option>
                              <option>OUTRA</option>
                            </Input>
                          </FormGroup>
                        </Col>

                        <Col>
                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <Col>
                                  <Label
                                    className="form-control-label"
                                    for="tomada"
                                  >
                                    Tomadas
                                  </Label>

                                  <FormGroup>
                                    <Input
                                      className="form-control-alternative"
                                      placeholder="Distancia margem esquerda"
                                      onChange={(event) => {
                                        setTomadaMargemEsquerda(
                                          event.target.value,
                                        );
                                      }}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup>
                                    <Input
                                      className="form-control-alternative"
                                      id={"distancia-chao-margem-esquerda"}
                                      placeholder="Distancia do chão margem esquerda"
                                      name="distancia_margem_esquerda_chao"
                                      onChange={(event) => {
                                        setTomadaMargemChaoEsquerda(
                                          event.target.value,
                                        );
                                      }}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup>
                                    <Input
                                      className="form-control-alternative"
                                      id={"distancia-margem-direita"}
                                      placeholder="Distancia margem direita"
                                      name="distancia_margem_direita"
                                      onChange={(event) => {
                                        setTomadaMargemDireta(
                                          event.target.value,
                                        );
                                      }}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup>
                                    <Input
                                      className="form-control-alternative"
                                      id={"distancia-chao-margem-direita"}
                                      placeholder="Distancia do chão margem direita"
                                      name="distancia_margem_direita_chao"
                                      onChange={(event) => {
                                        setTomadaMargemChaoDireta(
                                          event.target.value,
                                        );
                                      }}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup>
                                    <Input
                                      className="form-control-alternative"
                                      id="estrutura"
                                      placeholder="Na estrutura"
                                      name="estrutura"
                                      onChange={(event) => {
                                        setTomadaNaEstrutura(
                                          event.target.value,
                                        );
                                      }}
                                    />
                                  </FormGroup>
                                </Col>

                                <Col>
                                  <FormGroup>
                                    <Input
                                      className="form-control-alternative"
                                      id="distancia_chao"
                                      placeholder="Distancia do chao"
                                      name="distancia_chao"
                                      onChange={(event) => {
                                        setTomadaDistanciaDoChao(
                                          event.target.value,
                                        );
                                      }}
                                    />
                                  </FormGroup>
                                </Col>
                              </FormGroup>
                            </Col>

                            <Col lg="4">
                              <FormGroup>
                                <Col>
                                  <Label
                                    className="form-control-label"
                                    for="tipoparede"
                                  >
                                    Interruptores
                                  </Label>

                                  <FormGroup>
                                    <Input
                                      className="form-control-alternative"
                                      id={"intermediario"}
                                      placeholder="Intermediario"
                                      name="intermediario"
                                      onChange={(event) => {
                                        setIntermediario(event.target.value);
                                      }}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup>
                                    <Input
                                      className="form-control-alternative"
                                      id={"bolinha"}
                                      placeholder="Bolinha"
                                      name="bolinha"
                                      onChange={(event) => {
                                        setBolinha(event.target.value);
                                      }}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup>
                                    <Input
                                      className="form-control-alternative"
                                      id={"mesmas_distancias_de_tomada"}
                                      placeholder="Mesmas Distancias de Tomada"
                                      name="mesmas_distancias_de_tomada"
                                      onChange={(event) => {
                                        setMesmaDistanciaDeTomada(
                                          event.target.value,
                                        );
                                      }}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup>
                                    <Input
                                      className="form-control-alternative"
                                      id={"entre_vaos_laterias"}
                                      placeholder="Entre Vaos Laterais"
                                      name="entre_vaos_laterias"
                                      onChange={(event) => {
                                        setEntreVaoLateral(event.target.value);
                                      }}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup>
                                    <Input
                                      className="form-control-alternative"
                                      id={"estrutura"}
                                      placeholder="Na estrutura"
                                      name="estrutura"
                                      onChange={(event) => {
                                        setNaEstrutura(event.target.value);
                                      }}
                                    />
                                  </FormGroup>
                                </Col>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
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

export default NovoPedido;
