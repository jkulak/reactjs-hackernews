import React from 'react';
import { Link } from 'react-router-dom';

class StoryItem extends React.Component {

    render() {
        return (
            <li className="Story">
                <Link to={`/story/${this.props.story}`} >
                    {this.props.story}
                </Link>
            </li>
        );
    };
}

StoryItem.propTypes = {
    // user: React.PropTypes.object,
    // onDelete: React.PropTypes.func
}

export default StoryItem;
