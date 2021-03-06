import tab_manager from './tab.js'
import panel_manager from './panel.js'
import card_factory from './card.js'
const page_manager = (() => {
    const addPage = (tab_name) => {
        let tab_id = tab_manager.createTab(tab_name);
        let panel_id = panel_manager.createAssociatedPanel(tab_id);
        console.log(tab_id);
        tab_manager.addEventHandler(tab_id, (e)=>{
            panel_manager.hideAllPanels();
            panel_manager.showPanel(panel_manager.getAssociatedPanelId(e.target.id));
        });
    };
    const addCard = (img_url, description, index) => {
        let page = document.querySelectorAll('.content-panel');
        page[index].appendChild(card_factory.createFoodCard(img_url, description));
    }
    return {addPage, addCard};
})();
export default page_manager;