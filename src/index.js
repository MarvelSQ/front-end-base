import './index.css';
import TemplacteLogo from '../resource/img/template.png';

const root = document.getElementById('root');

const img = document.createElement('img');

img.src = TemplacteLogo;

root.innerHTML = 'this is a base template<h2>Template is running</h2>';

root.appendChild(img);
