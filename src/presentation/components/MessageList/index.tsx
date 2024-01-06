import { useEffect, useRef } from "react"
import { MessageItem, MessageListContainer } from "./styles"
import { MessageObject } from "../../../domain/entity/chat/types"
import { userTypes } from "../../../domain/entity/user"

interface MessageListProps {
    messages: MessageObject[]
}

function MessageList({ messages }: MessageListProps) {
    const listRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        scrollToEnd()
    }, [messages])

    const scrollToEnd = () => listRef.current && listRef.current && listRef.current.scrollTo(0, listRef.current.scrollHeight)

    const renderMessages = () => {
        return messages.map(({ message, author }, index) => (
            <MessageItem
                key={index}
                isAuthor={author === userTypes.USER}
            >
                {message}
            </MessageItem>
        ))
    }

    return (
        <MessageListContainer ref={listRef}>
            {renderMessages()}
        </MessageListContainer>
    )
}



export { MessageList }