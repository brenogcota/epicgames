const discount = (oldValue, newValue) => {
  const diff = newValue - oldValue;
  return ((diff / oldValue) * 100).toFixed(0);
};

export default discount;
