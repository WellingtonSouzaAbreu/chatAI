import { generateNewAIMessageUC } from "../../domain/chat/useCases/generateNewAIMessageUC"
import { generateNewUserMessageUC } from "../../domain/chat/useCases/generateNewUserMessageUC"

function ChatAdapter() {
    return {
        generateNewUserMessage: generateNewUserMessageUC,
        generateNewAIMessage: generateNewAIMessageUC
    }
}

export { ChatAdapter }