import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';

const ArtistQuestionScreen = ({question, screenIndex, onAnswer}) => {
  const {
    answers,
    // song,
  } = question;

  return (
    <section className="game game--artist">
      <Header />

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
          </div>
        </div>

        <form
          className="game__artist"
          onChange={(evt) => {
            let answer = evt ? evt.target.value : null;
            onAnswer(answer);
          }}
        >
          {
            answers.map((it, i) => (
              <div className="artist" key={`${screenIndex}-answer-${i}`}>
                <input className="artist__input visually-hidden" type="radio" name="answer" value={it.artist} id={`answer-${i}`} />
                <label className="artist__name" htmlFor={`answer-${i}`}>
                  <img className="artist__picture" src={it.picture} alt={it.artist} />
                  {it.artist}
                </label>
              </div>
            ))
          }
        </form>
      </section>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string,
      artist: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string,
      src: PropTypes.string,
    }).isRequired,
  }),
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;
