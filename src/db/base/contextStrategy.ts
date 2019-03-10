import { IDb } from './db.interface';

export class ContextStrategy implements IDb {
  public database: any;
  constructor(database: any) {
    this.database = database;
  }
  public async create(item: any) {
    return this.database.create(item);
  }

  public async read(item: any) {
    return this.database.read(item);
  }

  public async update(id: number, item: any) {
    return this.database.update(id, item);
  }

  public async delete(id: number) {
    return this.database.delete(id);
  }

  public async isConnected() {
    return this.database.isConnected();
  }

  public async connect() {
    return this.database.connect();
  }
}
