/* eslint-disable linebreak-style */
import Bowman from '../Bowman';

test('creation Bowman', () => {
  const obj = new Bowman('Tom', 'Bowman');
  expect(obj).toEqual({
    name: 'Tom',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
