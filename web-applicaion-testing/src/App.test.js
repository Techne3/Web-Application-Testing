import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import App, {addStrikes, addBalls, addFouls} from './App';


test('looks like it rendered in App!', () => {
  render(<App />);
});


test ('lets try this for Strikes', () => {
    let actual;
    let expected;
  
    actual = addStrikes(2);
    expected= 0;
    expect(actual).toBe(expected)
    expect(actual).not.toBe(3)
  })

test ('lets try this for Strikes', () => {
    let actual;
    let expected;
  
    actual = addBalls(3);
    expected= 0;
    expect(actual).toBe(expected)
    expect(actual).not.toBe(3)
  })
  

  test('Fouls add a strike only if there are less than 2 strikes', () => {
    let actual;
    let expected;

    actual = addFouls(1)
    expected = 2;
    expect(actual).toBe(expected)
    expect(actual).not.toBe(4)



  })