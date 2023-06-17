import sex from './sex.js';
import { SexType } from './sex.js';

export default function recognize (str) {
  let normalize = str.toLowerCase().replace('ё', 'е');
  // Начать с женщины
  if (normalize.match(sex[SexType.FEMALE].regexp)) {
    return 'Женщина';
  } else if (normalize.match(sex[SexType.MALE].regexp)) {
    return 'Мужчина';
  } else {
    console.warn('Непонятный пол');
  }
}