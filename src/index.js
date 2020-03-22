import { analyseMultiplet } from '/Volumes/san256/users_for_mac_system_macPro/jeannerat/mygit/multiplet-analysis/src/index';

export function myModule(data = {}, options) {
  let result = analyseMultiplet(data, options);
  result.checkvalue = 42;
  return result;

}
