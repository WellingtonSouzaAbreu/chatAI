import { userTypes } from "../../entity/user"
import { createNewMessage } from "../rules/createNewMessage"

function generateNewUserMessageUC(textMessage: string) {
    return createNewMessage(textMessage, userTypes.USER)
}

export { generateNewUserMessageUC }