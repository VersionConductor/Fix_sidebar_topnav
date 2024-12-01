const sidebarToggleButton = document.getElementById('sidebarToggleButton');
const sidebarMain = document.getElementById('sidebarMain');
const sidebarLinkItem = document.querySelectorAll('.sidebar-link-item > a');
const sidebarTitle = document.querySelectorAll('.sidebar-title');
const topnavLinks = document.querySelectorAll('.topnav-links > a');

sidebarToggleButton.addEventListener('click', () => {
    sidebarMain.classList.toggle('showFull-sidebar');

    sidebarTitle.forEach(item => {
        item.classList.toggle('show-tittle');
    });

    sidebarLinkItem.forEach(item => {
        item.classList.toggle('showfull-navbar');
    });

});

//click out side to close sidenav
document.addEventListener('click', (e) => {
    if(!sidebarMain.contains(e.target) && e.target !== sidebarToggleButton) {
        sidebarMain.classList.remove('showFull-sidebar');
        sidebarTitle.forEach(item => {
            item.classList.remove('show-tittle');
        });

        sidebarLinkItem.forEach(item => {
            item.classList.remove('showfull-navbar');
        });
    }
});

//sidebar
loadActiveButton(sidebarLinkItem, 'show-active', 'activeButtonIndex');
sidebarLinkItem.forEach((item, index) => {
    item.addEventListener('click', () => setActiveButton(index, sidebarLinkItem, 'show-active', 'activeButtonIndex'));
});

//Topnav bar
loadActiveButton(topnavLinks, 'active-navlink', 'activeTopnavButtonIndex');
topnavLinks.forEach((item, index) => {
    item.addEventListener('click', () => setActiveButton(index, topnavLinks, 'active-navlink', 'activeTopnavButtonIndex'));
});

//save to localstorage
function setActiveButton(index, items, activeClass, storageKey) {
    items.forEach(el => el.classList.remove(activeClass));
    items[index].classList.add(activeClass);
    //save to localstorage
    localStorage.setItem(storageKey, index);
}

function loadActiveButton(items, activeClass, storageKey) {
    const savedIndex = localStorage.getItem(storageKey);
    if (savedIndex !== null) {
        setActiveButton(parseInt(savedIndex), items, activeClass, storageKey);
    }
}