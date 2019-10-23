import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {questions, settings} from './mocks/questions.js';

const init = (gameQuestions, gameSettings) => {
  ReactDOM.render(
      <App
        gameTime={gameSettings.gameTime}
        errorCount={gameSettings.errorCount}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions, settings);
