import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

configure({adapter: new Adapter()});

describe(`AudioPlayer controls`, () => {
  const pauseStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `pause`)
    .mockImplementation(() => {});

  const audioPlayer = mount(<AudioPlayer
    src={``}
    isPlaying={false}
    onPlayButtonClick={jest.fn()}
  />);

  const playButton = audioPlayer.find(`.js-track-button`);

  audioPlayer.setState({isLoading: false});

  it(`AudioPlayer: state isPlaying is 'TRUE'`, () => {
    playButton.simulate(`click`);
    expect(pauseStub).toHaveBeenCalled();
    expect(audioPlayer.state(`isPlaying`)).toBe(true);
  });

  it(`AudioPlayer: state isPlaying is 'FALSE'`, () => {
    playButton.simulate(`click`);
    expect(pauseStub).toHaveBeenCalled();
    expect(audioPlayer.state(`isPlaying`)).toBe(false);
  });
});
