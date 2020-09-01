import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hey bitch', likesCount: 12 },
                { id: 2, message: 'Wassup', likesCount: 11 },
                { id: 4, message: 'Yo yo yo 1483369', likesCount: 14 },
            ],
            newPostText: 'You got it girl'
        },
        dialogsPage: {
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed bitch');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
