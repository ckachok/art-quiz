import './dev-info.scss';
import BaseComponent from '../base-component';
import { DEV_INFO } from '../../constants/constants';

class DevInfo extends BaseComponent {
  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.createDevInfo();
  }

  createDevInfo(): void {
    const developer = new BaseComponent('a', 'dev-info__developer').node;
    developer.setAttribute('href', DEV_INFO.href);
    developer.innerHTML = DEV_INFO.developer;

    const year = new BaseComponent('span', 'dev-info__year').node;
    year.innerHTML = DEV_INFO.year;

    this.node.append(developer, year);
  }
}

export default DevInfo;