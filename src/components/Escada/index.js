import React, { useState } from "react";

// reactstrap components
import { Label, Col, Button, FormGroup, Input, Row } from "reactstrap";
// core components

const Escada = (props) => {
  const [escada, setEscada] = useState();
  const EscadaT = (prop) => {
    return (
      <div>
        {(() => {
          if (prop === "true") {
            return (
              <div>
                <Label className="form-control-label" for="escada">
                  Tamanho da Escada
                </Label>
                <Input
                  className="form-control-alternative"
                  style={{ padding: 5 }}
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
      <div className="pl-lg-1">
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
                  setEscada(event.target.value);
                }}
              >
                <option></option>
                <option>Sim</option>
                <option>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>{EscadaT(escada)}</FormGroup>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Escada;
