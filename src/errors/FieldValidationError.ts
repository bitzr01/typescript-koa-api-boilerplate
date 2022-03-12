import { ValidationErrorItem } from 'joi';

import AppError from './AppError';

export interface FieldError {
  message: string;
  type: string;
  path: string[];
}

export default class FieldValidationError extends AppError {
  public fields: ValidationErrorItem[];

  constructor(message: string, fields: ValidationErrorItem[], error?: Error) {
    super(30001, message, error);
    this.fields = fields;
  }

  public toModel() {
    return {
      code: this.code,
      message: this.message,
      fields: this.fields,
    };
  }
}
