import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: #1a73e8;
    color: white;
    font-weight: bold;
    border: 2px solid #1a73aa;
    border-radius: 10px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #155799; /* Azul escuro mais escuro no hover */
    }
`;
