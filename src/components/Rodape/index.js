import React, { useState } from "react";

// reactstrap components
import { Label, Col, Button, FormGroup, Input, Row } from "reactstrap";
// core components



const Rodape = (props) => {

  return (
    <>
      <div>
        <Row>
          <Col>

            <FormGroup>
              <Label className="form-control-label" for="rodape">
                Rodapé
              </Label>
              <Input className="form-control-alternative" type="select" name="select" id="rodape" >
                <option></option>
                <option value="false">Não</option>
                <option>Instalar Acima Rodapé</option>
                <option>Rodapé Lateral</option>

              </Input>
            </FormGroup>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Rodape;
