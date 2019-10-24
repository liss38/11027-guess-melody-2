import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from './artist-question-screen';

configure({adapter: new Adapter()});
it(`ArtistQuestionScreen: check on change form callback`, () => {
  const onAnswer = jest.fn();
  const artistQuestionScreen = shallow(<ArtistQuestionScreen
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
    onAnswer={onAnswer}
  />);

  const artistForm = artistQuestionScreen.find(`.game__artist`);
  artistForm.simulate(`change`, {
    target: {
      value: ``,
    },
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
});
