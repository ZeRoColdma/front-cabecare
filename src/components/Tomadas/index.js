import React, { useState } from "react";

// reactstrap components
import { Label, Col, Button, FormGroup, Input, Row } from "reactstrap";
// core components

const Tomadas = (props) => {
  const [inputList, setInputList] = useState([
    {
      distancia_margem_esquerda: "",
      distancia_margem_esquerda_chao: "",
      distancia_margem_direita: "",
      distancia_margem_direita_chao: "",
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
        distancia_margem_esquerda: "",
        distancia_margem_esquerda_chao: "",
        distancia_margem_direita: "",
        distancia_margem_direita_chao: "",
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
                        Tomada {i + 1}
                      </Label>

                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id={"distancia-margem-esquerda" + i}
                          placeholder="Distancia margem esquerda"
                          value={x.distancia_margem_esquerda}
                          name="distancia_margem_esquerda"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id={"distancia-chao-margem-esquerda" + i}
                          placeholder="Distancia do chão margem esquerda"
                          value={x.distancia_margem_esquerda_chao}
                          name="distancia_margem_esquerda_chao"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id={"distancia-margem-direita" + i}
                          placeholder="Distancia margem direita"
                          value={x.distancia_margem_direita}
                          name="distancia_margem_direita"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id={"distancia-chao-margem-direita" + i}
                          placeholder="Distancia do chão margem direita"
                          value={x.distancia_margem_direita_chao}
                          name="distancia_margem_direita_chao"
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

export default Tomadas;
