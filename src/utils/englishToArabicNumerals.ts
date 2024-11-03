const englishToArabicNumerals = (num: number | string): string => {
  const englishNumerals = '0123456789';
  const arabicNumerals = '٠١٢٣٤٥٦٧٨٩';

  return num
    .toString()
    .split('')
    .map((digit) => {
      const index = englishNumerals.indexOf(digit);
      console.log(index);
      return index !== -1 ? arabicNumerals[index] : digit;
    })
    .join('');
};

export default englishToArabicNumerals;
