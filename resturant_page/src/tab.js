let tab_creator = (() => {
    const createTab = (textContent) => {
        const tab_panel = document.querySelector('#tab-panel');
        let tab = document.createElement('li');
        tab.classList = 'tab';
        tab.textContent = textContent;
        tab.id = textContent;
        tab_panel.appendChild(tab);
    };
    return {createTab};
})();

export default tab_creator;