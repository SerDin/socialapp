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
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action){
        if (action.type === 'ADD-POST') {
            let addId =() => {
                return this._state.profilePage.postData.length + 1
            };
            let newPost = {
                id: addId,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = '';
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export default store;
window.store = store;