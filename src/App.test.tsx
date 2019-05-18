import React from 'react';
import ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders h1 element', () => {
  const app = enzyme.shallow(<App/>);
  expect(app.children().first().is('h1')).toBe(true);
})

it('renders Hello World in h1 element', () => {
  const app = enzyme.shallow(<App/>);
  expect(app.children().first().text()).toBe('Hello World!');
})

it('renders an h1 element as second component', () => {
  const app = enzyme.shallow(<App/>);
  expect(app.childAt(1).is('h1')).toBe(true);
})

it('contains state with count prop', () => {
  const app = enzyme.shallow(<App/>);
  expect(app.state()).toHaveProperty('count');
})