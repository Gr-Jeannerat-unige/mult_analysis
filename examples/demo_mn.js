import { writeFileSync } from 'fs';
import { join } from 'path';

import data from '../St 290-JK.json';
import { myModule } from '../src/index';


//console.log(data.multiplets);
console.log(data);

console.log(data.multiplets.length);
let fromPt, toPt;
let x = [];
let y = [];
const increment =
  (data.mnFullScaleLimits.toX - data.mnFullScaleLimits.fromX) /
  data.mnReal.length;
let result;
let results = [];
for (let i = 0; i < data.multiplets.length; i++) {
  fromPt =
    data.mnReal.length *
    (Math.abs(data.multiplets[i].rangeMax - data.mnFullScaleLimits.toX) /
      Math.abs(data.mnFullScaleLimits.toX - data.mnFullScaleLimits.fromX));
  toPt =
    data.mnReal.length *
    (Math.abs(data.multiplets[i].rangeMin - data.mnFullScaleLimits.toX) /
      Math.abs(data.mnFullScaleLimits.toX - data.mnFullScaleLimits.fromX));
  fromPt = Math.round(fromPt);
  toPt = Math.round(toPt);

  y = data.mnReal.slice(fromPt, toPt);
  //x = Array.apply(null, { length: y.length }).map(Function.call, (Number + 0.2));
  x = Array.from(
    { length: y.length },
    (v, k) => increment * k + data.multiplets[i].rangeMin,
  );
  result = myModule(
    { x, y },
    {
      frequency: 600,
      debug: true,
      takeBestPartMultiplet: true,
      appliedPhaseCorrectionType: 0,
    },
  );
  results[i] = result;
  console.log(
    `(${i + 1}):${data.multiplets[i].name}  ${
      data.multiplets[i].category
    } from ${fromPt} to ${toPt} , ${data.multiplets[i].rangeMin} - ${
      data.multiplets[i].rangeMax
    } phase : ${result.phaseCorrectionOnMultipletInDeg} `,
  );
}

writeFileSync(
  join(__dirname, '../docs', 'results_mn.json'),
  JSON.stringify(results, null, 2),
  'utf8',
);
console.log(result);
