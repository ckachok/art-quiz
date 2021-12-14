import BaseComponent from '../base-component';
import GameBoard from './game-board';
import { QUESTION_TEXT_ARTISTS, QUIZ_INFO } from '../../constants/constants';
import { preloadPicture } from '../../service/functions';

class GameBoardArtists extends GameBoard {
  constructor(tagName: string, className: string, questionNumber: number) {
    super(tagName, className, questionNumber);    
  }

  getQuestionText(): HTMLElement {
    const questionText = new BaseComponent('p', 'question__text').node;
    questionText.innerHTML = QUESTION_TEXT_ARTISTS;
    return questionText;
  }

  createPictureToQuestion(): HTMLElement {
    const picture = new BaseComponent('div', 'question__picture').node;
    const pictureNumber = this.picturesData.getPictureNumber(this.questionNumber);
    const pictureLink = `${QUIZ_INFO.coverLink}${pictureNumber}.jpg`;
    preloadPicture(pictureLink, picture);
    return picture;
  }

  async createGameBoard(): Promise<void> {
    const components = await this.getComponentsGameBoard();
    components.splice(1, 0, this.createPictureToQuestion());
    this.appendToGameBoard(components);
  }
}

export default GameBoardArtists;
