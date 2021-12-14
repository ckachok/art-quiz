import './button.scss';
import BaseComponent from '../base-component';

class Button extends BaseComponent {
  constructor(tagName: string, className: string, text: string = '') {
    super(tagName, className);
    this.node.innerHTML = text;
  }
}

export default Button;