import React, {Component} from 'react';

class Overview extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                {this.props.task}
            </div>
        );
    }
}
export default Overview;