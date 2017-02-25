import React from 'react';

import uuid from 'uuid';

import { connect } from 'react-redux';

import Navbar from './Navbar';
import Footer from './Footer';
import NewsList from './NewsList';
import Story from './Story';

import { fetchNews } from '../Redux/Actions/NewsActions';

import { Route } from 'react-router-dom';

class App extends React.Component{

    constructor() {
        super();
        this.state = {
            news: []
        }
    }

    getNews() {
        this.setState({
            news: [
                {
                    id: uuid.v4(),
                    title: "First title",
                    category: "Funny"
                },
                {
                    id: uuid.v4(),
                    title: "All about them",
                    category: "Sad"
                },
                {
                    id: uuid.v4(),
                    title: "There was a bridge",
                    category: "Architecture"
                }
            ]
        });
    }

    componentWillMount() {
        this.props.dispatch(fetchNews());
    }

    componentDidMount() {
        this.getNews();
    }

    render() {
        return (
            <div>
                <Navbar />

                <Route exact={true} path="/" render={() => {
                     return <NewsList news={this.props.news} title="Top stories" />
                }} />
                <Route path="/story/:storyId" component={Story} />

                <Footer />

            </div>
        );
    }
}

export default connect(
    store => {
        return {
            news: store.news.news
        }
    })(App);
