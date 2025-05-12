import { createRentOfferContainer } from './shared/modules/rent-offer/rent-offer.container.js';
import {
  createRestApplicationContainer,
  SixCitiesApplication,
} from './rest/index.js';
import { createCommentContainer } from './shared/modules/comment/idnex.js';
import { createSessionContainer } from './shared/modules/session/index.js';
import { createUserContainer } from './shared/modules/user/index.js';
import { Component } from './shared/types/index.js';
import { Container } from 'inversify';
import 'reflect-metadata';

async function bootstrap() {
  const appContainer = Container.merge(
    createRestApplicationContainer(),
    createUserContainer(),
    createRentOfferContainer(),
    createCommentContainer(),
    createSessionContainer()
  );

  const app = appContainer.get<SixCitiesApplication>(
    Component.SixCitiesApplication
  );

  await app.init();
}

bootstrap();
