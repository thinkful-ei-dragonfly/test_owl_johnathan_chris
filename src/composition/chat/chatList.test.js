import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatList from './chatList.js';

describe('User component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ChatList chatUsers={[]} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ChatList chatUsers={[]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  });
