"use client"
import Button from "@/components/core/common/DemoButton";
import InforBox from "@/components/core/common/InforBoxDemo";
import useModal from "@/hooks/useModal";
import { Modal } from "antd";
import styled from "styled-components";
import schema from "./demopage.schema";

export default function DemoPage() {
  const modalState = useModal();
  return (
    <center>
      <h4>THIS IS DEMO PAGE</h4>
      <StyledTest>
        demo api call:
        <InforBox schema={schema}></InforBox>
        <Button onClick={() => modalState.openModal()}>Test modal</Button>
      </StyledTest>
      <Modal open={modalState.visible} onCancel={modalState.closeModal} title="Demo modal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae voluptates iure, quia rem voluptate, deleniti commodi doloribus maiores earum culpa veritatis. Doloribus beatae placeat ipsa nisi a quis voluptatibus.
      </Modal>
    </center>
  );
}

export const StyledTest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
