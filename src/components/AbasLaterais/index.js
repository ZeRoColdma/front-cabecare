import React, { useState } from "react";

// reactstrap components
import { Label, Col, Button, FormGroup, Input, Row } from "reactstrap";
// core components

const AbasLaterais = (props) => {
  return (
    <>
      <div>
        <Row>
          <Col>
            <FormGroup>
              <Label className="form-control-label" for="abaslateraislabel">
                Abas Laterais
              </Label>
              <Input
                className="form-control-alternative"
                type="select"
                name="select"
                id="abaslateraioption"
              >
                <option></option>
                <option>Sim</option>
                <option>Não</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AbasLaterais;
