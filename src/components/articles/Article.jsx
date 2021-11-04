import React from 'react';

export default function Article({ title, author, description }) {
    return (
        <div>
            <h1>Title: {title}</h1>
            <span>Author: {author}</span>
            <h3>Description: {description}</h3>
        </div>
    );
}