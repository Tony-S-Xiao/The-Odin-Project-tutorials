import React from 'react';
import '../Styles/general_information.css';
import EditIndicator from './EditIndicator.js';
class GeneralInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            hover: false
        }
    }
    handleChange(e) {
        let new_state = this.state;
        switch(e.target.id) {
            case 'first-name-input':
                new_state.firstName = e.target.value;
                break;
            case 'last-name-input':
                new_state.lastName = e.target.value;
                break;
            case 'email-input':
                new_state.email = e.target.value;
                break;
            case 'phone-number-input':
                new_state.phoneNumber = e.target.value;
                break;
            default:
        }
        this.setState(new_state);
    }
    handleHoverEnter(e) {
        let new_state = this.state;
        new_state.hover = true;
        this.setState(new_state);
    }
    handleHoverLeave(e) {
        let new_state = this.state;
        new_state.hover = false;
        this.setState(new_state);
    }
    render() {
        return (
            <div>
                <input type="text" className="large-field" value={this.state.firstName}
                 onChange={this.handleChange.bind(this)} id="first-name-input"
                  placeholder="First Name" onMouseEnter={this.handleHoverEnter.bind(this)} onMouseLeave={this.handleHoverLeave.bind(this)}></input>
                  <EditIndicator display={this.state.hover ? '' : 'none'}/>
                <input type="text" className="large-field" value={this.state.lastName}
                 onChange={this.handleChange.bind(this)} id="last-name-input"
                  placeholder="Last Name" onMouseEnter={this.handleHoverEnter.bind(this)} onMouseLeave={this.handleHoverLeave.bind(this)}></input>
                <input type="text" className="large-field" value={this.state.email}
                 onChange={this.handleChange.bind(this)} id="email-input"
                  placeholder="Email" onMouseEnter={this.handleHoverEnter.bind(this)} onMouseLeave={this.handleHoverLeave.bind(this)}></input>
                <input type="text" className="large-field" value={this.state.phoneNumber}
                 onChange={this.handleChange.bind(this)} id="phone-number-input"
                  placeholder="Phone Number" onMouseEnter={this.handleHoverEnter.bind(this)} onMouseLeave={this.handleHoverLeave.bind(this)}></input>
            </div>
        );
    }
}
export default GeneralInformation;