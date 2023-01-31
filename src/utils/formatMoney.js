export function formatMoney(num) {
  const arr = Number(num)
    .toLocaleString('en', {
      useGrouping: true,
    })
    .replace(',', ' ')
    .split(' ');
  if (arr[arr.length - 1].includes('.')) {
    if (arr[arr.length - 1].length === 2) {
      return arr.join(' ');
    }
    arr[arr.length - 1] = arr[arr.length - 1] + '0';
    return arr.join(' ');
  }
  arr[arr.length - 1] = arr[arr.length - 1] + '.00';
  return arr.join(' ');
}