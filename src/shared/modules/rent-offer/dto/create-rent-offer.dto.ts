import {
  Coordinates,
  HousingConveniences,
  HousingType,
} from '../../../types/index.js';

export class CreateRentOfferDto {
  title: string;
  description: string;
  createdDate: Date;
  city: string;
  previewImage: string;
  housingPhoto: string[];
  isPremium: boolean;
  isFavorite: boolean;
  housingType: HousingType;
  roomsCount: number;
  guestsCount: number;
  price: number;
  conveniences: HousingConveniences[];
  authorId: string;
  coordinates: Coordinates;
}
