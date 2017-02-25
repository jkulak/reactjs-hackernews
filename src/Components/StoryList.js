import React from 'react';
import StoryItem from './StoryItem';

class StoryList extends React.Component{

    render(){

        let stories;
        if (this.props.stories) {
            stories = this.props.stories.map(elem => {
                return (
                    <StoryItem key={elem} story={elem} />
                )
            });
        }

        return (
            <div className="story">
                <h3>{this.props.title}</h3>
                {stories}
            </div>
        );
    }
}

StoryList.propTypes = {
    // story: React.PropTypes.array,
    // onDelete: React.PropTypes.func
}

export default StoryList;
