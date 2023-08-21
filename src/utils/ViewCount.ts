export const formatShortString = (value: number): string => {
  let Count: number = value;

  if (Count < 999) {
    return Count + "";
  } else if (Count < 1000000) {
    return (Count / 1000).toFixed(1) + "K";
  } else if (Count < 100000000) {
    return (Count / 1000000).toFixed(1) + "M";
  } else if (Count > 1000000000) {
    return (Count / 100000000).toFixed(1) + "B";
  }
  return Count.toString();
};
