import React, { useEffect, useState } from 'react';
import News from '../News/News';


const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=88eb4e12c97c42569e06cca4f705d490';
    useEffect( () => {        
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, []);
    console.log(articles);
    return (        
        <div className="ml-5">
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News> )
            }
        </div>
    );
};

export default TopHeadline;