import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

configure({adapter: new Adapter()});
it(`Welcome button click`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    time={5}
    errorCount={3}
    onWelcomeButtonClick={clickHandler}
  />);

  const welcomeButton = welcomeScreen.find(`.welcome__button`);
  welcomeButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
