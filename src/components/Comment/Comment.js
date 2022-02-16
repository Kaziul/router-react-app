import React from 'react';

const Comment = (props) => {
    const {id,name, email} = props.comment;
    return (
        <p>
           {id}: {name} : {email}
        </p>
    );
};

export default Comment;