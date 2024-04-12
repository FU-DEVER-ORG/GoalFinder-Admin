import styled from "styled-components";
import { themes } from "@/styles/themes";

export const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
export const InputWrapper = styled.div`
    width: 400px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    gap: 12px;
    border-radius: 12px;
    background: ${(props) => props.theme.colors.background2};
    box-shadow: ${(props) => props.theme.shadow.largeShadow};
`;