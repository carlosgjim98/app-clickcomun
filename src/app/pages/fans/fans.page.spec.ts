import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FansPage } from './fans.page';

describe('FansPage', () => {
  let component: FansPage;
  let fixture: ComponentFixture<FansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
