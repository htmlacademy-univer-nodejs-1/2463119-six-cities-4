import { RentOfferEntity } from '../rent-offer/index.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { DocumentType } from '@typegoose/typegoose';
import { UserEntity } from './user.entity.js';

export interface UserService {
  create(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
  findByEmail(email: string): Promise<DocumentType<UserEntity> | null>;
  findById(id: string): Promise<DocumentType<UserEntity> | null>;
  findFavoriteOffers(userId: string): Promise<DocumentType<RentOfferEntity>[]>;
  findOrCreate(
    dto: CreateUserDto,
    salt: string
  ): Promise<DocumentType<UserEntity>>;
}
