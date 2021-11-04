import React from 'react';
import Article from './Article';

export default function ArticleList({ articles }) {
    console.log('ART',articles)
    const articleList = articles.map(({ title, author, description }) => (
        <li key={`${author}-${title}`}>
            <Article title={title} author={author} description={description}/>
        </li>
    ));
    return <ul aria-label='articles'>{articleList}</ul>
}