/* eslint-disable linebreak-style */
import Magician from '../Magician';

test('creation Magician', () => {
  const obj = new Magician('Andrew', 'Magician');
  expect(obj).toEqual({
    name: 'Andrew',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
