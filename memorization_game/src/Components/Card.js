import React from 'react';
import '../Styles/Card.css';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }
    render() {
        return (
            <div className="container" onClick={this.props.onClick} id={this.props.id}>
                <img src={this.props.url} alt="oops"></img>
                <div className="title">
                {this.props.title}
                </div>
            </div>
        );
    }
}