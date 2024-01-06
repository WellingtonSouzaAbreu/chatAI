import React, { useEffect, useRef, useState } from 'react';
import { MessagesList } from '../../components/MessagesList';
import { ChatBox, ChatContainer, ChatInput, Title } from './styles';
import { SendMessageButton } from '../../components/SendMessageButton';

function Chat() {
    const [message, setMessage] = useState<string>('')
    const [messages, setMessages] = useState<string[]>([]);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [messages]);

    const onChangeMessage = (message: string) => {
        if (message.trim() !== '') {
            setMessage(message);
        }
    }

    const handleSendMessage = () => {
        if (message.trim() === '') return
        setMessages([...messages, message]);
        clearInputMessave()
    };

    const clearInputMessave = () => setMessage('')

    return (
        <ChatContainer>
            <ChatBox>
                <Title>Barbearia KW (IA)</Title>
                <MessagesList messages={messages} />
                <br />
                <ChatInput
                    text={message}
                    onChangeText={onChangeMessage}
                    onEnterPress={handleSendMessage}
                    inputRef={inputRef}
                />
                <br />
                <SendMessageButton onClick={handleSendMessage} />
            </ChatBox>
        </ChatContainer>

    );
};

export { Chat };
