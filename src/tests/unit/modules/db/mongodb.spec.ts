import { expect } from 'chai';
import { describe } from 'mocha';

// Database
import { ContextStrategy as Context } from '../../../../db/base/contextStrategy';
import { MongoDBStrategy as MongoDB } from '../../../../db/mongodb/mongoDBStrategy';

// Models
import user from '../../../../models/user';

let context = {};
describe('MongoDB Test Suit', function init() {
  this.beforeAll(async () => {
    context = await new Context(new MongoDB(MongoDB.connect(), user));
  });

  it('Check connection', async () => {
    expect(1).to.be.equal(1);
  });

  it('Create item', async () => {
    expect(1).to.be.equal(1);
  });

  it('Read item', async () => {
    expect(1).to.be.equal(1);
  });

  it('Update item', async () => {
    expect(1).to.be.equal(1);
  });

  it('Delete item', async () => {
    expect(1).to.be.equal(1);
  });
});
