"use client";
import { ButtonCommonDemo } from "@/components/common/DemoButton/demo.styles";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

export default function Home() {
  const route = useRouter();
  return (
    <center>
      <h3>USER HOME PAGE</h3>
      <StyledTest>
        <ButtonCommonDemo
          $color="blue"
          onClick={() => route.push("/demopage")}
        >
          DEMO PAGE
        </ButtonCommonDemo>
      </StyledTest>
    </center>
  );
}

export const StyledTest = styled.div`
  background-color: red;
`;
