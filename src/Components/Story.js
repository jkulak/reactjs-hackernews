import React from 'react';
import { Link } from 'react-router-dom';

class Story extends React.Component{

    render(){

        return (
            <div>
                <p>
                    <Link to="/" >
                        back to the list
                    </Link>
                </p>
                <div className="story">
                    <h3>Title: {this.props.title}</h3>
                    This is the story content
                    (id: {this.props.match.params.storyId})
                </div>
            </div>
        );
    }
}

// Story.propTypes = {
    // title: React.PropTypes.string,
    // onDelete: React.PropTypes.func
// }

export default Story;
