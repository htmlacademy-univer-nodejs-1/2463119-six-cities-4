import dayjs from 'dayjs';
import {
  generateRandomValue,
  getRandomItem,
  getRandomItems,
} from '../../helpers/index.js';
import { default as Constants } from './rent-offer-generator.constants.js';
import { RentOfferGenerator } from './rent-offer-generator.interface.js';
import { HousingType, MockServerData } from '../../types/index.js';

export class TSVRentOfferGenerator implements RentOfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const housingPhoto = getRandomItem<string>(this.mockData.housingPhotos);
    const cityWithCoordinates = getRandomItem<string>(
      this.mockData.citiesWithCoordinates
    );
    const isPremium = getRandomItem([true, false]);
    const isFavorite = getRandomItem([true, false]);
    const rating = generateRandomValue(
      Constants.MIN_RATING,
      Constants.MAX_RATING
    ).toString();
    const housingType = getRandomItem([
      HousingType.Apartment,
      HousingType.House,
      HousingType.Room,
      HousingType.Hotel,
    ]);
    const roomsCount = generateRandomValue(
      Constants.MIN_ROOMS_COUNT,
      Constants.MAX_ROOMS_COUNT
    ).toString();
    const guestCount = generateRandomValue(
      Constants.MIN_GUEST_COUNT,
      Constants.MAX_GUEST_COUNT
    ).toString();
    const price = generateRandomValue(
      Constants.MIN_PRICE,
      Constants.MAX_PRICE
    ).toString();
    const conveniences = getRandomItems(this.mockData.conveniences).join(';');
    const firstname = getRandomItem(this.mockData.firstnames);
    const avatarPath = getRandomItem(this.mockData.avatarPaths);
    const type = getRandomItem(this.mockData.types);
    const commentsCount = getRandomItem(this.mockData.commentsCount);

    const createdDate = dayjs()
      .subtract(
        generateRandomValue(Constants.FIRST_WEEK_DAY, Constants.LAST_WEEK_DAY),
        'day'
      )
      .toISOString();

    const cityData = cityWithCoordinates.split(';');
    const city = cityData[0];
    const coordinates = [cityData[1], cityData[2]].join(';');

    return [
      title,
      description,
      createdDate,
      city,
      previewImage,
      housingPhoto,
      isPremium,
      isFavorite,
      rating,
      housingType,
      roomsCount,
      guestCount,
      price,
      conveniences,
      firstname,
      avatarPath,
      type,
      commentsCount,
      coordinates,
    ].join('\t');
  }
}
