import { Container } from "./styles";

interface SendMessageButtonProps {
    onClick: () => void;
}

function SendMessageButton({ onClick }: SendMessageButtonProps) {
    return (
        <Container onClick={onClick}>
            Enviar
        </Container>
    )
}

export { SendMessageButton }