import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import AudioPlayer from '../audio-player/audio-player.jsx';

class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {
      question,
      screenIndex,
      onAnswer,
    } = this.props;

    const {isPlaying} = this.state;

    const {
      answers,
      song,
    } = question;

    return (
      <section className="game game--artist">
        <Header />

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <AudioPlayer
                key={`${screenIndex}`}
                src={song.src}
                isPlaying={isPlaying}
                onPlayButtonClick={() => this.setState({
                  isPlaying: !isPlaying,
                })}
              />
            </div>
          </div>

          <form
            className="game__artist"
            onChange={(evt) => {
              this.setState({
                isPlaying: false,
              });

              onAnswer(evt.target.value);
            }}
          >
            {
              answers.map((answer) => (
                <div className="artist" key={`${screenIndex}-${answer.id}`}>
                  <input className="artist__input visually-hidden" type="radio" name="answer" value={answer.artist} id={`answer-${answer.id}`} />
                  <label className="artist__name" htmlFor={`answer-${answer.id}`}>
                    <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                    {answer.artist}
                  </label>
                </div>
              ))
            }
          </form>
        </section>
      </section>
    );
  }
}

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
  }),
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;
