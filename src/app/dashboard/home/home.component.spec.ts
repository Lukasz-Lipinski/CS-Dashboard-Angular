import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

describe('Testing Home Component', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let service: HomeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [HomeService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HomeService);
  });

  describe('Class tests', () => {
    it('Should get data from service', (done: DoneFn) => {
      component.ngOnInit();
      fixture.detectChanges();

      component.tiles.subscribe({
        next: (tiles) => {
          expect(tiles.length).toEqual(service.tiles.length);
          done();
        },
      });
    });
  });

  describe('Dom tests', () => {
    it('Should render correctly', () => {
      expect(component).toBeDefined();
    });

    it('Should return quantity of tiles that is equaled amount of passing tiles', () => {
      component.ngOnInit();
      fixture.detectChanges();

      const appTiles = fixture.debugElement.queryAll(By.css('app-tile'));

      expect(appTiles.length).toEqual(service.tiles.length);
    });
  });
});
