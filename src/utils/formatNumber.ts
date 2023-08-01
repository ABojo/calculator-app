function formatNumber(value: string) {
  if (value.length < 1) return "";
  if (value === ".") return "0.";

  let formattedNumber = parseFloat(value).toLocaleString("en", { maximumFractionDigits: 10 });

  if (value[value.length - 1] === ".") {
    formattedNumber += ".";
  }

  return formattedNumber;
}

export default formatNumber;
