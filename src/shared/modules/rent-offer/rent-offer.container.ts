import { DefaultRentOfferService } from './default-rent-offer.service.js';
import { RentOfferEntity, RentOfferModel } from './rent-offer.entity.js';
import { RentOfferService } from './rent-offer-service.interface.js';
import { Component } from '../../types/index.js';
import { types } from '@typegoose/typegoose';
import { Container } from 'inversify';

export function createRentOfferContainer() {
  const userContainer = new Container();
  userContainer
    .bind<RentOfferService>(Component.RentOfferService)
    .to(DefaultRentOfferService)
    .inSingletonScope();
  userContainer
    .bind<types.ModelType<RentOfferEntity>>(Component.RentOfferModel)
    .toConstantValue(RentOfferModel);

  return userContainer;
}
