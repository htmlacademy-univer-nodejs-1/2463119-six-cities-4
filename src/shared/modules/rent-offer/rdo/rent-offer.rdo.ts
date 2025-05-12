import { HousingConveniences, HousingType } from '../../../types/index.js';
import { UserRdo } from '../../user/rdo/user.rdo.js';
import { Expose, Type } from 'class-transformer';

export class RentOfferRdo {
  @Expose({ name: 'userId' })
  @Type(() => UserRdo)
  public authorId: string;

  @Expose()
  public city: string;

  @Expose()
  public commentsCount: number;

  @Expose()
  public conveniences: HousingConveniences[];

  @Expose()
  public coordinates: string;

  @Expose()
  public createdDate: Date;

  @Expose()
  public description: string;

  @Expose()
  public guestsCount: number;

  @Expose()
  public housingPhoto: string;

  @Expose()
  public housingType: HousingType;

  @Expose()
  public isFavorite: boolean;

  @Expose()
  public isPremium: boolean;

  @Expose()
  public price: number;

  @Expose()
  public previewImage: string;

  @Expose()
  public rating: number;

  @Expose()
  public roomsCount: number;

  @Expose()
  public title: string;
}
