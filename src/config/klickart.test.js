import { getklickartURL, setklickartURL } from './klickart';

describe('src/config/klickart', () => {
  const mockURL = 'mockURL';

  describe('setKlickartURL', () => {
    beforeAll(() => {
      setklickartURL(mockURL);
    });

    it('should set the klickartURL attribute', () => {
      expect(getklickartURL()).toEqual(mockURL);
    });
  });

  describe('getKlickartURL', () => {
    describe('when its defined', () => {
      describe('should return the defined klickartURL', () => {
        beforeAll(() => {
          setklickartURL(mockURL);
        });

        it('should return the defined url attribute', () => {
          expect(getklickartURL()).toEqual(mockURL);
        });
      });
    });
  });
});
