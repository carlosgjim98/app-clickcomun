import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaSlidePage } from './prueba-slide.page';

describe('PruebaSlidePage', () => {
  let component: PruebaSlidePage;
  let fixture: ComponentFixture<PruebaSlidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
