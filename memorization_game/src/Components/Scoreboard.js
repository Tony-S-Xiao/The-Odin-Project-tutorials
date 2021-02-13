import React from 'react';

export default class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.score
        }
    }
    render() {
        return (
            <div>{this.props.score}</div>
        );
    }
}