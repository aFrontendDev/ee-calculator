const ops = ["-", "+", "/", "*"];

export const calcOps = {
  "-": (prevVal, nextVal) => prevVal - nextVal,
  "+": (prevVal, nextVal) => prevVal + nextVal,
  "*": (prevVal, nextVal) => prevVal * nextVal,
  "/": (prevVal, nextVal) => prevVal / nextVal
};

export const calc = calcArray => {
  if (!calcArray || calcArray.length < 1) {
    return;
  }

  var currentOp = null;
  return calcArray.reduce((result, val) => {
    if (ops.includes(val)) {
      currentOp = val;
      return result;
    }

    if (isNaN(val)) {
      return result;
    }

    if (currentOp) {
      return calcOps[currentOp](result, val);
    }

    return val;
  }, 0);
};
