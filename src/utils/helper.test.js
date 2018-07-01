import Helper from './helper'

describe('utils/helper.js', () => {
  it('should return false when window object has no orientation', () => {
    expect(Helper.isMobileDevice()).toEqual(false);
  })

  it('should return true when window object has orientation', () => {
    global.orientation = 0;
    expect(Helper.isMobileDevice()).toEqual(true);
  })

  it('should return false when navigator.userAgent has no IEMobile', () => {
    delete global.orientation;
    expect(Helper.isMobileDevice()).toEqual(false);
  })

  it('should return true when navigator.userAgent has IEMobile', () => {
    Object.defineProperty(window.navigator, 'userAgent', {value: 'IEMobile'});
    expect(Helper.isMobileDevice()).toEqual(true);
  })
})