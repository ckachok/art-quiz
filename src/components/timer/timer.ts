import './timer.scss';
import BaseComponent from '../base-component';
import { ISettings } from '../../interfaces/interfaces';

class Timer extends BaseComponent {
  private dataSettingsStorage: ISettings = JSON.parse(localStorage.getItem('customSettings'));
  private timerTime: HTMLElement;
  private timerProgress: HTMLProgressElement;
  private timeToAnswer: number;
  private intervalIdProgress: NodeJS.Timer;
  private intervalIdTime: NodeJS.Timer;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.createTimer();
  }

  createTimerProgress(): HTMLProgressElement {
    this.timerProgress = document.createElement('progress');
    this.timerProgress.className = 'timer__progress';
    this.timerProgress.value = 0;
    this.timerProgress.max = 1000;
    return this.timerProgress;
  }

  createTimerTime(): HTMLElement {
    this.timeToAnswer = +this.dataSettingsStorage.counterTimeAnswer;

    this.timerTime = new BaseComponent('div', 'timer__time').node;    
    this.timerTime.innerHTML = '0:' + `0${this.timeToAnswer}`.slice(-2);
    return this.timerTime;
  }

  createTimer(): void {
    const timerCross = new BaseComponent('div', 'timer__cross').node;
    const timerProgress = this.createTimerProgress();
    const timerTime = this.createTimerTime();
  
    this.node.append(timerCross, timerProgress, timerTime);
    this.startTimer();
  }

  startTimer(): void {
    let progressValue = this.timerProgress.value;
    let timeTimer = this.timeToAnswer;
    const maxProgressValue = this.timerProgress.max;
    const time = Math.round(+timeTimer * 1000 / maxProgressValue);

    this.intervalIdProgress = setInterval(() => {
      if (progressValue > maxProgressValue) {
        this.stopTimer();
      } else {
        this.timerProgress.value = progressValue;
      }

      progressValue++;
    }, time);

    this.intervalIdTime = setInterval(() => {
      timeTimer--;
      this.timerTime.innerHTML = '0:' + `0${timeTimer}`.slice(-2);
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.intervalIdProgress);
    clearInterval(this.intervalIdTime);
  }
}

export default Timer;