import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StageList from './stageList.js';

describe('User component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StageList stageUsers={[]} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('renders the UI as expected', () => {
    const tree = renderer
      .create(<StageList stageUsers={[]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  });
