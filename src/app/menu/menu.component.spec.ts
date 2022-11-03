import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../login/auth.service';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';

describe('Testing Menu Component', () => {
  let fixture: ComponentFixture<MenuComponent>;
  let component: MenuComponent;
  let authService: AuthService;
  let menuService: MenuService;
  let httpClientService: HttpClient;

  describe('Class tests', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [MenuComponent],
        providers: [
          AuthService,
          { provide: AuthService, setValue: [] },
          MenuService,
          { provide: MenuService, setValue: [] },
          HttpClient,
          { provide: HttpClient, setValue: {} },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(MenuComponent);
      component = fixture.componentInstance;

      authService = TestBed.inject(AuthService);
      menuService = TestBed.inject(MenuService);
      httpClientService = TestBed.inject(HttpClient);
    });
    it('Should return ', () => {
      authService = new AuthService(httpClientService);
      menuService = new MenuService();
    });
  });
});
