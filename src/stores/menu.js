import {writable} from 'svelte/store';

export const isMenuShow = writable(false);

export const listmenu = writable([
  {code: 'dashboard', nama: 'Dashboard', isActive: true},
  {code: 'users', nama: 'Users', isActive: true},
  {code: 'profile', nama: 'Profile', isActive: false}
]);

export const activeMenu = writable({
  code: 'dashboard',
  nama: 'Dashboard',
  isActive: true
});

let currentMenu = 'dashboard';

activeMenu.subscribe(menu => currentMenu = menu.code);

export function toggleMenu(menu) {
  listmenu.update(state => {
    const updateIndex = state.findIndex(el => menu.code === el.code);
    if (updateIndex === 0 || menu.code === currentMenu) return state;
    const newList = [...state];
    const updatedMenu = {...menu};

    updatedMenu.isActive = !updatedMenu.isActive;
    newList[updateIndex] = updatedMenu;
    return newList;
  })
}

export function setActiveMenu(menu) {
  activeMenu.set(menu);
}

export const showMenu = () => isMenuShow.set(true);
export const closeMenu = () => isMenuShow.set(false);
