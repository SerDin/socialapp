import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.postData.map(p => (
        <Post message={p.message} likeCount={p.likeCount} key={p.id}/>
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        let action = {type: 'ADD-POST'};
        props.dispatch(action);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
            // props.updateNewPostText(text)
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action)
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                        placeholder={'add new post'}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Submit</button>
                </div>
                <div className={s.posts}>New post</div>
                {postsElement}
            </div>
        </div>
    );
};
export default MyPosts;
