import './settings.scss';
import BaseComponent from '../base-component';
import Button from '../button/button';
import VolumeSettings from './volume';
import TimeGameSettings from './time-game';
import TimerSettings from './timer';
import { BUTTON_NAMES, DEFAULT_COUNTER_TIME_ANSWER, DEFAULT_VOLUME_SETTINGS, SETTINGS_TITLES, SWITCH_TIME_GAME } from '../../constants/constants';
import { ISettings } from '../../interfaces/interfaces';

class Settings extends BaseComponent {
  private volumeSettings: VolumeSettings;
  private timeGameSettings: TimeGameSettings;
  private timerSettings: TimerSettings;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.createSettings();
  }

  createSettingsTitle(title: string): HTMLElement {
    const settingsTitle = new BaseComponent('h2', 'settings__title').node;
    settingsTitle.innerHTML = title;
    return settingsTitle;
  }

  createVolumeBlock(): HTMLElement {
    const titleVolume = this.createSettingsTitle(SETTINGS_TITLES.volume);

    this.volumeSettings = new VolumeSettings('div', 'settings__volume-container');
    const volumeContainer = this.volumeSettings.node;

    const volumeBlock = new BaseComponent('div', 'settings__block').node;
    volumeBlock.append(titleVolume, volumeContainer);
    return volumeBlock;
  }

  createTimeGameBlock(): HTMLElement {
    const titleTimeGame = this.createSettingsTitle(SETTINGS_TITLES.timeGame);
    this.timeGameSettings = new TimeGameSettings('div', 'settings__time-game-container');
    const containerTimeGame = this.timeGameSettings.node;

    const timeGameBlock = new BaseComponent('div', 'settings__block').node;
    timeGameBlock.append(titleTimeGame, containerTimeGame);
    return timeGameBlock;
  }

  createTimeAnswerBlock(): HTMLElement {
    const titleTimeAnswer = this.createSettingsTitle(SETTINGS_TITLES.timeAnswer);
    this.timerSettings = new TimerSettings('div', 'settings__time-answer-container');
    const containerTimeAnswer = this.timerSettings.node;

    const timeAnswerBlock = new BaseComponent('div', 'settings__block').node;
    timeAnswerBlock.append(titleTimeAnswer, containerTimeAnswer);
    return timeAnswerBlock;
  }

  createDefaultButton(): HTMLElement {
    const defaultButton = new Button('a', 'btn', BUTTON_NAMES.default).node;
    defaultButton.addEventListener('click', this.setDefaultSettings.bind(this));
    return defaultButton;
  }

  createSaveButton(): HTMLElement {
    const saveButton = new Button('a', 'btn', BUTTON_NAMES.save).node;
    saveButton.addEventListener('click', this.saveSettings.bind(this));
    return saveButton;
  }

  setDefaultSettings(): void {
    this.volumeSettings.buttonVolume.classList.remove('settings__btn-mute');
    this.volumeSettings.progressVolume.style.background = '';
    this.volumeSettings.progressVolume.value = DEFAULT_VOLUME_SETTINGS.value;
    this.timeGameSettings.switchTimeGame.checked = false;
    this.timeGameSettings.switchTimeGameText.innerHTML = SWITCH_TIME_GAME.off;
    this.timerSettings.counterTimeAnswer.value = DEFAULT_COUNTER_TIME_ANSWER.value;
  }

  saveSettings(): void {
    const customSettings: ISettings = {
      volume: this.volumeSettings.progressVolume.value,
      timerModes: this.timeGameSettings.switchTimeGame.checked,
      counterTimeAnswer: this.timerSettings.counterTimeAnswer.value
    };

    localStorage.setItem('customSettings', JSON.stringify(customSettings));
  }

  createSettings(): void {
    const volumeBlock = this.createVolumeBlock();
    const timeGameBlock = this.createTimeGameBlock();
    const timeAnswerBlock = this.createTimeAnswerBlock();

    const defaultButton = this.createDefaultButton();
    const saveButton = this.createSaveButton();
    const buttonsContainer = new BaseComponent('div', 'settings__buttons-container').node;
    buttonsContainer.append(defaultButton, saveButton);

    this.node.append(volumeBlock, timeGameBlock, timeAnswerBlock, buttonsContainer);
  }
}

export default Settings;