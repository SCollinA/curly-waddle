import React from 'react';
import ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Hello World text', () => {
  const app = enzyme.shallow(<App/>);
  expect(app.render().text()).toBe('Hello World!')
})