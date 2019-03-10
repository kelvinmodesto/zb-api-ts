import mongoose from 'mongoose';

import { ContextStrategy as Context } from '../base/contextStrategy';

export default class MongoStrategy extends Context {
  public connection: any;
  public model: any;

  constructor(connection: any, model: any) {
    super(connection);
    this.connection = connection;
    this.model = model;
  }

  public async create(item: any) {

  }

  public async read(item: any) {

  }

  public async update(item: any) {

  }

  public async delete(id: number) {

  }

  public async isConnected() {

  }

  public async connect() {

  }
}
