import QuestionsPage from '../../pages/questions-page/questions-page';
import PopUpAnswer from '../popup-answer/popup-answer';
import Timer from '../timer/timer';
import GameBoard from './game-board';
import PicturesData from './pictures-data';
import { IAnswersArtists, IAnswersPicture } from '../../interfaces/interfaces';
import { NAME_CATEGORY } from '../../constants/constants';

abstract class Answers {
  protected questionNumber: number;
  protected timer: Timer = GameBoard.timer;
  protected indicators: HTMLCollection = GameBoard.indicatorsContainer.node.children;
  protected dataArtQuiz: PicturesData = new PicturesData();
  protected popUp: PopUpAnswer = QuestionsPage.popUp;
  public answersButtons: Promise<HTMLElement[]>

  constructor(questionNumber: number) {
    this.questionNumber = questionNumber;
    this.answersButtons = this.createAnswersButtons();
  }

  handlerAnswerButton(answer: IAnswersArtists | IAnswersPicture, button: HTMLElement): void {
    this.timer.stopTimer();
    this.popUp.node.classList.add('pop-up_visible');

    if (answer.correct) {
      this.popUp.checkItem.classList.add('pop-up__check-item_true');
      this.indicators[this.questionNumber].classList.add('indicators__item_correct');
      location.hash.includes(NAME_CATEGORY.artists) ?
        button.classList.add('question__answer-artists_correct') :
        button.classList.add('question__answer-pictures_correct');
    } else {
      this.popUp.checkItem.classList.add('pop-up__check-item_false');
      this.indicators[this.questionNumber].classList.add('indicators__item_incorrect');
      location.hash.includes(NAME_CATEGORY.artists) ?
        button.classList.add('question__answer-artists_incorrect') :
        button.classList.add('question__answer-pictures_incorrect');          
    }
  }

  abstract getAnswers(): Promise<IAnswersArtists[]> | Promise<IAnswersPicture[]>

  abstract createAnswersButtons(): Promise<HTMLElement[]>
}

export default Answers;