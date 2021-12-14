import { SWITCH_TIME_GAME } from '../../constants/constants';
import BaseComponent from '../base-component';

class TimeGameSettings extends BaseComponent {
  public switchTimeGame: HTMLInputElement;
  public switchTimeGameText: HTMLElement;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.createTimeGameContainer();
  }

  createSwitcherTimeGame(): HTMLInputElement {
    const switcher = document.createElement('input');
    switcher.className ='settings__on-off-switcher';
    switcher.type = 'checkbox';
    switcher.addEventListener('click', this.changeSwitcher.bind(this));
    return switcher;
  }

  changeSwitcher(): void {
    if (this.switchTimeGame.classList.contains('active')) {
      this.switchTimeGameText.innerHTML = SWITCH_TIME_GAME.off;
      this.switchTimeGame.classList.remove('active');
    } else {
      this.switchTimeGameText.innerHTML = SWITCH_TIME_GAME.on;
      this.switchTimeGame.classList.add('active');
    }
  }

  createTimeGameContainer(): void {
    this.switchTimeGameText = new BaseComponent('p', 'settings__on-off-text').node;
    this.switchTimeGameText.innerHTML = SWITCH_TIME_GAME.off;

    this.switchTimeGame = this.createSwitcherTimeGame();

    this.node.append(this.switchTimeGameText, this.switchTimeGame);
  }
}

export default TimeGameSettings;