import React from 'react';


const SingleComment = ({ comment }) => {

    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' alt="" style={{ width: '70%', height: '100%', alignItems: 'center', justifyContent: 'center' }} />
                <div className="card-body">
                    <h5 className="card-title">Name:{comment.name}</h5>
                    <h5 className="card-title">Rating:{comment.rating}</h5>
                    <h5 className="card-title">{comment.description}</h5>
                </div>
            </div>
        </div>
    );
};

export default SingleComment;