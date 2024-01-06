import styled from "styled-components";

export const MessageListContainer = styled.div`
    padding: 10px;
    margin: 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    max-height: 50vh;
    overflow-y: auto;

    /* scrollbar styles */
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #f0f0f0; 
        border-radius: 6px; 
    }

    &::-webkit-scrollbar-track {
        background-color: #808080; 
        border-radius: 6px; 
    }
`;

interface MessageItemProps {
    isAuthor: boolean;
}

export const MessageItem = styled.li<MessageItemProps>`
    list-style: none;
    padding: 10px;
    border-radius: ${({ isAuthor }) => isAuthor ? '10px 10px 0px 10px' : '10px 10px 10px 0px'};
    margin-bottom: 8px;
    word-wrap: break-word;
    background-color: ${({ isAuthor }) => (isAuthor ? '#4CAF50' : '#2196F3')};
    color: white;
    align-self: ${({ isAuthor }) => (isAuthor ? 'flex-end' : 'flex-start')};
  
    ::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px;
      margin-top: -10px;
      ${({ isAuthor }) => (isAuthor ? 'border-color: transparent transparent transparent #4CAF50;' : 'border-color: transparent #2196F3 transparent transparent;')}
      ${({ isAuthor }) => (isAuthor ? 'right: 0' : 'left: 0')};
      
      /* Adiciona uma borda inferior na ponta correspondente */
      ${({ isAuthor }) => (isAuthor ? 'border-bottom: 10px solid #4CAF50;' : 'border-bottom: 10px solid #2196F3;')}
    }
`;