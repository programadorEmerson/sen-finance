const numberFormatter = (
  value: number,
  style: 'decimal' | 'currency' | 'float',
): string => {
  if (style === 'decimal') {
    return new Intl.NumberFormat('pt-BR').format(value);
  } else if (style === 'float') {
    return String(value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  }
  return new Intl.NumberFormat('pt-BR', { style, currency: 'BRL' }).format(
    value,
  );
};

export default numberFormatter;
