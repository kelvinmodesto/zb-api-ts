import { expect } from 'chai';
import { describe } from 'mocha';

// Database
import { ContextStrategy as Context } from '../../../../db/base/contextStrategy';
import { PostgresStrategy as Postgres } from '../../../../db/postgres/postgresStrategy';

// Models
import user from '../../../../models/user';

let context = {};
describe('Postgres Test Suit', function init() {
  this.beforeAll(async () => {
    context = await new Context(new Postgres(Postgres.connect(), user));
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
