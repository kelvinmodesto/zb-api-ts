import mongoose from 'mongoose';

import { Context } from '../base/contextStrategy';

export default class MongoDBStrategy extends Context {
  public connection: any;

  constructor(connection, model) {

  }
}
