import { writeFileSync } from 'fs';
import { join } from 'path';

import doublet from '../data/dd-exp2.json';
import { myModule } from '../src/index';

const result = myModule(doublet);

writeFileSync(
  join(__dirname, '../web', 'result.json'),
  JSON.stringify(result, null, 2),
  'utf8',
);
console.log(result);
