import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavegacionComponent } from './menu-navegacion.component';

describe('MenuNavegacionComponent', () => {
  let component: MenuNavegacionComponent;
  let fixture: ComponentFixture<MenuNavegacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuNavegacionComponent]
    });
    fixture = TestBed.createComponent(MenuNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
