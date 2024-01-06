import { useEffect, useRef } from "react"
import { MessageItem, MessagesListContainer } from "./styles"

interface MessagesListProps {
    messages: string[]
}

function MessagesList({ messages }: MessagesListProps) {
    const listRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        scrollToEnd()
    }, [messages])

    const scrollToEnd = () => listRef.current && listRef.current && listRef.current.scrollTo(0, listRef.current.scrollHeight)

    const renderMessages = () => {
        return messages.map((message, index) => (
            <MessageItem
                key={index}
                isAuthor={index % 2 === 0}
            >
                {message}
            </MessageItem>
        ))
    }

    return (
        <MessagesListContainer ref={listRef}>
            {renderMessages()}
        </MessagesListContainer>
    )
}



export { MessagesList }