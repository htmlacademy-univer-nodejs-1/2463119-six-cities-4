export const CreateRentOfferValidationMessage = {
  authorId: {
    invalidId: 'authorId field must be a valid id',
  },
  city: {
    invalidFormat: 'Field city must be an string',
  },
  conveniences: {
    invalidFormat: 'Field conveniences must be an array',
    invalid: 'conveniences must be valid enum value',
    length: 'conveniences should be contain min 1 element',
  },
  createdDate: {
    invalidFormat: 'createdDate must be a valid ISO date',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
    invalidFormat: 'Field description must be an string',
  },
  guestsCount: {
    invalidFormat: 'Guests count must be an integer',
    minValue: 'Minimum guests count is 1',
    maxValue: 'Maximum guests count is 10',
  },
  housingPhoto: {
    invalidFormat: 'Field housingPhoto must be an array',
    length: 'housingPhoto should be contains 6 elements',
    invalidValuesFormat: 'Values housingPhoto must be an string',
  },
  housingType: {
    invalid: 'housing type must be valid enum value',
  },
  previewImage: {
    invalidFormat: 'Field previewImage must be an string',
  },
  price: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 100000',
  },
  roomsCount: {
    invalidFormat: 'Rooms count must be an integer',
    minValue: 'Minimum rooms count is 1',
    maxValue: 'Maximum rooms count is 5',
  },
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
    invalidFormat: 'Field title must be an string',
  },
} as const;
