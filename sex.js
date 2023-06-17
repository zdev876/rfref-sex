export const SexType = {
  MALE: 'Мужчина',
  FEMALE: 'Женщина'
}

export default {
  [SexType.MALE]: {
    name: SexType.MALE,
    latin: 'male',
    regexp: /муж|дед|male|masc|пар|пац|чува|брат/gi
  },
  [SexType.FEMALE]: {
    name: SexType.FEMALE,
    latin: 'female',
    regexp: /жен|баб|female|femin|тел|дев|див|чувих|сестр/gi
  }
};