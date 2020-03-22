import { writeFileSync } from 'fs';
import { join } from 'path';

import doublet from '../data/dd-exp2.json';
import { myModule } from '../src/index';

const result = myModule(doublet, {
  frequency: 600,
  debug: true,
  takeBestPartMultiplet: true,
  appliedPhaseCorrectionType: 1,
});

writeFileSync(
  join(__dirname, '../docs', 'result.json'),
  JSON.stringify(result, null, 2),
  'utf8',
);
console.log(result);
