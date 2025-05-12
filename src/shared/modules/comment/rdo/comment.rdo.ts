import { Expose } from 'class-transformer';

export class CommentRdo {
  @Expose()
  public authorId: string;

  @Expose()
  public createdDate: Date;

  @Expose()
  public rating: number;

  @Expose()
  public text: string;
}
