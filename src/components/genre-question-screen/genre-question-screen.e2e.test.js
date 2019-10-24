import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from './genre-question-screen';

configure({adapter: new Adapter()});
it(`GenreQuestionScreen: check on submit form callback`, () => {
  const onAnswer = jest.fn();
  const genreQuestionScreen = shallow(<GenreQuestionScreen
    screenIndex={0}
    question={{
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
    }}
    onAnswer={onAnswer}
  />);

  const genreForm = genreQuestionScreen.find(`.game__tracks`);
  genreForm.simulate(`submit`, {
    preventDefault: () => {},
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
});
