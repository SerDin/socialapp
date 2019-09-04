const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogsData: [
        { id: 1, name: 'Sergey' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Katerine' },
        { id: 5, name: 'Julia' },
        { id: 6, name: 'Nicolas' }
    ],
    messageData: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Yo!' },
        { id: 3, message: 'Hello!' },
        { id: 4, message: 'How are you?!' }
    ],
    newMessageBody: '',
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messageData: [...state.messageData, { id: 111, message: body }]
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogReducer