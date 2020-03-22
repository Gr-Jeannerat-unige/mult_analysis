import { analyseMultiplet } from '/Volumes/san256/users_for_mac_system_macPro/jeannerat/mygit/multiplet-analysis/src/index';

import { writeFileSync } from 'fs';
import { join } from 'path';

export function myModule(data = {}) {
  let result = analyseMultiplet(data, {
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
  return 42;
}
