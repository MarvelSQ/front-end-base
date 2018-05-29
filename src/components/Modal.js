import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

class Modal extends Component {
  onClose = () => {
    const { onClose } = this.props;
    onClose && onClose(false);
  };

  render() {
    const { show } = this.props;
    return ReactDOM.createPortal(
      <div className={`modal ${show ? 'show' : ''}`}>
        <div className="content">{this.props.children}</div>
        <div className="back" onClick={this.onClose} />
      </div>,
      document.body,
    );
  }
}

export default Modal;
