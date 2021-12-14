import './category-page.scss';
import BaseComponent from '../../components/base-component';
import Page from '../page';
import Quiz from '../../components/quiz/quiz';
import { NAME_CATEGORY, PAGE_IDS, QUIZ_INFO } from '../../constants/constants';
import { IQuiz } from '../../interfaces/interfaces';

class CategoryPage extends Page {
  constructor(id: string) {
    super(id);
  }

  createMain(): HTMLElement {
    const mainContainer = new BaseComponent('div', 'container main__container').node;

    let category: string;

    if (this.id === PAGE_IDS.categories.artists) {
      category = NAME_CATEGORY.artists;
    } else if (this.id === PAGE_IDS.categories.pictures) {
      category = NAME_CATEGORY.pictures;
    }

    for (let i = 0; i < QUIZ_INFO.numQuizzes; i++) {
      const quizParam: IQuiz = { tagName: 'a', className: 'quiz', nameCategory: category, numQuiz: i };
      const quiz = new Quiz(quizParam).node;
      mainContainer.append(quiz);
    }

    const main = new BaseComponent('main').node;
    main.append(mainContainer);
    return main;
  }
}

export default CategoryPage;