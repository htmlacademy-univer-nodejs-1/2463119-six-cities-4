import { RequestBody, RequestParams } from '../../libs/rest/index.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { Request } from 'express';

export type CreateRentOfferRequest = Request<
  RequestParams,
  RequestBody,
  CreateCommentDto
>;
