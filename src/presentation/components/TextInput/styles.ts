import styled, { css } from 'styled-components';

interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled.input<ContainerProps>`
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #2196F3;
  }

  ${({ disabled }) =>
    disabled &&
    css`
        background-color: #f0f0f0;
        font-size: 20px;
        text-align: center;
        font-weight: bold;
        cursor: not-allowed;
        ::placeholder {
          color: transparent; 
        }
      `}
`;
