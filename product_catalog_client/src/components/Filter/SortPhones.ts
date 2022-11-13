import { FilterType } from '../../enums/FilterTypes';
import { Phone } from '../../types/Phone';

export function sortPhones (
  phones: Phone[],
  filterType: FilterType,
): Phone[] {
  const sortedPhones = [...phones];

  sortedPhones.sort((a, b) => {
    switch (filterType) {
      case FilterType.OLDEST:
        return a.year - b.year;
      
      case FilterType.ASC:
        return +a.price - +b.price;

      default:
      case FilterType.NEWEST:
        return b.year - a.year;
    }
  });

  return sortedPhones;
}
