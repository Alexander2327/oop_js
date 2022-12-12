/* eslint-disable linebreak-style */
import Zombie from '../Zombie';

test('creation Zombie', () => {
  const obj = new Zombie('Fred', 'Zombie');
  expect(obj).toEqual({
    name: 'Fred',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
