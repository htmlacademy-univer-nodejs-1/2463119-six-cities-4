import { RequestBody, RequestParams } from '../../libs/rest/index.js';
import { CreateRentOfferDto } from './dto/create-rent-offer.dto.js';
import { Request } from 'express';

export type CreateRentOfferRequest = Request<
  RequestParams,
  RequestBody,
  CreateRentOfferDto
>;
