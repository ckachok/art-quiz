import { DEFAULT_VOLUME_SETTINGS } from '../../constants/constants';
import BaseComponent from '../base-component';

class VolumeSettings extends BaseComponent {
  public buttonVolume: HTMLElement;
  public progressVolume: HTMLInputElement;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.createVolumeContainer();
  }

  createButtonVolume(): HTMLElement {
    const buttonVolume = new BaseComponent('button', 'settings__btn-volume').node;
    buttonVolume.addEventListener('click', this.changeVolume.bind(this, buttonVolume.tagName));
    return buttonVolume;
  }

  createProgressVolume(): HTMLInputElement {
    const progressVolume = document.createElement('input');
    progressVolume.className ='settings__progress-volume';
    progressVolume.type = 'range';
    progressVolume.min = DEFAULT_VOLUME_SETTINGS.min;
    progressVolume.max = DEFAULT_VOLUME_SETTINGS.max;
    progressVolume.value = DEFAULT_VOLUME_SETTINGS.value;
    progressVolume.addEventListener('input', this.changeVolume.bind(this, progressVolume.tagName));
    return progressVolume;
  }

  changeVolume(trigger: string): void {
    if (trigger === this.buttonVolume.tagName) {
      if (this.buttonVolume.classList.contains('settings__btn-mute')) {
        this.buttonVolume.classList.remove('settings__btn-mute');
        this.progressVolume.value = DEFAULT_VOLUME_SETTINGS.value;
        this.progressVolume.style.background = '';
      } else {
        this.buttonVolume.classList.add('settings__btn-mute');
        this.progressVolume.value = DEFAULT_VOLUME_SETTINGS.min;
        this.progressVolume.style.background = `linear-gradient(to right, #b8860b 0%, #b8860b ${DEFAULT_VOLUME_SETTINGS.min}%, #c4c4c4 ${DEFAULT_VOLUME_SETTINGS.min}%, #c4c4c4 100%)`;
      }
    } else if (trigger === this.progressVolume.tagName) {
      if (this.progressVolume.value === DEFAULT_VOLUME_SETTINGS.min) {
        this.buttonVolume.classList.add('settings__btn-mute');
        this.progressVolume.style.background = `linear-gradient(to right, #b8860b 0%, #b8860b ${DEFAULT_VOLUME_SETTINGS.min}%, #c4c4c4 ${DEFAULT_VOLUME_SETTINGS.min}%, #c4c4c4 100%)`;
      } else {
        this.buttonVolume.classList.remove('settings__btn-mute');
        this.progressVolume.style.background = `linear-gradient(to right, #b8860b 0%, #b8860b ${this.progressVolume.value}%, #c4c4c4 ${this.progressVolume.value}%, #c4c4c4 100%)`;
      }
    }
  }

  createVolumeContainer(): void {
    this.buttonVolume = this.createButtonVolume();
    this.progressVolume = this.createProgressVolume();

    this.node.append(this.buttonVolume, this.progressVolume);
  }
}

export default VolumeSettings;