import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreate } from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'


/*const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreate(text))
    };

    return (
        <MyPosts
            addPost={addPost}
            onPostChange={onPostChange}
            post={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}/>
    );
};*/

let mapStateToProps = (state) => {
    return {
        post: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreate(text))
        }
    }
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer
