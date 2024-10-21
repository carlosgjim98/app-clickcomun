import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HuellaPage } from './huella.page';

describe('HuellaPage', () => {
  let component: HuellaPage;
  let fixture: ComponentFixture<HuellaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HuellaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
