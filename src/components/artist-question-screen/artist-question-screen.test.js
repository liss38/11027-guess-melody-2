import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';

it(`ArtistQuestionScreen  correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen
      screenIndex={0}
      question={{
        type: `artist`,
        song: {
          artist: `Jim Beam`,
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        },
        answers: [
          {
            picture: `http://placehold.it/134x134`,
            artist: `John Snow`,
          },
          {
            picture: `http://placehold.it/134x134`,
            artist: `Jack Daniels`,
          },
          {
            picture: `http://placehold.it/134x134`,
            artist: `Jim Beam`,
          },
        ],
      }}
      onAnswer={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
