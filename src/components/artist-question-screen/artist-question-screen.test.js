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
            id: `id-1`,
            picture: `http://placehold.it/134x134`,
            artist: `John Snow`,
          },
          {
            id: `id-2`,
            picture: `http://placehold.it/134x134`,
            artist: `Jack Daniels`,
          },
          {
            id: `id-3`,
            picture: `http://placehold.it/134x134`,
            artist: `Jim Beam`,
          },
        ],
      }}
      onAnswer={jest.fn()}
    />,
    {createNodeMock(element) {
      if (element.type === `audio`) {
        return {};
      }

      return null;
    }})
    .toJSON();
  expect(tree).toMatchSnapshot();
});
