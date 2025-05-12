import { CreateCommentDto } from './dto/create-comment.dto.js';
import { CommentEntity } from './comment.entity.js';
import { DocumentType } from '@typegoose/typegoose';

export interface CommentService {
  create(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>>;

  findByRentOfferId(
    rentOfferId: string
  ): Promise<DocumentType<CommentEntity>[]>;
}
