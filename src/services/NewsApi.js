export const fetchArticles = async ({ country }) => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`);
    const article = await res.json();
    console.log(article)
    return article.articles;
};