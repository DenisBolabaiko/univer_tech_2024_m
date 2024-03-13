import React, { useState } from 'react';
import { useEffect } from 'react';

const ShowComments = ({ postId })=>{
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
          .then(response => response.json())
          .then(data => setComments(data));},[])
    return(
        <div className="comments">
      <h2>Comments:</h2>
      {comments.map(comment =>{
                if (comment.postId === postId) {
                    return (
                        <div key={comment.id} className="card m-2 p-2">
                            <b>{comment.name}:</b>
                            <p>{comment.body}</p>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default ShowComments;