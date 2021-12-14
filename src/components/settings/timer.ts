import { DEFAULT_COUNTER_TIME_ANSWER } from '../../constants/constants';
import BaseComponent from '../base-component';
import Button from '../button/button';

const [minus, plus]: string[] = ['-', '+'];

class TimerSettings extends BaseComponent {
  private buttonMinus: HTMLElement;
  private buttonPlus: HTMLElement;
  public counterTimeAnswer: HTMLInputElement;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.createVolumeContainer();
  }

  createButtonToChangeTime(tagName: string, className: string, text: string): HTMLElement {
    const button = new Button(tagName, className, text).node;
    button.addEventListener('click', this.changeTimeAnswer.bind(this, text));
    return button;
  }

  createCounterTimeAnswer(): HTMLInputElement {
    const counter = document.createElement('input');
    counter.className ='settings__time-counter';
    counter.type = 'number';
    counter.min = DEFAULT_COUNTER_TIME_ANSWER.min;
    counter.max = DEFAULT_COUNTER_TIME_ANSWER.max;
    counter.value = DEFAULT_COUNTER_TIME_ANSWER.value;
    counter.step = DEFAULT_COUNTER_TIME_ANSWER.step;
    counter.readOnly = DEFAULT_COUNTER_TIME_ANSWER.readonly;
    return counter;
  }

  changeTimeAnswer(buttonActiveText: string): void {
    if (buttonActiveText === minus) {
      this.counterTimeAnswer.stepDown();
    } else if (buttonActiveText === plus) {
      this.counterTimeAnswer.stepUp();
    }
  }

  createVolumeContainer(): void {
    this.buttonMinus = this.createButtonToChangeTime('button', 'settings__btn-minus', minus);
    this.buttonPlus = this.createButtonToChangeTime('button', 'settings__btn-plus', plus);
    this.counterTimeAnswer = this.createCounterTimeAnswer();

    this.node.append(this.buttonMinus, this.counterTimeAnswer, this.buttonPlus);
  }
}

export default TimerSettings;