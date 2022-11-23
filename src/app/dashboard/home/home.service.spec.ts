import { HomeService } from './home.service';

describe('Testing Home Service', () => {
  let service: HomeService;

  it('Should return data using stream', (done: DoneFn) => {
    service = new HomeService();
    service.tiles = [{ icon: 'test', navigation: 'test', text: 'test' }];

    service.getTiles().subscribe({
      next: (data) => {
        expect(data.length).toEqual(service.tiles.length);
        done();
      },
    });
  });
});
