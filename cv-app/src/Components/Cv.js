import React from 'react';
import '../Styles/cv.css';
import GeneralInformation from './General_information.js';
class Cv extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="CV" style={{width:850, height:1100}}><GeneralInformation/></div>
        );
    }
}
export default Cv;