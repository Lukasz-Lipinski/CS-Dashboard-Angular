import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MenuService } from '../menu/menu.service';
import { SidebarComponent } from './sidebar.component';

describe('Testing Sidebar component', () => {
  let fixture: ComponentFixture<SidebarComponent>;
  let component: SidebarComponent;
  let service: MenuService;
  const mockedData = { href: 'link', label: 'link', icon: 'icon' };

  describe('Class tests', () => {
    beforeEach(() => {
      service = new MenuService();
      service.sideMenuLinks = [mockedData];
      component = new SidebarComponent(service);
      component.ngOnInit();
    });

    it('Should sidebar links at the beginning', () => {
      expect(component.sidebarLinks.length).not.toEqual(0);
    });

    it('Should proceed link with mocked data', () => {
      const link = component.sidebarLinks[0];

      expect(link.href).toBe(mockedData.href);
      expect(link.icon).toBe(mockedData.icon);
      expect(link.label).toBe(mockedData.label);
    });
  });

  describe('Dom tests', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [SidebarComponent],
        imports: [RouterTestingModule],
        providers: [MenuService],
      }).compileComponents();

      fixture = TestBed.createComponent(SidebarComponent);
      component = fixture.componentInstance;
      service = TestBed.inject(MenuService);
      component.ngOnInit();
      fixture.detectChanges();
    });

    it('Should render correctly', () => {
      expect(component).toBeDefined();
    });

    it('Should render two links', () => {
      const links = fixture.debugElement.queryAll(By.css('a'));
      const addBtn = (links[0].nativeElement as HTMLLinkElement).querySelector(
        'p'
      ) as HTMLParagraphElement;
      const removeBtn = (
        links[1].nativeElement as HTMLLinkElement
      ).querySelector('p') as HTMLParagraphElement;

      expect(links.length).toEqual(2);
      expect(addBtn.textContent).toBe(service.sideMenuLinks[0].label);
      expect(removeBtn.textContent).toBe(service.sideMenuLinks[1].label);
    });
  });
});
