import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt='ava'
                 src="https://png2.cleanpng.com/sh/85464fbb3f4877d406ff6652fe5653bc/L0KzQYq3V8E4N5Jvj5H0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgJia5YySaY2YoX2ebBskCMuaadmjNN7LXHzgL3wgBF1cZDzRadtMnazQ7S4gsc4QZI7Rqk7Mkm2RYK7UcU3O2Q7SqQ9MUe4QYa1kP5o/kisspng-computer-icons-race-14-business-avatar-application-5d2f03c1b779a6.7229351415633622417515.png"/>
            {props.message}
            <div><span>like:{props.likeCount}</span></div>

        </div>
    );
};
export default Post;
