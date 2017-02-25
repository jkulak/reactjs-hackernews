import React from 'react';

class NewsItem extends React.Component {

    render() {
        return (
            <li className="News">
                <a href={"/story/"+this.props.news}>{this.props.news}</a>
            </li>
        );
    };
}

NewsItem.propTypes = {
    // user: React.PropTypes.object,
    // onDelete: React.PropTypes.func
}

export default NewsItem;
