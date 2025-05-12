import { DefaultCommentService } from './default-comment.service.js';
import { CommentEntity, CommentModel } from './comment.entity.js';
import { CommentService } from './comment-service.interface.js';
import { Component } from '../../types/index.js';
import { types } from '@typegoose/typegoose';
import { Container } from 'inversify';

export function createCommentContainer() {
  const userContainer = new Container();
  userContainer
    .bind<CommentService>(Component.CommentService)
    .to(DefaultCommentService)
    .inSingletonScope();
  userContainer
    .bind<types.ModelType<CommentEntity>>(Component.CommentModel)
    .toConstantValue(CommentModel);

  return userContainer;
}
