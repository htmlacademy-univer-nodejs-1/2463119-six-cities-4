import { HousingType } from '../../../types/index.js';
import { Expose } from 'class-transformer';

export class RentOfferResponseRdo {
  @Expose()
  public commentsCount: number;

  @Expose()
  public createdDate: Date;

  @Expose()
  public city: string;

  @Expose()
  public housingType: HousingType;

  @Expose()
  public isFavorite: boolean;

  @Expose()
  public isPremium: boolean;

  @Expose()
  public previewImage: string;

  @Expose()
  public price: number;

  @Expose()
  public rating: number;

  @Expose()
  public title: string;
}
