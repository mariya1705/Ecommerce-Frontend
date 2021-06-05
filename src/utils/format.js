export const formatPrice = priceWithDecimal => {
  const realPrice = parseInt(priceWithDecimal) / 100
  return realPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })
}
