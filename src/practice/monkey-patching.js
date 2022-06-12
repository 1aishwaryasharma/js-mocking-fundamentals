const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

// keep a reference of the original so that it can be reset later on for other tests
const originalGetWinner = utils.getWinner;

// monkey patching
utils.getWinner = (player1, player2) => player1;

const winner = thumbWar('Aishwarya', 'Yasharth');
assert.strictEqual(winner, 'Aishwarya');

utils.getWinner = originalGetWinner;