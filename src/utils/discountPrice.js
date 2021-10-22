export const discountPrice = (price, discount) => {
  let totalValue = 0;
  const numPrice =
    (typeof price === 'string')
      ? Number(price.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''))
      : price;
  const numDiscount =
    (typeof discount === 'string')
      ? (discount.replace(/[\\%]/g, ''),
      parseFloat(discount.replace(/[\\,]/g, '.')))
      : discount;

  if (!price || !discount) {
    return null;
  } else if (isNaN(numPrice) || isNaN(numDiscount)) {
    return null;
  } else if (numDiscount > 100) {
    return null;
  }

  const percent = numDiscount / 100;
  totalValue = numPrice - numPrice * percent;

  return Number(totalValue.toFixed(2));
};
