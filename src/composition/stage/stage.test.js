import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './stage';

describe('User component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Stage />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Stage name="Johnathan" avatar='https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1'/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  });