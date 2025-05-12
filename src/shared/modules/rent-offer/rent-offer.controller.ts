import { CreateRentOfferRequest } from './create-rent-offer-request.js';
import { RentOfferResponseRdo } from './rdo/rent-offer-response.rdo.js';
import { BaseController, HttpMethod } from '../../libs/rest/index.js';
import { RentOfferService } from './rent-offer-service.interface.js';
import { RentOfferRdo } from './rdo/rent-offer.rdo.js';
import { Logger } from '../../libs/logger/index.js';
import { Component } from '../../types/index.js';
import { fillDTO } from '../../helpers/index.js';
import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';

@injectable()
export class RentOfferController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.RentOfferService)
    private readonly rentOfferService: RentOfferService
  ) {
    super(logger);
    this.logger.info('Register routes for RentOfferController…');

    this.addRoute({ path: '', method: HttpMethod.Post, handler: this.create });
    this.addRoute({
      path: '/',
      method: HttpMethod.Get,
      handler: this.getOffers,
    });
  }

  public async create(
    { body }: CreateRentOfferRequest,
    res: Response
  ): Promise<void> {
    const rentOffers = await this.rentOfferService.create(body);
    this.created(res, fillDTO(RentOfferRdo, rentOffers));
  }

  public async getOffers(_req: Request, res: Response): Promise<void> {
    const rentOffers = await this.rentOfferService.find();
    this.ok(res, fillDTO(RentOfferResponseRdo, rentOffers));
  }
}
