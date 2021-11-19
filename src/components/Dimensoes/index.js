import React, { useState } from "react";

// reactstrap components
import { Label, Col, Button, FormGroup, Input, Row } from "reactstrap";
// core components

const Dimensoes = (props) => {
  return (
    <>
      <div className="pl-lg-1">
        <Row>
          <FormGroup>
            <Label className="form-control-label">Dimensões</Label>
            <Input
              className="form-control-alternative"
              id="altura-lado-direito"
              placeholder="Altura lado direito"
            />
          </FormGroup>

          <FormGroup>
            <Input
              className="form-control-alternative"
              id="largura-em-cima"
              placeholder="Largura cima"
            />
          </FormGroup>

          <FormGroup>
            <Input
              className="form-control-alternative"
              id="altura-lado-esquerdo"
              placeholder="Altura lado esquerdo"
            />
          </FormGroup>

          <FormGroup>
            <Input
              className="form-control-alternative"
              id="largura-embaixo"
              placeholder="Largura embaixo"
            />
          </FormGroup>

          <FormGroup>
            <Input
              className="form-control-alternative"
              type="select"
              name="select"
              id="profundidade"
            >
              <option></option>
              <option>Padrão</option>
              <option>Outra</option>
            </Input>
          </FormGroup>
        </Row>
      </div>
    </>
  );
};

export default Dimensoes;
