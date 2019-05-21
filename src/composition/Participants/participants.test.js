import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participants from './participants';

describe('User component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Participants people={[]} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Participants people={[]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  });
