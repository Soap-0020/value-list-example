import isUnderfinedOrNull from "./isUndefinedOrNull";

const numberFormats = {
  [""]: 1,
  K: 1_000,
  M: 1_000_000,
  B: 1_000_000_000,
};

const formatNumber = (value: number) => {
  for (const [suffix, suffixValue] of Object.entries(numberFormats).reverse()) {
    if (suffixValue > value) continue;
    return Math.trunc((value / suffixValue) * 100) / 100 + suffix;
  }

  return value.toLocaleString();
};

const formatValue = (value: any) =>
  typeof value == "number"
    ? formatNumber(value)
    : isUnderfinedOrNull(value)
    ? "N/A"
    : value.toString();

export default formatValue;
