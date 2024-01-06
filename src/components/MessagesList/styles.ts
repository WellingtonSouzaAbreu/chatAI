import styled from "styled-components";

interface MessageItemProps {
    isAuthor: boolean;
}

export const MessagesListContainer = styled.div`
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

export const MessageItem = styled.li<MessageItemProps>`
    list-style: none;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 8px;
    word-wrap: break-word;
    background-color: ${(props) => (props.isAuthor ? '#4CAF50' : '#2196F3')};
    color: white;
    align-self: ${(props) => (props.isAuthor ? 'flex-end' : 'flex-start')};
  
    ::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px;
      margin-top: -10px;
      ${(props) => (props.isAuthor ? 'border-color: transparent transparent transparent #4CAF50;' : 'border-color: transparent #2196F3 transparent transparent;')}
      ${(props) => (props.isAuthor ? 'right: 0' : 'left: 0')};
    }
`;