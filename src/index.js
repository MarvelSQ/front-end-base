import './index.css';
import TemplacteLogo from '../resource/img/template.png';

const Head = (content, size = 1) => {
  const head = document.createElement(`h${size}`);
  head.innerHTML = content;
  return head;
};

const root = document.getElementById('root');

const img = document.createElement('img');

let view = null;

img.src = TemplacteLogo;

img.addEventListener('click', () => {
  import(/* webpackChunkName: "modal" */ './components/Modal').then((module) => {
    if (!view) {
      const ModalClass = module.default;
      view = new ModalClass(img.cloneNode(false));
    }
    view.show();
  });
});

root.innerHTML = 'this is a base template';
root.appendChild(Head('Template is running', 2));

root.appendChild(img);

// use code split can trigger prefetch/preload be add to document.head
import(/* webpackChunkName: "preload" */ './preload');
