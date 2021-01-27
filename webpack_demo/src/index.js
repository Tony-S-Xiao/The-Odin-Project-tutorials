import _ from 'lodash';
import {myName} from './myName.js'

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = myName('tony');
  
    return element;
  }
  
  document.body.appendChild(component());