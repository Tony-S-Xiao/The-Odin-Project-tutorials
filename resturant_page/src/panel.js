let panel_manager = (()=>{
    const createAssociatedPanel = (tab_id) => {
        let content = document.querySelector('#content');
        let new_panel = document.createElement('div');
        new_panel.classList = 'content-panel';
        let panel_id = tab_id.replace('tab', 'panel');
        new_panel.id = `${panel_id}`;
        content.appendChild(new_panel);
        return panel_id;
    }
    const deletePanel = (panel_id) => {
        document.querySelector(`[id='${panel_id}']`).remove();
    }
    const hidePanel = (panel_id) => {
        document.querySelector(`[id='${panel_id}']`).style.display = 'none';
    }
    const showPanel = (panel_id) => {
        document.querySelector(`[id='${panel_id}']`).style.display = null;
    }
    return {createAssociatedPanel, deletePanel, hidePanel, showPanel};
})();

export default panel_manager;