export function toCurrencyString(value?: string | number, digits = 2) {
  if (Number.isNaN(value)) return '';

  return new Intl.NumberFormat('sfb', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number(value));
}
