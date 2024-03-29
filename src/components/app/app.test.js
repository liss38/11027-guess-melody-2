import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      gameTime={0}
      errorCount={0}
      questions={[
        {
          type: `genre`,
          genre: `folk`,
          answers: [
            {
              src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
              genre: `rock`,
            },
            {
              src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
              genre: `pop`,
            },
            {
              src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
              genre: `jazz`,
            },
            {
              src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
              genre: `rock`,
            },
          ],
        },
        {
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
        },
      ]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
