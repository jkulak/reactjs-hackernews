import React from 'react';
import NewsItem from './NewsItem';

class NewsList extends React.Component{

    render(){

        let newsItems;
        if (this.props.news) {
            newsItems = this.props.news.map(elem => {
                return (
                    <NewsItem key={elem.id} news={elem} />
                )
            });
        }

        return (
            <div className="news">
                <h3>{this.props.title}</h3>
                {newsItems}
            </div>
        );
    }
}

NewsList.propTypes = {
    // news: React.PropTypes.array,
    // onDelete: React.PropTypes.func
}

export default NewsList;
