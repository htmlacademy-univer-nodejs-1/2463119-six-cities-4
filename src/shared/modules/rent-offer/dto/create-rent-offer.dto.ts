import {
  Coordinates,
  HousingConveniences,
  HousingType,
} from '../../../types/index.js';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsMongoId,
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { CreateRentOfferValidationMessage } from './create-rent-offer.messages.js';

export class CreateRentOfferDto {
  @IsMongoId({ message: CreateRentOfferValidationMessage.authorId.invalidId })
  public authorId: string;

  @IsString({ message: CreateRentOfferValidationMessage.city.invalidFormat })
  public city: string;

  @IsArray({
    message: CreateRentOfferValidationMessage.conveniences.invalidFormat,
  })
  @IsEnum(HousingConveniences, {
    each: true,
    message: CreateRentOfferValidationMessage.conveniences.invalid,
  })
  @MinLength(1, {
    message: CreateRentOfferValidationMessage.conveniences.length,
  })
  public conveniences: HousingConveniences[];

  public coordinates: Coordinates;

  @IsDateString(
    {},
    { message: CreateRentOfferValidationMessage.createdDate.invalidFormat }
  )
  public createdDate: Date;

  @MinLength(20, {
    message: CreateRentOfferValidationMessage.description.minLength,
  })
  @MaxLength(1023, {
    message: CreateRentOfferValidationMessage.description.maxLength,
  })
  @IsString({
    message: CreateRentOfferValidationMessage.description.invalidFormat,
  })
  public description: string;

  @IsInt({
    message: CreateRentOfferValidationMessage.guestsCount.invalidFormat,
  })
  @Min(1, { message: CreateRentOfferValidationMessage.guestsCount.minValue })
  @Max(10, { message: CreateRentOfferValidationMessage.guestsCount.maxValue })
  public guestsCount: number;

  @IsArray({
    message: CreateRentOfferValidationMessage.housingPhoto.invalidFormat,
  })
  @Length(6, 6, {
    message: CreateRentOfferValidationMessage.housingPhoto.length,
  })
  @IsString({
    each: true,
    message: CreateRentOfferValidationMessage.housingPhoto.invalidValuesFormat,
  })
  public housingPhoto: string[];

  @IsEnum(HousingType, {
    message: CreateRentOfferValidationMessage.housingType.invalid,
  })
  public housingType: HousingType;

  public isFavorite: boolean;

  public isPremium: boolean;

  @IsString({
    message: CreateRentOfferValidationMessage.previewImage.invalidFormat,
  })
  public previewImage: string;

  @IsInt({ message: CreateRentOfferValidationMessage.price.invalidFormat })
  @Min(100, { message: CreateRentOfferValidationMessage.price.minValue })
  @Max(100000, { message: CreateRentOfferValidationMessage.price.maxValue })
  public price: number;

  @IsInt({ message: CreateRentOfferValidationMessage.roomsCount.invalidFormat })
  @Min(1, { message: CreateRentOfferValidationMessage.roomsCount.minValue })
  @Max(8, { message: CreateRentOfferValidationMessage.roomsCount.maxValue })
  public roomsCount: number;

  @MinLength(10, { message: CreateRentOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateRentOfferValidationMessage.title.maxLength })
  @IsString({ message: CreateRentOfferValidationMessage.title.invalidFormat })
  public title: string;
}
