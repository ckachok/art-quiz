class BaseComponent {
  public node: HTMLElement;

  constructor(tagName = 'div', className = '') {
    const element = document.createElement(tagName);
    element.className = className;
    this.node = element;
  }
}

export default BaseComponent;