import React from 'react';
import { Link } from 'react-router-dom';

class NewsItem extends React.Component {

    render() {
        return (
            <li className="News">
                <Link to={`/story/${this.props.news}`} >
                    {this.props.news}
                </Link>
            </li>
        );
    };
}

NewsItem.propTypes = {
    // user: React.PropTypes.object,
    // onDelete: React.PropTypes.func
}

export default NewsItem;
