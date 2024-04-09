import { css } from 'styled-components';

const checkbox = css`
  .ant-checkbox-wrapper {
    color: ${({ theme }) => theme.colors.newtral};
    line-height: 1.35;
  }

  .ant-checkbox-wrapper .ant-checkbox {
    width: 18px;
    height: 18px;
  }

  .ant-checkbox-wrapper .ant-checkbox .ant-checkbox-inner {
    border: 2px solid ${(props) => props?.theme?.colors?.borderCheckbox};
    width: 18px;
    height: 18px;
    border-radius: 5px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.newtral};
    background-color: transparent;
  }

  .ant-checkbox-wrapper.ant-checkbox-wrapper-in-form-item
    input[type='checkbox'] {
    width: 18px;
    height: 18px;
  }

  .ant-checkbox-wrapper .ant-checkbox.ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-wrapper:hover
    .ant-checkbox.ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.colors.primary} !important;
    border-color: ${({ theme }) => theme.colors.primaryDark} !important;
  }

  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-inner,
  :where(.css-dev-only-do-not-override-zcfrx9).ant-checkbox:not(
      .ant-checkbox-disabled
    ):hover
    .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.colors.primaryDark} !important;
  }

  .ant-checkbox-wrapper .ant-checkbox:after {
    border-color: ${({ theme }) => theme.colors.primary} !important;
  }

  .ant-checkbox-wrapper:active {
    color: ${({ theme }) => theme.colors.newtralDark};
  }

  .ant-checkbox-disabled {
    background-color: ${(props) => props?.theme?.colors?.newtralLight};
  }
`;

const radioButton = css`
  .ant-radio-wrapper .ant-radio {
    width: 18px;
    height: 18px;
  }
  .ant-radio-wrapper .ant-radio .ant-radio-inner {
    border: 2px solid #7b7583;
    width: 18px;
    height: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.newtral};
  }

  .ant-radio-wrapper .ant-radio.ant-radio-checked .ant-radio-inner {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-radio-wrapper:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  .ant-radio-wrapper:hover .ant-radio .ant-radio-inner {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-radio-wrapper .ant-radio:active .ant-radio-inner {
    color: ${({ theme }) => theme.colors.newtralDark};
  }
`;

const switchToggle = css`
  button.ant-switch {
    line-height: 16px;
    color: ${({ theme }) => theme.colors.newtralDark};
    background: ${({ theme }) => theme.colors.newtral};
    height: 16px;
    width: 32px;
    min-width: 24px;
  }

  button.ant-switch.ant-switch-checked {
    background: ${({ theme }) => theme.colors.primary};
  }

  button.ant-switch:hover:not(.ant-switch-disabled) {
    color: #17181a;
    background: ${({ theme }) => theme.colors.newtral};
  }

  button.ant-switch.ant-switch-checked:hover:not(.ant-switch-disabled) {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
  }

  .ant-switch .ant-switch-handle {
    width: 12px !important;
    height: 12px !important;
    top: 2px !important;
    padding: 0px !important;
    inset-inline-start: 4px;
  }

  button.ant-switch.ant-switch-checked .ant-switch-handle {
    inset-inline-start: calc(100% - 14px);
  }
`;

const select = css`
  .ant-select-dropdown {
    background: #ffffff;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
    border-radius: ${({ theme }) => theme.radius.normalRadius};

    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      /* background: transparent; */
      /* font-weight: ${({ theme }) => theme.fontWeight.regular}; */
    }
  }
`;

const input = css`
  .ant-input {
    color: ${(props) => props?.theme?.colors?.newtralDarker} !important;
  }

  &.ant-form-item-label {
    margin-bottom: 6px !important;
    padding: 0px !important;

    label {
      color: ${(props) => props?.theme?.colors?.secondaryDarker};
      font-weight: ${(props) => props?.theme?.fontWeight?.bold};
      line-height: 20px;
      letter-spacing: 0.28px;
    }
  }

  &.ant-form-item-required {
    display: flex;
    flex-direction: row-reverse;
    gap: 4px;

    &::after {
      content: none !important;
    }

    &::before {
      margin-bottom: 5px;
    }
  }
`;

const utility = { checkbox, radioButton, select, switchToggle, input };

export { utility };
