import BaseComponent from '../base-component';
import GameBoard from './game-board';

class GameBoardPictures extends GameBoard {
  constructor(tagName: string, className: string, questionNumber: number) {
    super(tagName, className, questionNumber);
  }

  async getQuestionText(): Promise<HTMLElement> {
    const questionText = new BaseComponent('p', 'question__text').node;
    const nameArtist = (await this.picturesData.getPictureData(this.questionNumber)).author;
    questionText.innerHTML = `Which is ${nameArtist} picture?`;
    return questionText;
  }
}

export default GameBoardPictures;
