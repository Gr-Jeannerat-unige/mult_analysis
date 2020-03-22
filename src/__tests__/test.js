import { myModule } from '..';

describe('test myModule', () => {
  it('should return 42', () => {
    const result = myModule();
    expect(result.checkvalue).toStrictEqual(42);
  });
});
