import './menu.scss';
import BaseComponent from '../base-component';
import Button from '../button/button';
import { BUTTON_NAMES, NAME_CATEGORY, PAGE_HASHES, PAGE_IDS } from '../../constants/constants';

class Menu extends BaseComponent {
  private id: string;

  constructor(tagName: string, className: string, id: string) {
    super(tagName, className);
    this.id = id;
    this.createMenu();
  }

  createMenu(): void {
    const buttonHome = new Button('a', 'title menu__link', BUTTON_NAMES.home).node;
    buttonHome.setAttribute('href', PAGE_HASHES.home);

    const buttonCategories = new Button('a', 'title menu__link', BUTTON_NAMES.categories).node;
    let hrefButtonCategories: string = location.hash;

    if (this.id === PAGE_IDS.quiz.artists) {
      hrefButtonCategories = `${PAGE_HASHES.categories}-${NAME_CATEGORY.artists}`;
    } else if (this.id === PAGE_IDS.quiz.pictures) {
      hrefButtonCategories = `${PAGE_HASHES.categories}-${NAME_CATEGORY.pictures}`;
    } else {
      hrefButtonCategories = location.hash;
      buttonCategories.classList.add('menu__link_active');
    }

    buttonCategories.setAttribute('href', hrefButtonCategories);
    
    const menuList = new BaseComponent('ul', 'menu__list').node;
    const buttonsMenu = [buttonHome, buttonCategories];
    buttonsMenu.forEach(button => {
      const menuItem = new BaseComponent('li', 'menu__item').node;
      menuItem.append(button);
      menuList.append(menuItem);
    });

    this.node.append(menuList);
  }
}

export default Menu;