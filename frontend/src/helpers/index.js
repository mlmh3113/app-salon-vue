
export const formatCurrency = (value) => Number(value).toLocaleString('en-US', { style: 'currency', currency: 'USD' })