import { addTwo } from '.';


describe('module', () => {
  describe('#addTwo', () => {
    it('should add two', () => {
      expect(addTwo(1)).toEqual(3);
    });
  });
});
