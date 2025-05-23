import { DocumentType, types } from '@typegoose/typegoose';
import { UserService } from './user-service.interface.js';
import { RentOfferEntity } from '../rent-offer/index.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { Logger } from '../../libs/logger/index.js';
import { Component } from '../../types/index.js';
import { inject, injectable } from 'inversify';
import { UserEntity } from './user.entity.js';

@injectable()
export class DefaultUserService implements UserService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.UserModel)
    private readonly userModel: types.ModelType<UserEntity>
  ) {}

  public async create(
    dto: CreateUserDto,
    salt: string
  ): Promise<DocumentType<UserEntity>> {
    const user = new UserEntity(dto);
    user.setPassword(dto.password, salt);

    const result = await this.userModel.create(user);
    this.logger.info(`New user created: ${user.email}`);

    return result;
  }

  public async findByEmail(
    email: string
  ): Promise<DocumentType<UserEntity> | null> {
    return this.userModel.findOne({ email });
  }

  public async findById(id: string): Promise<DocumentType<UserEntity> | null> {
    return this.userModel.findById({ id });
  }

  public async findOrCreate(
    dto: CreateUserDto,
    salt: string
  ): Promise<DocumentType<UserEntity>> {
    const existedUser = await this.findByEmail(dto.email);

    if (existedUser) {
      return existedUser;
    }

    return this.create(dto, salt);
  }

  public async findFavoriteOffers(
    userId: string
  ): Promise<DocumentType<RentOfferEntity>[]> {
    const result = await this.userModel
      .findById(userId)
      .select('favorite')
      .exec();
    if (result === null) {
      return [];
    }
    return this.userModel.find({ _id: { $in: result.favoriteOffers } });
  }
}
