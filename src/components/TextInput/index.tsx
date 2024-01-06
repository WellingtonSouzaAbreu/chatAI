import React, { ChangeEvent } from 'react';
import { Container } from './styles';

interface TextInputProps {
    text: string;
    onChangeText: (text: string) => void;
    onEnterPress?: () => void;
    inputRef?: React.RefObject<HTMLInputElement>;
}

function TextInput({ inputRef, text, onChangeText, onEnterPress }: TextInputProps) {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeText(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onEnterPress) {
            onEnterPress();
        }
    };

    return (
        <Container
            ref={inputRef}
            type="text"
            placeholder="Digite sua mensagem..."
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
        />
    );
}

export { TextInput };
