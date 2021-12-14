import './page.scss';
import BaseComponent from '../components/base-component';
import LogoRsschool from '../components/logo-rsschool/logo-rsschool';
import DevInfo from '../components/dev-info/dev-info';
import Button from '../components/button/button';
import LogoArtQuiz from '../components/logo-art-quiz/logo-art-quiz';
import Menu from '../components/menu/menu';
import { PAGE_HASHES } from '../constants/constants';

abstract class Page {
  protected id: string;
  protected container: HTMLElement;

  constructor(id: string) {
    this.id = id;
    this.container = document.body;
  }

  createHeader(): HTMLElement {
    const logoArtQuiz = new LogoArtQuiz('a', 'logo-art-quiz header__logo-art-quiz').node;

    const menu = new Menu('nav', 'menu', this.id).node;

    const settingButton = new Button('a', 'btn-settings btn-settings_open').node;
    settingButton.setAttribute('href', PAGE_HASHES.settings);

    const headerContainer = new BaseComponent('div', 'container header__container').node;
    headerContainer.append(logoArtQuiz, menu, settingButton);

    const header = new BaseComponent('header', 'header').node;
    header.append(headerContainer);
    return header;
  }

  createMain(): HTMLElement {
    const mainContainer = new BaseComponent('div', 'container main__container').node;

    const main = new BaseComponent('main').node;
    main.append(mainContainer);
    return main;
  }

  createFooter(): HTMLElement {
    const logoRss = new LogoRsschool('a', 'logo-rsschool').node;
    const devInfo = new DevInfo('div', 'dev-info').node;

    const footerContainer = new BaseComponent('div', 'container footer__container').node;
    footerContainer.append(logoRss, devInfo);

    const footer = new BaseComponent('footer', 'footer').node;
    footer.append(footerContainer);
    return footer;
  }

  async render(): Promise<HTMLElement> {
    const [header, main, footer] = [this.createHeader(), this.createMain(), this.createFooter()];
    this.container.append(header, main, footer);
    this.container.id = this.id;
    return this.container;
  }
}

export default Page;