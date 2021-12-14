import './quiz.scss';
import BaseComponent from '../base-component';
import { NAME_CATEGORY, PAGE_HASHES, QUIZ_INFO } from '../../constants/constants';
import { IQuiz } from '../../interfaces/interfaces';

class Quiz extends BaseComponent {
  private numQuiz: number;
  private nameCategory: string;

  constructor(param: IQuiz) {
    super(param.tagName, param.className);
    this.numQuiz = param.numQuiz;
    this.nameCategory = param.nameCategory;
    this.createQuiz();
  }

  createQuizCounter(): HTMLElement {
    const quizAnswers = new BaseComponent('span', 'quiz__answers quiz__text').node;
    quizAnswers.innerHTML = QUIZ_INFO.numAnswer.toString();

    const quizDelimiter = new BaseComponent('span', 'quiz__delimiter quiz__text').node;
    quizDelimiter.innerHTML = QUIZ_INFO.delimiter;

    const quizQuestions = new BaseComponent('span', 'quiz__questions quiz__text').node;
    quizQuestions.innerHTML = QUIZ_INFO.numQuestions.toString();

    const quizCounter = new BaseComponent('div', 'quiz__counter').node;
    quizCounter.append(quizAnswers, quizDelimiter, quizQuestions);
    return quizCounter;
  }

  createQuizTop(): HTMLElement {
    const quizTitle = new BaseComponent('span', 'quiz__title quiz__text').node;
    quizTitle.innerHTML = `${this.nameCategory} ${this.numQuiz + 1}`;

    const quizCounter = this.createQuizCounter();

    const quizTop = new BaseComponent('div', 'quiz__top').node;
    quizTop.append(quizTitle, quizCounter);
    return quizTop;
  }

  async createQuizCover(): Promise<HTMLElement> {
    let link: string;

    if (this.nameCategory === NAME_CATEGORY.artists) {
      link = `${QUIZ_INFO.coverLink}${this.numQuiz * QUIZ_INFO.numQuestions}.jpg`;
    } else if (this.nameCategory === NAME_CATEGORY.pictures) {
      link = `${QUIZ_INFO.coverLink}${(this.numQuiz + QUIZ_INFO.numQuizzes) * QUIZ_INFO.numQuestions}.jpg`;
    }

    const quizCover = new BaseComponent('div', 'quiz__cover').node;

    const img = new Image();
    img.src = link;
    img.onload = () => {
      quizCover.style.backgroundImage = `url("${link}")`;
    };

    return quizCover;
  }

  createQuizScore(): HTMLElement {
    const starsContainer = new BaseComponent('div', 'quiz__stars-container').node;

    for (let i = 0; i < QUIZ_INFO.numStars; i++) {
      starsContainer.append(new BaseComponent('div', 'quiz-star').node);
    }

    const scoreText = new BaseComponent('p', 'quiz__text').node;
    scoreText.innerHTML = QUIZ_INFO.scoreText;

    const quizScore = new BaseComponent('a', 'quiz__score').node;
    quizScore.setAttribute('href', `${PAGE_HASHES.score}-${this.nameCategory}-${this.numQuiz + 1}`);
    quizScore.append(scoreText, starsContainer);
    return quizScore;
  }

  async createQuiz(): Promise<void> {
    const href = `${PAGE_HASHES.quiz}-${this.nameCategory}-${this.numQuiz + 1}`;
    this.node.setAttribute('href', href);

    const [quizTop, quizCover, quizScore] = [this.createQuizTop(), await this.createQuizCover(), this.createQuizScore()];
    this.node.append(quizTop, quizCover, quizScore);
  }
}

export default Quiz