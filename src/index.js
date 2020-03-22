import doublet from '../data/dd-exp2.json';

import { analyseMultiplet } from 'multiplet-analysis';
import { writeFileSync } from 'fs';
import { join } from 'path';

export function myModule() {
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
return 42
}