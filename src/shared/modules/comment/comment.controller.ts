import {
  BaseController,
  HttpError,
  HttpMethod,
  ValidateDtoMiddleware,
} from '../../libs/rest/index.js';
import { RentOfferService } from '../rent-offer/rent-offer-service.interface.js';
import { CreateCommentRequest } from './create-comment-request.js';
import { CommentService } from './comment-service.interface.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { Logger } from '../../libs/logger/index.js';
import { CommentRdo } from './rdo/comment.rdo.js';
import { Component } from '../../types/index.js';
import { fillDTO } from '../../helpers/index.js';
import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';
import { Response } from 'express';

@injectable()
export default class CommentController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.CommentService)
    private readonly commentService: CommentService,
    @inject(Component.RentOfferService)
    private readonly rentOfferService: RentOfferService
  ) {
    super(logger);

    this.logger.info('Register routes for CommentController…');
    this.addRoute({
      path: '/',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [new ValidateDtoMiddleware(CreateCommentDto)],
    });
  }

  public async create(
    { body }: CreateCommentRequest,
    res: Response
  ): Promise<void> {
    if (!(await this.rentOfferService.exists(body.rentOfferId))) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Rent offer with id ${body.rentOfferId} not found.`,
        'CommentController'
      );
    }

    const comment = await this.commentService.create(body);
    await this.rentOfferService.incCommentCount(body.rentOfferId);
    this.created(res, fillDTO(CommentRdo, comment));
  }
}
