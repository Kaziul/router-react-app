import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[id])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setComment(data));
    },[id])
    return (
        <div>
            <h3>This is post detail {id}</h3>
            <p>User Posted: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Post Body: {post.body}</p>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}></Comment>)
            }
        </div>
    );
};

export default PostDetail;