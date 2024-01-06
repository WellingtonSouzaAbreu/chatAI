import styled from 'styled-components';

export const Container = styled.input`
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
`;

