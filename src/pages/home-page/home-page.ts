import './home-page.scss';
import BaseComponent from '../../components/base-component';
import Page from '../page';
import Button from '../../components/button/button';
import LogoArtQuiz from '../../components/logo-art-quiz/logo-art-quiz';
import { BUTTON_NAMES, NAME_CATEGORY, PAGE_HASHES } from '../../constants/constants';

class HomePage extends Page {
  constructor(id: string) {
    super(id);
  }

  createHeader(): HTMLElement {
    const settingButton = new Button('a', 'btn-settings btn-settings_open').node;
    settingButton.setAttribute('href', PAGE_HASHES.settings);

    const headerContainer = new BaseComponent('div', 'container header__container').node;
    headerContainer.append(settingButton);

    const header = new BaseComponent('header', 'header').node;
    header.append(headerContainer);
    return header;
  }

  createMain(): HTMLElement {
    const logoArtQuiz = new LogoArtQuiz('a', 'logo-art-quiz main__logo-art-quiz').node;

    const buttonArtist = new Button('a', 'btn home-page__btn', BUTTON_NAMES.artistQuiz).node;
    buttonArtist.setAttribute('href', `${PAGE_HASHES.categories}-${NAME_CATEGORY.artists}`);
    const buttonPicture = new Button('a', 'btn home-page__btn', BUTTON_NAMES.pictureQuiz).node;
    buttonPicture.setAttribute('href', `${PAGE_HASHES.categories}-${NAME_CATEGORY.pictures}`);

    const buttonContainer = new BaseComponent('div', 'home-page__controls').node;
    buttonContainer.append(buttonArtist, buttonPicture);

    const mainContainer = new BaseComponent('div', 'container main__container').node;
    mainContainer.append(logoArtQuiz, buttonContainer);

    const main = new BaseComponent('main').node;
    main.append(mainContainer);
    return main;
  }
}

export default HomePage;