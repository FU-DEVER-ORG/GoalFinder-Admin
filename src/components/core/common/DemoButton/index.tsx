import { ButtonProps } from 'antd';
import React from 'react'
import * as S from "./demo.styles"

export interface ButtonPropsInterface extends ButtonProps {
    $color?: string;
    $fontSize?: string;
    $fontWeight?: string;
    $backgroundColor?: string;
    $borderColor?: string;
    $padding?: string;
    $margin?: string;
    $isOutline?: boolean;
    $width?: string;
    $iconBefore?: string;
    $borderRadius?: string;
    $isCancel?: boolean;
    children: React.ReactNode;
  }

export default function Button({children, ...props}:ButtonPropsInterface) {
    return (
        <S.ButtonCommonDemo {...props}>{children}</S.ButtonCommonDemo>
    )
}
