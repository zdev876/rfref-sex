import sex from './sex.js';
import recognize from './recognize.js';

test('Распознавание пола', () => {
  expect(recognize('мужик')).toBe('Мужчина');
  expect(recognize('мужчина')).toBe('Мужчина');
  expect(recognize('дедуля')).toBe('Мужчина');
  expect(recognize('чувак')).toBe('Мужчина');
  expect(recognize('пацик')).toBe('Мужчина');
  expect(recognize('пацанчик')).toBe('Мужчина');
  expect(recognize('парень')).toBe('Мужчина');
  expect(recognize('парниша')).toBe('Мужчина');
  expect(recognize('братишка')).toBe('Мужчина');
  expect(recognize('братка')).toBe('Мужчина');
  expect(recognize('male')).toBe('Мужчина');
  expect(recognize('masculine')).toBe('Мужчина');

  expect(recognize('баба')).toBe('Женщина');
  expect(recognize('телка')).toBe('Женщина');
  expect(recognize('тёлка')).toBe('Женщина');
  expect(recognize('телка')).toBe('Женщина');
  expect(recognize('девуля')).toBe('Женщина');
  expect(recognize('девушка')).toBe('Женщина');
  expect(recognize('дивчина')).toBe('Женщина');
  expect(recognize('девочка')).toBe('Женщина');
  expect(recognize('чувиха')).toBe('Женщина');
  expect(recognize('девчуля')).toBe('Женщина');
  expect(recognize('female')).toBe('Женщина');
  expect(recognize('feminine')).toBe('Женщина');
  expect(recognize('сестричка')).toBe('Женщина');


});