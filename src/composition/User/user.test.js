import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import User from './user';


  describe('User component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<User />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('renders the UI as expected', () => {
    const tree = renderer
      .create(<User key={User.id} name="Johnathan" avatar='https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1' inSession={true} onStage={false}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  });