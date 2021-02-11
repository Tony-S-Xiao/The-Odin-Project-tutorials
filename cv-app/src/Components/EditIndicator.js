import React from 'react';
import pencil from '../Assets/pencil.png'

class EditIndicator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={pencil} style={{width:20, height:20, display: this.props.display, position:'absolute'}}/>
        );
    }
}
export default EditIndicator;