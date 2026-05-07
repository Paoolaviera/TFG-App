import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelAgricultorPage } from './panel-agricultor.page';

describe('PanelAgricultorPage', () => {
  let component: PanelAgricultorPage;
  let fixture: ComponentFixture<PanelAgricultorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAgricultorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
