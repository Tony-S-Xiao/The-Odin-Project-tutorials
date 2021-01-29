let panel_manager = (()=>{
    let all_panel_ids = [];
    const createAssociatedPanel = (tab_id) => {
        let content = document.querySelector('#content');
        let new_panel = document.createElement('div');
        new_panel.classList = 'content-panel';
        let panel_id = tab_id.replace('tab', 'panel');
        new_panel.id = `${panel_id}`;
        content.appendChild(new_panel);
        all_panel_ids.push(panel_id);
        hideAllPanels();
        showPanel(panel_id);
        return panel_id;
    }
    const getAssociatedPanelId = (tab_id) => {
        return tab_id.replace('tab', 'panel');
    };
    const deletePanel = (panel_id) => {
        document.querySelector(`[id='${panel_id}']`).remove();
    };
    const hidePanel = (panel_id) => {
        document.querySelector(`[id='${panel_id}']`).style.display = 'none';
    };
    const showPanel = (panel_id) => {
        document.querySelector(`[id='${panel_id}']`).style.display = null;
    };
    const getPanel = (panel_id) => {
        return document.querySelector(`[id='${panel_id}']`);
    };
    const hideAllPanels = () => {
        for(let id of all_panel_ids) {
            document.getElementById(id).style.display = 'none';
        }
    };
    return {createAssociatedPanel, deletePanel, hidePanel, showPanel, getAssociatedPanelId, getPanel, hideAllPanels};
})();

export default panel_manager;