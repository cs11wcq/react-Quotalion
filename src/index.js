import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import Routing from './routing'
import AppContext from './AppContext'
import ContextAPI from './contextapi'
ReactDOM.render(
  // <div>
  //   <ContextAPI />
  // </div>,
  // <AppContext.Provider>
    <React.StrictMode>
      <Routing />
    </React.StrictMode>,
  // </AppContext.Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
