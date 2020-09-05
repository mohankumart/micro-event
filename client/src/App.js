import React from 'react';
import PostCreate from './PostCreate';
import PostLists from './PostLists';

export default () => {
    return (
        <div className="container">
            <h1>Create Post</h1>
            <PostCreate></PostCreate>
            <hr></hr>
            <h1>Posts</h1>
            <PostLists></PostLists>
        </div>
    );
};
