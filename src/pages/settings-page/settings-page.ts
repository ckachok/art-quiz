import './settings-page.scss';
import BaseComponent from '../../components/base-component';
import Page from '../page';
import Button from '../../components/button/button';
import Settings from '../../components/settings/settings';
import { oldHash } from '../../index';
import { PAGE_TITLE } from '../../constants/constants';

class SettingsPage extends Page {
  constructor(id: string) {
    super(id);     
  }

  createHeader(): HTMLElement {
    const titlePage = new BaseComponent('h1', 'title').node;
    titlePage.innerHTML = PAGE_TITLE.setting;

    const settingsButton = new Button('a', 'btn-settings btn-settings_open btn-settings_close').node;
    settingsButton.setAttribute('href', oldHash);
  
    const headerContainer = new BaseComponent('div', 'container header__container').node;
    headerContainer.append(titlePage,settingsButton);

    const header = new BaseComponent('header', 'header').node;
    header.append(headerContainer);
    return header;
  }

  createMain(): HTMLElement {
    const settings = new Settings('div', 'settings').node;

    const mainContainer = new BaseComponent('div', 'container main__container').node;
    mainContainer.append(settings);

    const main = new BaseComponent('main').node;
    main.append(mainContainer);
    return main;
  }
}

export default SettingsPage;