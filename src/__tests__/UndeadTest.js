/* eslint-disable linebreak-style */
import Undead from '../Undead';

test('creation Undead', () => {
  const obj = new Undead('Luci', 'Undead');
  expect(obj).toEqual({
    name: 'Luci',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
