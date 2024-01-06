function createNewMessage(textMessage: string, author: string) {
    return {
        message: textMessage,
        author: author,
        datetime: Date.now()
    }
}

export { createNewMessage }