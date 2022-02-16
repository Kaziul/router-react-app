import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
    const {id, title,body} = props.post;
    let navigate = useNavigate();

        function handleSubmit(id) {
            const url = `post/${id}`;
        navigate(url);
        }
    return (
      <div>
        <h3>
          <strong>{id}</strong> {title}
        </h3>
        <p>{body}</p>
        <button onClick={()=>handleSubmit(id)}>Show comments</button>
      </div>
    );
};

export default Post;