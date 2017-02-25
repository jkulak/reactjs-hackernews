import React from 'react';

import { connect } from 'react-redux';

import Navbar from './Navbar';
import Footer from './Footer';
import StoryList from './StoryList';
import Story from './Story';

import { fetchStories } from '../Redux/Actions/StoryActions';

import { Route } from 'react-router-dom';

class App extends React.Component{

    constructor() {
        super();
        this.state = {
            stories: []
        }
    }

    getStories() {
        this.setState({
            stories: []
        });
    }

    componentWillMount() {
        this.props.dispatch(fetchStories());
    }

    componentDidMount() {
        this.getStories();
    }

    render() {
        return (
            <div>
                <Navbar />

                <Route exact={true} path="/" render={() => {
                     return <StoryList stories={this.props.stories} title="Top stories" />
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
            stories: store.story.stories
        }
    })(App);
