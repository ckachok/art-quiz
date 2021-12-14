import Button from '../button/button';
import Answers from './answers';
import { QUIZ_INFO } from '../../constants/constants';
import { IAnswersPicture } from '../../interfaces/interfaces';
import { preloadPicture, shuffle } from '../../service/functions';

class AnswersCategoryPictures extends Answers {
  constructor(questionNumber: number) {
    super(questionNumber);
  }

  async getAnswers(): Promise<IAnswersPicture[]> {
    const arrAnswers: IAnswersPicture[] = [];
    const correctPictureNumber = (await this.dataArtQuiz.getPictureData(this.questionNumber));
    arrAnswers.push({ pictureNumber: correctPictureNumber.pictureNum, correct: true });

    const picturesData = await this.dataArtQuiz.getPicturesData();
    const incorrectPictureNumbers = picturesData.reduce((acc, picture) => {
      if (picture.author !== correctPictureNumber.author) {
        acc.push(picture.pictureNum);
        return acc;
      }
      return acc;
    }, []);

    for (let i = 0; i < QUIZ_INFO.numAnswers - 1; i++) {
      const incorrectPictureNumber = incorrectPictureNumbers[Math.floor(Math.random() * incorrectPictureNumbers.length)];
      arrAnswers.push({ pictureNumber: incorrectPictureNumber, correct: false });
    }

    shuffle(arrAnswers);
    return arrAnswers;
  }

  async createAnswersButtons(): Promise<HTMLElement[]> {
    let arrButtons: HTMLElement[];
    const answers = await this.getAnswers();
    return arrButtons = answers.map(answer => {
      const answerButton = new Button('div', 'question__answer-pictures').node;
      const pictureLink = `${QUIZ_INFO.coverLink}${answer.pictureNumber}.jpg`;
      preloadPicture(pictureLink, answerButton);
      answerButton.addEventListener('click', () => {
        this.handlerAnswerButton(answer, answerButton);
      });
      
      return answerButton;
    })
  }
}

export default AnswersCategoryPictures;
