import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';

const GenreQuestionScreen = ({question, screenIndex, onAnswer}) => {
  const {
    genre,
    answers,
  } = question;

  return (
    <section className="game game--genre">
      <Header />

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            if (evt) {
              evt.preventDefault();
            }
            onAnswer();
          }}
        >
          {
            answers.map((answer, i) => (
              <div className="track" key={`${screenIndex}-answer-${i}`}>
                <button className="track__button track__button--play" type="button"></button>
                <div className="track__status">
                  <audio>
                    <source src={answer.src} />
                  </audio>
                </div>
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>
            ))
          }

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    genre: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      genre: PropTypes.string,
    })),
  }),
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
