const _ = require('lodash');
const assert = require('assert');
const redis = require('ioredis')
const { redisFunc } = require('../../../src/modules');

describe('keyScan()', () => {
  before(async () => {
    const commands = [];
    for (let i = 0; i < 50; i += 1) {
      commands.push(redis.set(`key${i}`, i));
    }
    await Promise.all(commands);
  });
  after(async () => {
    const keys = await redis.keys('key*');
    await redis.del(keys);
  });
  it('it should list 50 keys match \\key*\\', async () => {
    const keys = await redisFunc.keyScan('key*');
    assert.equal(_.size(keys), 50);
  });
});
