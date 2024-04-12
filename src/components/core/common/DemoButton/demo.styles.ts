import styled, { css } from 'styled-components';

import { Button } from 'antd';

import { ButtonPropsInterface } from '.';

export const ButtonCommonDemo = styled(Button)<ButtonPropsInterface>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props?.$color || props?.theme?.colors.primary} !important;
    background-color: ${(props) => props.$backgroundColor || 'transparent' } !important;
    font-weight: ${(props) => props?.$fontWeight || props.theme.fontWeight.bold};
`;