import React from "react";
import '../styles/Post.css';
const Post=({title,body}) => {
    return ( <div className="post">
        <h3>{title}</h3>
        <p><hr></hr></p> 
        <p>{body}</p>
    </div> );// to implement the line between title &body
}

export default Post;