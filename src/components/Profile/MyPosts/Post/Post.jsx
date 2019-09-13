import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt='ava'
                 src="https://avatarfiles.alphacoders.com/643/64385.png"/>
            {props.message}
            <div><span>like:{props.likeCount}</span></div>

        </div>
    );
};
export default Post;
