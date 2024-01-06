import React, { ChangeEvent, useEffect, useState } from 'react';
import { Container } from './styles';

interface TextInputProps {
    text: string;
    disabled?: boolean;
    onChangeText: (text: string) => void;
    onEnterPress?: () => void;
    inputRef?: React.RefObject<HTMLInputElement>;
}

function TextInput({ text, disabled, onChangeText, onEnterPress, inputRef }: TextInputProps) {
    const [ellipsisIndex, setEllipsisIndex] = useState<number>(0);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeText(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onEnterPress) {
            onEnterPress();
        }
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (disabled) {
            interval = setInterval(() => {
                setEllipsisIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
            }, 500);
        }

        return () => {
            clearInterval(interval);
        };
    }, [disabled]);

    return (
        <Container
            ref={inputRef}
            type="text"
            disabled={disabled}
            placeholder={disabled ? `.${'.'.repeat(ellipsisIndex)}` : 'Digite sua mensagem...'}
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
        />
    );
}

export { TextInput };