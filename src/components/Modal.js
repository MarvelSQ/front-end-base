import './modal.css';

const createElement = (tag, classnames) => {
  const ele = document.createElement(tag);
  ele.className = classnames;
  return ele;
};

export default class Modal {
  constructor(body) {
    const modal = createElement('div', 'modal');
    this.modal = modal;
    this.content = createElement('div', 'content');
    this.content.appendChild(body);
    this.back = createElement('div', 'back');
    this.back.addEventListener('click', () => {
      this.close();
    });
    this.modal.appendChild(this.back);
    this.modal.appendChild(this.content);
    document.body.appendChild(this.modal);
  }

  show() {
    this.modal.classList.add('show');
  }

  close() {
    this.modal.classList.remove('show');
  }
}
