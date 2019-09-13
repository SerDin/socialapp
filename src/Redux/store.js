import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "My first post", likeCount: 12},
                {id: 2, message: "My name its", likeCount: 15},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Sergey"},
                {id: 2, name: "Dima"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Katerine"},
                {id: 5, name: "Julia"},
                {id: 6, name: "Nicolas"}
            ],
            messageData: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "Yo!"},
                {id: 3, message: "Hello!"},
                {id: 4, message: "How are you?!"}
            ],
            newMessageBody: '',
        },
        sidebarPage: {}
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
        this._callSubscriber(this._state)
    }
};


export default store;
window.store = store;