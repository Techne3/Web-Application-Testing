import React from 'react';
import Dashboard, {addBalls, addStrikes} from './Dashboard'
import {render} from '@testing-library/react'

test ('Dashboard is working', ()=> {
    render(<Dashboard />)
})



// test ('add strike to board', () => {
//     let actual;
//     let expected;
  
//     actual = addStrikes(0);
//     expected= 1;
//     expect(actual).toBe(expected)
//     expect(actual).not.toBe(3)
//   })

// describe("<Dashboard />", () => {
//     it("addStrike will add one to the Strike", () => {
//       expect(addBalls(0)).toBe(1);
//     });
   
//     });