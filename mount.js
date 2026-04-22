// Shared page template: loads fonts, CSS, React, Babel + Brand.jsx.
// Each page HTML is a thin wrapper around this logic.

function mountPage(renderFn) {
  const root = document.getElementById('root');
  ReactDOM.createRoot(root).render(renderFn());
}
window.mountPage = mountPage;
