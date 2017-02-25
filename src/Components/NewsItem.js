import React from 'react';

class NewsItem extends React.Component {

    render() {
        return (
            <li className="News">
                {this.props.news}
            </li>
        );
    };
}

NewsItem.propTypes = {
    // user: React.PropTypes.object,
    // onDelete: React.PropTypes.func
}

export default NewsItem;
