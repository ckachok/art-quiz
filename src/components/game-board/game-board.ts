import BaseComponent from '../base-component';
import Indicators from '../indicators/indicators';
import PicturesData from './pictures-data';
import Timer from '../timer/timer';
import AnswersCategoryArtists from './answers-category-artists';
import AnswersCategoryPictures from './answers-category-pictures';
import { ISettings } from '../../interfaces/interfaces';
import { NAME_CATEGORY } from '../../constants/constants';

abstract class GameBoard extends BaseComponent {
  protected dataSettingsStorage: ISettings = JSON.parse(localStorage.getItem('customSettings'));
  static timer: Timer;
  static indicatorsContainer: Indicators;
  protected picturesData: PicturesData = new PicturesData();
  protected questionNumber: number;

  constructor(tagName: string, className: string, questionNumber: number) {
    super(tagName, className);
    this.questionNumber = questionNumber;
    GameBoard.timer = new Timer('div', 'timer');
    GameBoard.indicatorsContainer = new Indicators('div', 'indicators');
    this.createGameBoard();
  }

  abstract getQuestionText(): HTMLElement | Promise<HTMLElement>

  async createAnswersButtons(): Promise<HTMLElement> {
    const answersButtonsContainer = new BaseComponent('div', 'question__answers-container').node;
    const answersButtons = location.hash.includes(NAME_CATEGORY.artists) ?
                           await new AnswersCategoryArtists(this.questionNumber).answersButtons :
                           await new AnswersCategoryPictures(this.questionNumber).answersButtons;
    answersButtons.forEach(button => {
      answersButtonsContainer.append(button);
    });
    return answersButtonsContainer;
  }

  async getComponentsGameBoard(): Promise<HTMLElement[]> {
    const [questionText, answers, indicators] = 
          [await this.getQuestionText(), await this.createAnswersButtons(), GameBoard.indicatorsContainer.node];
    const components = [questionText, indicators, answers];
    return components;
  }

  appendToGameBoard(components: HTMLElement[]): void {
    const allComponents = this.dataSettingsStorage.timerModes ? [GameBoard.timer.node, ...components] : [...components];
    this.node.append(...allComponents);
  }

  async createGameBoard(): Promise<void> {
    const components = await this.getComponentsGameBoard();
    this.appendToGameBoard(components);
  }
}

export default GameBoard;
