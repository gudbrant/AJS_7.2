export default function validateNumber(number) {
  const val1 = number.replace(/[\s()\-+]/g, '');

  if ((/^8(?=9)/.test(val1) === true)) {
    const val2 = val1.replace(/8/g, '7');
    return '+'.concat(val2);
  } if ((/^7(?=9)/.test(val1) === true)) {
    return '+'.concat(val1);
  } if ((/^8(?=6)/.test(val1) === true)) {
    return '+'.concat(val1);
  } throw new Error('Номер введен неверно!');
}
