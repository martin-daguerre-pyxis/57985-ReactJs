import PropTypes from "prop-types";

const useCurrency = ({
  value,
  config = {
    style: "currency", // 'decimal', 'currency', 'percent', 'unit'
    currency: "UYU", // 'EUR', 'USD', 'UYU'
    currencyDisplay: "code", // 'symbol', 'code', 'name'
    maximumFractionDigits: 0, // 0, 1, 2, 3
    useGrouping: true,
  },
}) => {
  if (typeof value !== "number") {
    throw new Error("El número debe ser de tipo number");
  }
  return value.toLocaleString("es-UY", {
    style: config.style,
    currency: config.currency,
    currencyDisplay: config.currencyDisplay,
    maximumFractionDigits: config.maximumFractionDigits,
    useGrouping: config.useGrouping,
  });
};

useCurrency.propTypes = {
  value: PropTypes.number.isRequired,
  config: PropTypes.shape({
    style: (PropTypes.string = "currency"), // 'decimal', 'currency', 'percent', 'unit',
    currency: (PropTypes.string = "UYU"), // 'EUR', 'USD', 'UYU', 'ARS', 'REALES'
    currencyDisplay: (PropTypes.string = "code"), // 'symbol', 'code', 'name',
    maximumFractionDigits: (PropTypes.number = 0), // 0, 1, 2, 3,
    useGrouping: (PropTypes.bool = true),
  }),
};

export default useCurrency;
