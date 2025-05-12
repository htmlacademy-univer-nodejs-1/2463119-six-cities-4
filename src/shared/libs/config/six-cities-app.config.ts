import {
  configSixCitiesAppSchema,
  SixCitiesAppSchema,
} from './six-cities-app.schema.js';
import { Component } from '../../types/index.js';
import { Config } from './config.interface.js';
import { inject, injectable } from 'inversify';
import { Logger } from '../logger/index.js';
import { config } from 'dotenv';

@injectable()
export class SixCitiesAppConfig implements Config<SixCitiesAppSchema> {
  private readonly config: SixCitiesAppSchema;

  constructor(@inject(Component.Logger) private readonly logger: Logger) {
    const parsedOutput = config();

    if (parsedOutput.error) {
      throw new Error(
        'Can not read .env file. Perhaps the file does not exists.'
      );
    }

    configSixCitiesAppSchema.load({});

    configSixCitiesAppSchema.validate({
      allowed: 'strict',
      output: this.logger.info,
    });

    this.config = configSixCitiesAppSchema.getProperties();
    this.logger.info('.env file found and successfully parsed!');
  }

  public get<T extends keyof SixCitiesAppSchema>(
    key: T
  ): SixCitiesAppSchema[T] {
    return this.config[key];
  }
}
