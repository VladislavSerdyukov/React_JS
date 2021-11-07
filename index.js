import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Message = (props) => {
  return (
    <h1>Текст переданный пропсом: {props.testText}</h1>
  )
};

const App = () => {
  return (
    <div className="app-style-div">
      <h1 className="app-style-header"><Message testText=" это текст пропса"/></h1>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));