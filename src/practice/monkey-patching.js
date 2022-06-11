const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const winner = thumbWar('Aishwarya', 'Yasharth');
assert.strictEqual(winner, 'Aishwarya');