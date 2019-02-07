import {stylesUtility} from './Styles.utility';

describe('stylesUtility', (): void => {
  it('should add additional classes when set', (): void => {
    expect(stylesUtility('default-class', 'additional-class-1 additional-class-2'))
      .toEqual('default-class additional-class-1 additional-class-2');
  });

  it('should just return default class when additional classes are not set', (): void => {
    expect(stylesUtility('default-class'))
      .toEqual('default-class');
  });
});
