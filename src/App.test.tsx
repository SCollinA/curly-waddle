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
  expect(app.childAt(2).is('div')).toBe(true);
  expect(app.childAt(2).hasClass('counterButtons')).toBe(true);
})

it('renders + and - in separate h1\'s in counterButtons', () => {
  const counterButtons = enzyme.shallow(<App/>).childAt(2);
  expect(counterButtons.childAt(0).is('h1')).toBe(true);
  expect(counterButtons.childAt(0).render().text()).toBe('+');
  expect(counterButtons.childAt(1).is('h1')).toBe(true);
  expect(counterButtons.childAt(1).render().text()).toBe('-');
})

it('renders counterButtons inline', () => {
  const counterButtons = enzyme.shallow(<App/>).childAt(2);
  expect(counterButtons.childAt(0).render().css('display')).toBe('inline');
  expect(counterButtons.childAt(1).render().css('display')).toBe('inline');
})

it('increments app state field \'count\' when + is clicked', () => {
  const app = enzyme.shallow(<App/>);
  const counterButtons = app.childAt(2)
  const plusButton = counterButtons.childAt(0);
  plusButton.simulate('click');
  expect(app.state('count')).toBe(1);
})

it('decrements app state field \'count\' when + is clicked', () => {
  const app = enzyme.shallow(<App/>);
  const counterButtons = app.childAt(2)
  const minusButton = counterButtons.childAt(1);
  minusButton.simulate('click');
  expect(app.state('count')).toBe(-1);
})

it('renders counterButtons with pointer cursor', () => {
  const counterButtons = enzyme.shallow(<App/>).childAt(2);
  expect(counterButtons.childAt(0).render().css('cursor')).toBe('pointer');
  expect(counterButtons.childAt(1).render().css('cursor')).toBe('pointer');
})