import _ from 'lodash';

let tab_creator = (() => {
    const createTab = (textContent) => {
        const tab_panel = document.querySelector('#tab-panel');
        let tab = document.createElement('li');
        tab.classList = 'tab';
        tab.textContent = textContent;
        tab.id = textContent;
        tab_panel.appendChild(tab);
    };
    const deleteTab = (textContent) => {
        document.querySelector(`.tab, #${textContent}`).remove();
    };
    return {createTab, deleteTab};
})();

export default tab_creator;