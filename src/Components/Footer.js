import React from 'react';

class Footer extends React.Component{
    render(){
        return (
            <footer className="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-m-5">
                            <p>Powered by ReactJS with Redux</p>
                            <p><a href="https://github.com/jkulak/reactjs-hackernews">https://github.com/jkulak/reactjs-hackernews</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
