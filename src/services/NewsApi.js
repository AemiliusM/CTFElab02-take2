export const fetchArticles = async ( country ) => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=5`);
    const article = await res.json();
    return article.articles;
};