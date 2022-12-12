/* eslint-disable linebreak-style */
import Zombie from './Zombie';
import Undead from './Undead';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Bowman from './Bowman';

const z = new Zombie('Fred', 'Zombie');
const u = new Undead('Luci', 'Undead');
const d = new Daemon('Alex', 'Daemon');
const m = new Magician('Andrew', 'Magician');
const s = new Swordsman('Ken', 'Swordsman');
const b = new Bowman('Tom', 'Bowman');

z.levelUp();
z.damage(10);

u.levelUp();
u.damage(10);

d.levelUp();
d.damage(10);

m.levelUp();
m.damage(10);

s.levelUp();
s.damage(10);

b.levelUp();
b.damage(10);
