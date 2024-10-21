import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetInsigniaPage } from './get-insignia.page';

describe('GetInsigniaPage', () => {
  let component: GetInsigniaPage;
  let fixture: ComponentFixture<GetInsigniaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInsigniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
