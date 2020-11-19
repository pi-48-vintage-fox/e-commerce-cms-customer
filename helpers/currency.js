export function toCurrencyFormat(amount) {
  return (
    'Rp ' +
    new Intl.NumberFormat('id-ID', {
      style: 'decimal',
    }).format(amount)
  )
}
