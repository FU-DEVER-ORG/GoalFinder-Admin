import InforBox from "@/components/common/InforBoxDemo";
import React from "react";
import schema from "./demopage.schema";
import styled from "styled-components";

export default function DemoPage() {
  return (
    <center>
      <h4>THIS IS DEMO PAGE</h4>
      <StyledTest>
        demo api call:
        <InforBox schema={schema}></InforBox>
      </StyledTest>
    </center>
  );
}

export const StyledTest = styled.div`
  background-color: red;
`;
