module.exports = function check(str, bracketsConfig) {
  const arr = str.split("");
  const halfLength = arr.length;

  const checkCondition = ({currentValue, nextValue}) => {
    return (currentValue === "{" && nextValue === "}") ||
      (currentValue === "[" && nextValue === "]") ||
      (currentValue === "(" && nextValue === ")") ||
      (currentValue === "|" && nextValue === "|") ||
      (currentValue === "1" && nextValue === "2") ||
      (currentValue === "3" && nextValue === "4") ||
      (currentValue === "5" && nextValue === "6") ||
      (currentValue === "7" && nextValue === "7") ||
      (currentValue === "8" && nextValue === "8");
  };
  for (let i = 0; i < halfLength / 2; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (checkCondition({currentValue : arr[k], nextValue: arr[k + 1]})) {
        arr.splice(k, 2);
      }
    }
  }

  return arr.length === 0;
};
