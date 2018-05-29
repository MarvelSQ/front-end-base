// use this module to load resource earlier

export default () => {
  import(/* webpackChunkName: "modal" */ /* webpackPrefetch: true */ './components/Modal.js');
  // import(/* webpackPrefetch: true */ './components/modal.css');
};
