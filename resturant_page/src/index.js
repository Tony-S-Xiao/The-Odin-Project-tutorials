let initialize = (() => {
    let tab = document.createElement('ul');
    tab.id = 'tab-panel';
    document.querySelector('#content').appendChild(tab);
})();
import tab_creator from './tab.js';
tab_creator.createTab('wow new tab');
tab_creator.deleteTab('wow new tab');