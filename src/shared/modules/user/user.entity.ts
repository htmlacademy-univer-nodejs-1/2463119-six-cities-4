import {
  defaultClasses,
  getModelForClass,
  modelOptions,
  prop,
  Ref,
} from '@typegoose/typegoose';
import { RentOfferEntity } from '../rent-offer/index.js';
import { User, UserType } from '../../types/index.js';
import { createSHA256 } from '../../helpers/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
  },
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({
    required: true,
    minlength: [1, 'Min length of user firstname is 1'],
    maxlength: [15, 'Max length of user firstname is 15'],
  })
  public firstname: string;

  @prop({
    required: true,
    unique: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
  })
  public email: string;

  @prop({
    required: false,
    default: '',
  })
  public avatarPath: string;

  @prop({
    required: true,
  })
  public password: string;

  @prop({
    required: true,
    type: () => String,
    enum: UserType,
  })
  public type: UserType;

  @prop({ required: true, ref: 'RentOfferEntity', default: [] })
  public favoriteOffers!: Ref<RentOfferEntity>[];

  constructor(userData: User) {
    super();

    this.email = userData.email;
    this.avatarPath = userData.avatarPath;
    this.firstname = userData.firstname;
    this.type = userData.type;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
