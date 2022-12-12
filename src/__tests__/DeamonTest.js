/* eslint-disable linebreak-style */
import Deamon from '../Daemon';

test('creation Daemon', () => {
  const obj = new Deamon('Alex', 'Daemon');
  expect(obj).toEqual({
    name: 'Alex',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
