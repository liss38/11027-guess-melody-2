import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';

class App extends Component {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime,
        errorCount,
      } = props;
      return <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        onWelcomeButtonClick={onUserAnswer}
      />;
    } else {
      const {questions} = props;
      const currentQuestion = questions[question];

      switch (currentQuestion.type) {
        case `artist`: return <ArtistQuestionScreen
          screenIndex={question}
          question={currentQuestion}
          onAnswer={onUserAnswer}
        />;
        case `genre`: return <GenreQuestionScreen
          screenIndex={question}
          question={currentQuestion}
          onAnswer={onUserAnswer}
        />;
      }

      return null;
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
      errorCount: 0,
    };
  }

  render() {
    const {
      questions,
    } = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, (answerCheck) => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          ...prevState,
          question: !isEnd ? nextIndex : -1,
          errorCount: answerCheck ? prevState.errorCount : prevState.errorCount + 1,
        };
      });
    });
  }
}

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  questions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf([`genre`, `artist`]),
    genre: PropTypes.string,
    song: PropTypes.shape({
      artist: PropTypes.string,
      src: PropTypes.string,
    }),
    answers: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.shape({
        src: PropTypes.string,
        genre: PropTypes.string,
      }),
      PropTypes.shape({
        picture: PropTypes.string,
        artist: PropTypes.string,
      }),
    ])),
  })),
};

export default App;
