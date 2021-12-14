import { ISettings } from '../interfaces/interfaces';

export const CUSTOM_SETTINGS: ISettings = {
  volume: '20',
  timerModes: true,
  counterTimeAnswer: '5'
};

export const BUTTON_NAMES = {
  artistQuiz: 'Artist quiz',
  pictureQuiz: 'Picture quiz',
  default: 'Default',
  save: 'Save',
  home: 'Home',
  categories: 'Categories'
};

export const SETTINGS_TITLES = {
  volume: 'Volume',
  timeGame: 'Time game',
  timeAnswer: 'Time to answer'
};

export const DEFAULT_VOLUME_SETTINGS = {
  min: '0',
  max: '100',
  value: '30'
};

export const SWITCH_TIME_GAME = {
  on: 'On',
  off: 'Off'
};

export const DEFAULT_COUNTER_TIME_ANSWER = {
  min: '5',
  max: '30',
  value: '5',
  step: '5',
  readonly: true
};

export const PAGE_TITLE = {
  home: 'Home',
  categories: 'Categories',
  setting: 'Setting'
};

export const LOGO_ART_QUIZ = {
  text: '<span>Art</span> Quiz',
  href: 'index.html'
};

export const LOGO_RSS = {
  href: 'https://rs.school/js/'
};

export const DEV_INFO = {
  href: 'https://github.com/ckachok',
  developer: 'App developer: Sergei Hul',
  year: '2021'
};

export const NAME_CATEGORY = {
  artists: 'artists',
  pictures: 'pictures'
}

export const PAGE_IDS = {
  home: 'home',
  settings: 'settings',
  categories: {
    artists: `category-${NAME_CATEGORY.artists}`,
    pictures: `category-${NAME_CATEGORY.pictures}`
  },
  quiz: {
    artists: `quiz-${NAME_CATEGORY.artists}`,
    pictures: `quiz-${NAME_CATEGORY.pictures}`
  }
};

export const PAGE_HASHES = {
  home: '#home',
  settings: '#settings',
  categories: '#categories',
  quiz: '#quiz',
  score: '#score-quiz',
};

export const QUIZ_INFO = {
  numAnswer: 0,
  numQuestions: 10,
  numQuizzes: 12,
  numStars: 3,
  numAnswers: 4,
  delimiter: '/',
  scoreText: 'Score',
  coverLink: `https://raw.githubusercontent.com/ckachok/image-data/master/img/`
};

export const PATH_DATA_QUIZ = 'data/pictures.json';

export const QUESTION_TEXT_ARTISTS = 'Who is the author of this picture?';
