import Button from '../button/button';
import Answers from './answers';
import { IAnswersArtists } from '../../interfaces/interfaces';
import { shuffle } from '../../service/functions';
import { QUIZ_INFO } from '../../constants/constants';

class AnswersCategoryArtists extends Answers {
  constructor(questionNumber: number) {
    super(questionNumber);
  }

  async getAnswers(): Promise<IAnswersArtists[]> {
    const arrAnswers: IAnswersArtists[] = [];
    const correctAnswer = (await this.dataArtQuiz.getPictureData(this.questionNumber)).author;
    arrAnswers.push({ name: correctAnswer, correct: true });

    const picturesData = await this.dataArtQuiz.getPicturesData();
    const allArtistsNames = new Set(picturesData.map(picture => picture.author));
    allArtistsNames.delete(correctAnswer);
    const arrIncorrectAnswers = Array.from(allArtistsNames);

    for (let i = 0; i < QUIZ_INFO.numAnswers - 1; i++) {
      const incorrectAnswer = arrIncorrectAnswers[Math.floor(Math.random() * arrIncorrectAnswers.length)];
      arrAnswers.push({ name: incorrectAnswer, correct: false });
    }

    shuffle(arrAnswers);
    return arrAnswers;
  }

  async createAnswersButtons(): Promise<HTMLElement[]> {
    let arrButtons: HTMLElement[];
    const answers = await this.getAnswers();
    return arrButtons = answers.map(answer => {
      const answerButton = new Button('button', 'btn question__answer-artists').node;
      answerButton.innerHTML = answer.name;
      answerButton.addEventListener('click', () => {
        this.handlerAnswerButton(answer, answerButton);
      });
      
      return answerButton;
    })
  }
}

export default AnswersCategoryArtists;