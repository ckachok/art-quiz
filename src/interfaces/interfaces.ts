export interface IPicturesData {
  author: string;
  name: string;
  year: string;
  pictureNum: string;
}

export interface ISettings {
  volume: string;
  timerModes: boolean;
  counterTimeAnswer: string;
}

export interface IAnswersArtists {
  name: string;
  correct: boolean;
}

export interface IAnswersPicture {
  pictureNumber: string;
  correct: boolean;
}

export interface IQuiz {
  tagName: string;
  className: string;
  nameCategory: string;
  numQuiz: number;
}

