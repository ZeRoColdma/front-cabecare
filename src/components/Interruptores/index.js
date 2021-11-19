import React, { useState } from "react";

// reactstrap components
import { Label, Col, Button, FormGroup, Input, Row } from "reactstrap";
// core components

const Interruptores = (props) => {
  const [inputList, setInputList] = useState([
    {
      intermediario: "",
      bolinha: "",
      mesmas_distancias_de_tomada: "",
      entre_vaos_laterias: "",
      estrutura: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        intermediario: "",
        bolinha: "",
        mesmas_distancias_de_tomada: "",
        entre_vaos_laterias: "",
        estrutura: "",
      },
    ]);
  };

  return (
    <>
      <div>
        <Row>
          <Col lg="4">
            <FormGroup>
              {inputList.map((x, i) => {
                return (
                  <div className="App">
                    <Col>
                      <Label className="form-control-label" for="tipoparede">
                        Interruptores {i + 1}
                      </Label>

                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id={"intermediario" + i}
                          placeholder="Intermediario"
                          value={x.intermediario}
                          name="intermediario"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id={"bolinha" + i}
                          placeholder="Bolinha"
                          value={x.bolinha}
                          name="bolinha"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id={"mesmas_distancias_de_tomada" + i}
                          placeholder="Mesmas Distancias de Tomada"
                          value={x.mesmas_distancias_de_tomada}
                          name="mesmas_distancias_de_tomada"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id={"entre_vaos_laterias" + i}
                          placeholder="Entre Vaos Laterais"
                          value={x.entre_vaos_laterias}
                          name="entre_vaos_laterias"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id={"estrutura" + i}
                          placeholder="Na estrutura"
                          value={x.estrutura}
                          name="estrutura"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </FormGroup>
                      {inputList.length !== 1 && (
                        <Button
                          color="danger"
                          size="sm"
                          onClick={() => handleRemoveClick(i)}
                        >
                          Remove
                        </Button>
                      )}
                      {inputList.length - 1 === i && (
                        <Button
                          color="success"
                          size="sm"
                          onClick={handleAddClick}
                        >
                          Add
                        </Button>
                      )}
                    </Col>
                    <br></br>
                  </div>
                );
              })}
            </FormGroup>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Interruptores;
