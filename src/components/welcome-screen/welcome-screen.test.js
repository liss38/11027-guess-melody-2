import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

it(`render correctly wellcome-screen component`, () => {
  const WelcomeScreenComponent = renderer
    .create(<WelcomeScreen
      time={5}
      errorCount={3}
      onWelcomeButtonClick={jest.fn()}
    />)
    .toJSON();
  expect(WelcomeScreenComponent).toMatchSnapshot();
});
