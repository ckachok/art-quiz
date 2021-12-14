import { NAME_CATEGORY, PATH_DATA_QUIZ, QUIZ_INFO } from '../../constants/constants';
import { IPicturesData } from '../../interfaces/interfaces';

class PicturesData {
  async getPicturesData(): Promise<IPicturesData[]> {
    const res = await fetch(PATH_DATA_QUIZ);
    const dataQuiz: IPicturesData[] = await res.json();
    return dataQuiz;
  }

  getPictureNumber(questionNumber: number): number {
    const pageHash = location.hash;
    const quizNumber = +pageHash.match(/[0-9]+/)[0];
    let pictureNumber: number;
    
    if (pageHash.includes(NAME_CATEGORY.artists)) {
      pictureNumber = (quizNumber - 1) * QUIZ_INFO.numQuestions + questionNumber;
    } else if (pageHash.includes(NAME_CATEGORY.pictures)) {
      pictureNumber = (quizNumber - 1 + QUIZ_INFO.numQuizzes) * QUIZ_INFO.numQuestions + questionNumber;
    }
    
    return pictureNumber;
  }

  async getPictureData(questionNumber: number): Promise<IPicturesData> {
    const pictureNumber = this.getPictureNumber(questionNumber);
    const picturesData = await this.getPicturesData();
    const pictureData = picturesData[pictureNumber];
    return pictureData;
  }
}

export default PicturesData;