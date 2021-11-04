import React, { Component } from 'react'
import Controls from '../components/articles/Controls';
import ArticleList from '../components/articles/ArticleList';
import { fetchArticles } from '../services/NewsApi';

export default class NewsContainer extends Component {
    state = {
        loading: true,
        articles: [],
        country: '',
    };

    async componentDidMount() {
        const articles = await fetchArticles('us');
        this.setState({ articles, loading:false });
    }

    handleCountryChange = (event) => {
        this.setState({ country: event.target.value })
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const articles = await fetchArticles(this.state.country);
        this.setState({ articles, loading:false })
    };

    render() {
        const { loading, articles, country } = this.state;

        return (
            <>
            {loading ? (
                <h1>Loading your Articles!</h1>
            ) : (
                <>
                <Controls
                country={country}
                onCountryChange={this.handleCountryChange}
                onSubmit={this.handleSubmit}
                />
                <ArticleList articles={articles} />
                </>
            )}
            </>
        )
    }
}