import { DefaultSessionService } from './default-session.service.js';
import { SessionEntity, SessionModel } from './session.entity.js';
import { SessionService } from './session-service.interface.js';
import { Component } from '../../types/index.js';
import { types } from '@typegoose/typegoose';
import { Container } from 'inversify';

export function createSessionContainer() {
  const userContainer = new Container();
  userContainer
    .bind<SessionService>(Component.SessionService)
    .to(DefaultSessionService)
    .inSingletonScope();
  userContainer
    .bind<types.ModelType<SessionEntity>>(Component.SessionModel)
    .toConstantValue(SessionModel);

  return userContainer;
}
