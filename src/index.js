import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

import './index.css';
import TemplacteLogo from '../resource/img/template.png';

const Modal = Loadable({
  loader: () => import(/* webpackChunkName: "modal" */ './components/Modal'),
  loading: () => <div />,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  onToggle = state => {
    if (state !== undefined) this.setState({ show: state });
    this.setState({ show: !this.state.show });
  };

  render() {
    const { show } = this.state;
    return (
      <Fragment>
        this is a base template
        <h2>Template is running</h2>
        <img alt="" src={TemplacteLogo} onClick={this.onToggle} />
        {show && (
          <Modal show={show} onClose={this.onToggle}>
            <img alt="" src={TemplacteLogo} />
          </Modal>
        )}
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

import(/* webpackChunkName: "preload" */ './preload');
