import './logo-art-quiz.scss';
import BaseComponent from '../base-component';
import { LOGO_ART_QUIZ } from '../../constants/constants';

class LogoArtQuiz extends BaseComponent {
  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.createLogoArtQuiz();
  }

  createLogoArtQuiz(): void {
    const logoLeftCircle = new BaseComponent('span', 'logo-art-quiz__circle logo-art-quiz__left-circle').node;
    const logoRightCircle = new BaseComponent('span', 'logo-art-quiz__circle logo-art-quiz__right-circle').node;
    const logoText = new BaseComponent('h1', 'logo-art-quiz__text').node;
    logoText.innerHTML = LOGO_ART_QUIZ.text;

    this.node.append(logoLeftCircle, logoRightCircle, logoText);
    this.node.setAttribute('href', LOGO_ART_QUIZ.href);
  }
}

export default LogoArtQuiz;