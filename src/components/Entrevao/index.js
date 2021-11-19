import React, { useState } from "react";

// reactstrap components
import { Label, Col, Button, FormGroup, Input, Row } from "reactstrap";
// core components



const Entrevao = (props) => {

  return (
    <>
      <div>
        <Row>
          <Col>
            <FormGroup>
              <Label className="form-control-label" for="entrevao">
                Entre Vãos
              </Label>
              <Input
                className="form-control-alternative"
                type="select"
                name="select"
                id="entrevaoselect"
              >
                <option></option>
                <option value="false">Não</option>
                <option value="chao-teto">Entre vãos chão e teto</option>
                <option value="todos-os-cantos">Entre vão todos os cantos</option>

              </Input>
            </FormGroup>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Entrevao;
