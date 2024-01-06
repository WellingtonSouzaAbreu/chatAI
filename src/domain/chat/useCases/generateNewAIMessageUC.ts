import { userTypes } from "../../entity/user"
import { createNewMessage } from "../rules/createNewMessage"

function generateNewAIMessageUC(textMessage: string) {
    return createNewMessage(textMessage, userTypes.CHATAI)
}

export { generateNewAIMessageUC }