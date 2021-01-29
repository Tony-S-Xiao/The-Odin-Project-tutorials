import tab_manager from './tab.js';
import panel_manager from './panel.js'

let initialize = (() => {
    let tab = document.createElement('ul');
    tab.id = 'tab-panel';
    document.querySelector('#content').appendChild(tab);

})();

let tab_id = tab_manager.createTab('wow new tab');
let panel_id = panel_manager.createAssociatedPanel(tab_id);
panel_manager.hidePanel(panel_id);
