import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatEvent from './chatEvent';

describe('User component', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ChatEvent participantId="1" type="message" message="Hello World" timestamp={1548852484247} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

  it('renders the UI as expected', () => {
  const tree = renderer
    .create(<ChatEvent participantId="1" type="message" message="Hello World" timestamp={1548852484247} />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});
});