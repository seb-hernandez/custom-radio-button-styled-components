import React, { useState } from "react";
import {Input, Label, Checkmark, Container, AttributeContainer} from "./AppStyled";

export default function App() {

  const [value, setValue] = useState("outside");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    console.log(value);

  return (
      <div onChange={handleChange}>
          <Container>
              <AttributeContainer>
                  <Label htmlFor="outside">Outside the App
                      <Input type="radio" name="radio" id="outside" value="outside" defaultChecked={value === "outside"} />
                      <Checkmark />
                  </Label>
              </AttributeContainer>

              <AttributeContainer>
                  <Label htmlFor="inside">Inside the App
                      <Input type="radio" name="radio" id="inside" value="inside" defaultChecked={value === "inside"} />
                      <Checkmark />
                  </Label>
              </AttributeContainer>
          </Container>
      </div>
  );
}