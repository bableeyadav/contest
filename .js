comp.js
const WrappedApp = withMountHOC(App);
ReactDOM.render(
  WrappedApp,
  document.getElementById('root')
);