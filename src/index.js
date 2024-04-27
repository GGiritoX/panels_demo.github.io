import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/styles.css";
import "./css/fadeanim.css";
// import "./css/panels.css"; >> home.jsx
// import "./css/bwstyle.css"; >> home.jsx
// import "./css/header.css"; >> header-main.jsx, header-project.jsx
// import "./css/footer.css" >> footer.jsx
// import "./css/sidemenu.css"; >> sidemenu.jsx


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);