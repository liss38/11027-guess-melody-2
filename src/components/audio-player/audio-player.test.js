import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

it(`AudioPlayer is rendered`, () => {
  const tree = renderer
    .create(<AudioPlayer
      src={``}
      isPlaying={false}
      onPlayButtonClick={jest.fn()}
    />,
    {
      createNodeMock: (element) => {
        if (element.type === `audio`) {
          return {};
        }

        return null;
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
