import { expect } from 'chai';
import { describe } from 'mocha';

// Database
import { ContextStrategy as Context } from '../../../../db/base/contextStrategy';
import { MySQLStrategy as MySQL } from '../../../../db/mysql/mysqlStrategy';

// Models
import user from '../../../../models/user';

let context = {};
describe('MySQL Test Suit', function init() {
  this.beforeAll(async () => {
    context = await new Context(new MySQL(MySQL.connect(), user));
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
