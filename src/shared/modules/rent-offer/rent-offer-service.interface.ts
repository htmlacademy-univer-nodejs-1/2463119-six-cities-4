import { CreateRentOfferDto } from './dto/create-rent-offer.dto.js';
import { PatchRentOfferDto } from './dto/patch-rent-offer.dto.js';
import { DocumentType, types } from '@typegoose/typegoose';
import { RentOfferEntity } from './rent-offer.entity.js';

export interface RentOfferService {
  addFavorite(rentOfferId: string, userId: string): Promise<void>;
  calculateRating(
    oldRating: number,
    newRating: number,
    ratingsCount: number,
    offerId: string
  ): Promise<void>;
  create(dto: CreateRentOfferDto): Promise<DocumentType<RentOfferEntity>>;
  delete(id: string): Promise<types.DocumentType<RentOfferEntity> | null>;
  deleteFavorite(rentOfferId: string, userId: string): Promise<void>;
  exists(documentId: string): Promise<boolean>;
  find(limit?: number): Promise<DocumentType<RentOfferEntity>[]>;
  findById(id: string): Promise<DocumentType<RentOfferEntity> | null>;
  findPremiumByCity(
    city: string
  ): Promise<types.DocumentType<RentOfferEntity>[]>;
  patch(
    rentOfferId: string,
    dto: PatchRentOfferDto
  ): Promise<types.DocumentType<RentOfferEntity> | null>;
  incCommentCount(
    offerId: string
  ): Promise<DocumentType<RentOfferEntity> | null>;
}
