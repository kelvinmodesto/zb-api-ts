import sequelize from 'sequelize';

import { ContextStrategy as Context } from '../base/contextStrategy';

export class PostgresStrategy extends Context {
  public static buildConnectionString() {
    return `${process.env.DB_POSTGRES}://${process.env.DB_USER_POSTGRES}:
      ${process.env.DB_PASS_POSTGRES}@${process.env.DB_HOST_POSTGRES}:
      ${process.env.DB_PORT_POSTGRES}/${process.env.DB_NAME_POSTGRES}`;
  }

  public static connect() {

  }
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
}
