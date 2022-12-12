/* eslint-disable linebreak-style */
import Swordsman from '../Swordsman';

test('creation Swordsman', () => {
  const obj = new Swordsman('Ken', 'Swordsman');
  expect(obj).toEqual({
    name: 'Ken',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
