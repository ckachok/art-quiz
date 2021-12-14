import './indicators.scss'
import BaseComponent from '../base-component';
import { QUIZ_INFO } from '../../constants/constants';

class Indicators extends BaseComponent {
  public indicators: Element[];

  constructor(tagName: string, className: string) {
    super (tagName, className);
    this.createIndicators();
    this.indicators = Array.from(this.node.children);
  }

  createIndicators(): void {
    for (let i = 0; i < QUIZ_INFO.numQuestions; i++) {
      const indicator = new BaseComponent('span', 'indicators__item').node;
      this.node.append(indicator);
    }
  }
}

export default Indicators