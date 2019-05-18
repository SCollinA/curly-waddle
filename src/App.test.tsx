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

it('renders count from initial state in second h1 as 0', () => {
  const app = enzyme.shallow(<App/>);
  expect(app.childAt(1).render().text()).toBe('0');
})

it('renders counterButtons div as third child of app', () => {
  const app = enzyme.shallow(<App/>);
  expect(app.childAt(2).is('div')).toBe(true)
  expect(app.childAt(2).hasClass('counterButtons')).toBe(true)
})