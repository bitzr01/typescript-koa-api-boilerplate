import Joi = require('joi');
import { Context } from 'koa';
import { IMiddleware } from 'koa-router';

import { FieldValidationError } from '../../errors';

export interface SchemaMap {
  params?: { [key: string]: Joi.SchemaLike };

  request?: {
    body?: { [key: string]: Joi.SchemaLike } | Joi.SchemaMap;
    headers?: { [key: string]: Joi.SchemaLike };
  };

  response?: {
    body?: { [key: string]: Joi.SchemaLike } | Joi.ArraySchema;
    headers?: { [key: string]: Joi.SchemaLike };
  };
}

export default (schemaMap: SchemaMap): IMiddleware =>
  async (ctx: Context, next: () => Promise<unknown>) => {
    const schema = Joi.object()
      .keys(schemaMap as Joi.PartialSchemaMap)
      .unknown(true)
      .options({ stripUnknown: true, allowUnknown: true, abortEarly: false });
    const valResult = schema.validate(ctx);
    if (valResult.error) {
      throw new FieldValidationError(
        valResult.error.message,
        valResult.error.details,
        valResult.error,
      );
    }
    await next();
  };
