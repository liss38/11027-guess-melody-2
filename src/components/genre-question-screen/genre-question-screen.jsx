import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import AudioPlayer from '../audio-player/audio-player.jsx';

// const GenreQuestionScreen = ({question, screenIndex, onAnswer}) => {
class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1,
    };
  }

  render() {
    const {
      question,
      screenIndex,
      onAnswer,
    } = this.props;

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
              evt.preventDefault();
              onAnswer();
            }}
          >
            {
              answers.map((answer) => {
                const trackKey = `${screenIndex}-${answer.id}`;

                return (
                  <div className="track" key={trackKey}>
                    <AudioPlayer
                      isPlaying={trackKey === this.state.activePlayer}
                      src={answer.src}
                      onPlayButtonClick={() => this.setState({
                        activePlayer: this.state.activePlayer === trackKey ? -1 : trackKey
                      })}
                    />
                    <div className="game__answer">
                      <input className="game__input visually-hidden" type="checkbox" name="answer" value={`${answer.genre}`} id={trackKey} />
                      <label className="game__check" htmlFor={trackKey}>Отметить</label>
                    </div>
                  </div>
                );
              })
            }

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
  }),
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
