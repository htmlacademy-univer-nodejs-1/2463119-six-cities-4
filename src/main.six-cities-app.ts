import { createRentOfferContainer } from './shared/modules/rent-offer/rent-offer.container.js';
import { createRestApplicationContainer } from './rest/six-cities.container.js';
import { createUserContainer } from './shared/modules/user/index.js';
import { SixCitiesApplication } from './rest/index.js';
import { Component } from './shared/types/index.js';
import { Container } from 'inversify';
import 'reflect-metadata';

async function bootstrap() {
  const appContainer = Container.merge(
    createRestApplicationContainer(),
    createUserContainer(),
    createRentOfferContainer()
  );

  const app = appContainer.get<SixCitiesApplication>(
    Component.SixCitiesApplication
  );

  await app.init();
}

bootstrap();
