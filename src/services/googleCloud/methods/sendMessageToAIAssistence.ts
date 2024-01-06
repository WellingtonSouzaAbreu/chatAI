import axios from 'axios'
import { googleCloudRequestHeader } from '../config'
import { Scheduling } from '../../../domain/entity/schedules/types'

const GOOGLE_CLOUD_URL = process.env.REACT_APP_GOOGLE_CLOUD_URL

async function sendMessageToAIAssistence(message: string): Promise<Scheduling> {
    return await axios.post(`${GOOGLE_CLOUD_URL}/chatLocal`, {
        userInput: message
    },
        googleCloudRequestHeader
    ).then(response => {
        console.log(response.data)
        return isValidJSON(response.data)
            ? JSON.parse(response.data)
            : 'Ops, alguma coisa deu errado no servidor'
    })
}

function isValidJSON(text: string) {
    try {
        JSON.parse(text)
        return true
    } catch (e) {
        return false
    }
}


export { sendMessageToAIAssistence }