import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import TemplacteLogo from '../resource/img/template.png';

ReactDOM.render(
  <Fragment>
    this is a base template
    <h2>Template is running</h2>
    <img alt="" src={TemplacteLogo} />
  </Fragment>,
  document.getElementById('root'),
);
