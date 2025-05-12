import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  public avatarPath: string;

  @Expose()
  public email: string;

  @Expose()
  public firstname: string;

  @Expose()
  public type: string;
}
