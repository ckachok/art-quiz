import './questions-page.scss';
import BaseComponent from '../../components/base-component';
import Page from '../page';
import Menu from '../../components/menu/menu';
import LogoArtQuiz from '../../components/logo-art-quiz/logo-art-quiz';
import PopUpAnswer from '../../components/popup-answer/popup-answer';
import GameBoardArtists from '../../components/game-board/game-board-artists';
import GameBoardPictures from '../../components/game-board/game-board-pictures';
import { NAME_CATEGORY, QUIZ_INFO } from '../../constants/constants';

class QuestionsPage extends Page {
  private numQuestion: number = 0;
  static popUp: PopUpAnswer;
  
  constructor(id: string) {
    super(id);
  }

  createHeader(): HTMLElement {
    const logoArtQuiz = new LogoArtQuiz('a', 'logo-art-quiz header__logo-art-quiz').node;

    const menu = new Menu('nav', 'menu', this.id).node;

    const headerContainer = new BaseComponent('div', 'container header__container').node;
    headerContainer.append(logoArtQuiz, menu);

    const header = new BaseComponent('header', 'header').node;
    header.append(headerContainer);
    return header;    
  }

  createMain(): HTMLElement {
    const gameBoard = (location.hash.includes(NAME_CATEGORY.artists)) ? 
      new GameBoardArtists('div', 'question', this.numQuestion):
      new GameBoardPictures('div', 'question', this.numQuestion);
  
    const mainContainer = new BaseComponent('div', 'container main__container').node;
    mainContainer.append(gameBoard.node);
    
    const main = new BaseComponent('main', 'main').node;
    main.append(mainContainer);
    return main;
  }

  async render(): Promise<HTMLElement> {
    QuestionsPage.popUp = new PopUpAnswer('div', 'pop-up', this.numQuestion);
    QuestionsPage.popUp.nextButton.addEventListener('click', () => {
      this.numQuestion++;
  
      if (this.numQuestion < QUIZ_INFO.numQuestions) {
        this.container.innerHTML = '';
        this.render();
      }
    })

    const [header, main, footer] = [this.createHeader(), this.createMain(), this.createFooter()];
    this.container.append(header, main, footer, QuestionsPage.popUp.node);
    this.container.id = this.id;
    return this.container;
  }
}

export default QuestionsPage;