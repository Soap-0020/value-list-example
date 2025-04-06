const formatValue = (value: any) =>
  typeof value == "number" ? value.toLocaleString() : value;

export default formatValue;
