import React, { useEffect, useState } from 'react';
import './CommentDisplay.css'
import SingleComment from './SingleComment/SingleComment';

const CommentDisplay = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-ravine-48644.herokuapp.com/comments')
            .then(res => res.json())
            .then(data => setComments(data));
    }, [])
    return (
        <div className='container'>
            <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>Show Our All Customar Comment</h1>
            <div className='servicesm'>
                {
                    comments.map(comment => <SingleComment
                        key={comment._id}
                        comment={comment}
                        setComments={setComments}
                    ></SingleComment>)
                }
            </div>
        </div>
    );
};

export default CommentDisplay;