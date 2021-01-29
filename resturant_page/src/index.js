import page_manager from './page.js';
(() => {
    let tab = document.createElement('ul');
    tab.id = 'tab-panel';
    document.querySelector('#content').appendChild(tab);
})();

page_manager.addPage('Home');
page_manager.addPage('Menu');
page_manager.addPage('Testimonials');
page_manager.addPage('Contact');