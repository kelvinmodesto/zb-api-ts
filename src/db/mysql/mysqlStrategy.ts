import dotenv from 'dotenv';
import sequelize from 'sequelize';

import { ContextStrategy as Context } from '../base/contextStrategy';

export class MySQLStrategy extends Context {
  public static buildConnectionString() {
    dotenv.config();
    return `${process.env.DB_MYSQL}://${process.env.DB_USER_MYSQL}:\
${process.env.DB_PASS_MYSQL}@${process.env.DB_HOST_MYSQL}:\
${process.env.DB_PORT_MYSQL}/${process.env.DB_NAME_MYSQL}`;
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
