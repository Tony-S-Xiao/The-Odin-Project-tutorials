let tab_manager = (() => {
    const unique_id_enforcer  = new Set();
    const createTab = (tab_name) => {
        const tab_panel = document.querySelector('#tab-panel');
        let tab = document.createElement('li');
        tab.classList = 'tab';
        tab.textContent = tab_name;
        let tab_id = createUniqueId(tab_name);
        while(unique_id_enforcer.has(tab_id)) {
            if(unique_id_enforcer.size > 9999) throw 'Max number of tabs reached!';
            tab_id = createUniqueId(tab_name);
        }
        tab.id = tab_id;
        tab_panel.appendChild(tab);
        unique_id_enforcer.add(tab_id);
        return tab_id;
    };
    const createUniqueId = (tab_name) => {
        let unique_id = `tab-${tab_name.replaceAll(' ', '-')}-${Math.floor(Math.random() * 10000)}`;
        return unique_id;
    };
    const deleteTab = (tab_id) => {
        document.querySelector(`[id='${tab_id}']`).remove();
    };
    const addEventHandler = (tab_id, handler) => {
        document.querySelector(`[id='${tab_id}']`).addEventListener('click', handler);
    };
    const getTab = (tab_id) => {
        return document.querySelector(`[id='${tab_id}']`);
    };
    return {createTab, deleteTab, addEventHandler, getTab};
})();

export default tab_manager;