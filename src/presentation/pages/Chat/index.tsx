import React, { useEffect, useRef, useState } from 'react';
import { ChatBox, ChatContainer, Title } from './styles';
import { SendMessageButton } from '../../components/SendMessageButton';
import { ChatAdapter } from '../../adapters/ChatAdapter';
import { MessageList } from '../../components/MessageList';
import { MessageObject } from '../../../domain/entity/chat/types';
import { TextInput } from '../../components/TextInput';
import { GoogleCloudService } from '../../../services/googleCloud/GoogleCloudService';
import { Scheduling } from '../../../domain/entity/schedules/types';

const { sendMessageToAIAssistence } = GoogleCloudService()
const { generateNewUserMessage, generateNewAIMessage } = ChatAdapter()

function Chat() {
    const [textMessage, setTextMessage] = useState<string>('')
    const [messageList, setMessageList] = useState<MessageObject[]>([]);
    const [textInputMessageIsLocked, setTextInputMessageIsLocked] = useState<boolean>(false);

    const [scheduling, setScheduling] = useState<Scheduling>()

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [messageList]);

    const schedulingDataIsComplete = (scheduleData?: Scheduling) => {
        if (!scheduleData) return false
        if (!scheduleData.service) return false
        if (!scheduleData.date) return false
        if (!scheduleData.hour) return false
        if (!scheduleData.name) return false
        return true
    }

    const clearScheduling = () => setScheduling(undefined)

    const onChangeMessage = (message: string) => {
        if (message.trim() !== '') {
            setTextMessage(message);
        }
    }

    const handleSendMessage = async () => {
        if (textMessage.trim() === '') return

        const messageObject = generateNewUserMessage(textMessage)
        const newMessageList = [...messageList, messageObject]
        setMessageList(newMessageList)

        clearInputMessage()

        await getChatAIResponse(newMessageList, messageObject.message)
    };

    const getChatAIResponse = async (currentMessageList: MessageObject[], textMessage: string) => {
        try {
            setTextInputMessageIsLocked(true)

            const AIMessageResponse = await sendMessageToAIAssistence(textMessage)
            if (AIMessageResponse.message !== 'Invalid input. Please provide a valid response.') {
                console.log({ ...scheduling, ...AIMessageResponse })
                setScheduling({ ...scheduling, ...AIMessageResponse })

                if (schedulingDataIsComplete({ ...scheduling, ...AIMessageResponse })) {
                    setMessageList([...currentMessageList, generateNewAIMessage(`${scheduling?.service} agendado para o dia ${scheduling?.date}`)])
                    clearScheduling()
                    return
                }

                setMessageList([...currentMessageList, generateNewAIMessage(AIMessageResponse.message)])
                return
            }

            setMessageList([...currentMessageList, generateNewAIMessage('Não compreendi o que escreveu')])
        } catch (err) {
            // set Error()
            console.log(err)
        } finally {
            setTextInputMessageIsLocked(false)
        }
    }

    const clearInputMessage = () => setTextMessage('')

    return (
        <ChatContainer>
            <ChatBox>
                <Title>CHAT AI</Title>
                <MessageList messages={messageList} />
                <br />
                <TextInput
                    text={textMessage}
                    disabled={textInputMessageIsLocked}
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
