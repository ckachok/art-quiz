import './logo-rsschool.scss';
import BaseComponent from '../base-component';
import { LOGO_RSS } from '../../constants/constants';

class LogoRsschool extends BaseComponent {
  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.node.setAttribute('href', LOGO_RSS.href);
  }
}

export default LogoRsschool;