import { MenuService } from './menu.service';
describe("Testing Menu Service", () => {
  let menuService: MenuService;
  const mockedSideMenuLinks = [
    {href: "link 1", label: "link 2", icon: "link 3" }
  ];

  const mockedUpperMenuLinks = [
    {href: "link 5", label: "link 6", icon: "link 7" }
  ]
  beforeEach(() => {
    menuService = new MenuService();
    menuService.sideMenuLinks = mockedSideMenuLinks;
    menuService.upperMenuLinks = mockedUpperMenuLinks;
   })

  it("Should return upperLinksMenu", () => {
    expect(menuService.sideMenuLinks.length).not.toBeNull();
    expect(menuService.sideMenuLinks.length).toEqual(mockedSideMenuLinks.length);
   });

   it("Should return upperLinksMenu", () => {
    expect(menuService.upperMenuLinks.length).not.toBeNull();
    expect(menuService.upperMenuLinks.length).toEqual(mockedUpperMenuLinks.length);
   })
 });