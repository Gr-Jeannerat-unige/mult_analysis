
console.log("mnFullScaleLimits.toX " + data.mnFullScaleLimits.toX);
console.log("mnFullScaleLimits.fromX " + data.mnFullScaleLimits.fromX);
//console.log(data.multiplets);
console.log(data.multiplets.length);


//let result = analyseMultiplet(doublet, { frequency: 400, debug: true });
let result = analyseMultiplet(doublet, {
  frequency: 600,
  debug: true,
  takeBestPartMultiplet: true,
  appliedPhaseCorrectionType: 1,
});
writeFileSync(
  join(__dirname, '../web', 'result.json'),
  JSON.stringify(result, null, 2),
  'utf8',
);
console.log(result);

