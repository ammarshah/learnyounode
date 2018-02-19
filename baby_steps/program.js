let sum = process.argv.reduce(
    ( acc, cur ) => isNaN(+cur) ? acc + 0 : acc + +cur,
    0
  );

console.log(sum);