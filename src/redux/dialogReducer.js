const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Nicki' },
        { id: 2, name: 'Dasha' },
        { id: 3, name: 'Sonya' },
        { id: 4, name: 'Madison' },
        { id: 5, name: 'Xuesoska♥' }
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Its me' },
        { id: 3, message: 'Lazy ass' },
        { id: 4, message: 'Yo yo yo 1483369' },
    ]
};


const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {
                ...state,
                message: [...state.messagesData, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogReducer;