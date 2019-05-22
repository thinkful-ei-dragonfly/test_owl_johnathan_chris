import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatList from './chatList.js';

describe('User component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ChatList stageUsers={[]} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ChatList stageUsers={[]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  });
