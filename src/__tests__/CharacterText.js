/* eslint-disable linebreak-style */
import Character from '../Character';
import Deamon from '../Daemon';

test('creation Character with name error', () => {
  expect(() => {
    const result = new Character('something....', 'Daemon');
    return result;
  }).toThrow();
});

test('creation Character with type error', () => {
  expect(() => {
    const result = new Character('something', 'Ork');
    return result;
  }).toThrow();
});

test('test method damage', () => {
  const obj = new Deamon('Name', 'Daemon');
  const result = {
    name: 'Name',
    type: 'Daemon',
    health: 94,
    level: 1,
    defence: 40,
    attack: 10,
  };
  obj.damage(10);
  expect(obj).toEqual(result);
});

test('test method levelUp', () => {
  const obj = new Deamon('Name', 'Daemon');
  const result = {
    name: 'Name',
    type: 'Daemon',
    health: 100,
    level: 2,
    defence: 48,
    attack: 12,
  };
  obj.levelUp();
  expect(obj).toEqual(result);
});

test('test method levelUp with error', () => {
  const obj = new Deamon('Name', 'Daemon');
  obj.health = 0;
  expect(() => obj.levelUp()).toThrow('Персонаж мертв');
});

test('test method damage with error', () => {
  const obj = new Deamon('Name', 'Daemon');
  obj.health = -1;
  expect(() => obj.damage(10)).toThrow('Персонаж мертв');
});
